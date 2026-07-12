"use server";

import { getAdminFirestore } from "@/lib/firebase-admin";

const CONTACT_EMAIL = "dev@southdevs.net";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

export type ContactFormState = {
  status: "idle" | "invalid" | "success" | "error";
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
    captcha?: string;
  };
  error?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY || !token) return false;

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token }),
    });
    const data = (await response.json()) as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error("Failed to verify Turnstile token", error);
    return false;
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const turnstileToken = String(formData.get("turnstileToken") ?? "").trim();

  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (!message) fieldErrors.message = "Please enter a message.";
  if (!turnstileToken) fieldErrors.captcha = "Please complete the verification.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "invalid", fieldErrors };
  }

  const isHuman = await verifyTurnstileToken(turnstileToken);
  if (!isHuman) {
    return {
      status: "invalid",
      fieldErrors: { captcha: "Verification failed. Please try again." },
    };
  }

  try {
    const db = getAdminFirestore();

    await db.collection("mail").add({
      from: CONTACT_EMAIL,
      message: {
        subject: `Message from ${email}`,
        text: message,
        html: `
        <p>
          <strong>Name</strong>
        </p>
        <p>${escapeHtml(name)}</p>
        <br>
        <p>
          <strong>Email address</strong>
        </p>
        <p>${escapeHtml(email)}</p>
        <br>
        <p>
          <strong>Project Type</strong>
        </p>
        <p>${escapeHtml(projectType || "Not specified")}</p>
        <p>
          <strong>Message</strong>
        </p>
        <p>${escapeHtml(message)}</p>
        `,
      },
      to: [CONTACT_EMAIL],
    });

    return { status: "success" };
  } catch (error) {
    console.error("Failed to submit contact form", error);
    return {
      status: "error",
      error: "Something went wrong sending your message. Please try again.",
    };
  }
}
