"use client";

import { useRef, useState, useTransition } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact-us/actions";
import { ArrowRightIcon } from "./icons";

const initialState: ContactFormState = { status: "idle" };
const BANNER_DURATION_MS = 5000;

const fieldClassName =
  "min-h-[38px] border-2 border-black bg-transparent px-4 font-mono font-medium text-black outline-none placeholder:font-medium placeholder:text-black focus:border-primary disabled:opacity-60";

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleAction(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(state, formData);
      setState(result);

      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

      if (result.status === "success") {
        formRef.current?.reset();
      }
      if (result.status === "success" || result.status === "error") {
        hideTimeoutRef.current = setTimeout(() => {
          setState(initialState);
        }, BANNER_DURATION_MS);
      }
    });
  }

  return (
    <form ref={formRef} action={handleAction} className="mt-12 flex w-full max-w-[500px] flex-col">
      <input
        name="name"
        aria-label="Name"
        type="text"
        disabled={isPending}
        className={fieldClassName}
        placeholder="Name..."
      />
      {state.status === "invalid" && state.fieldErrors?.name && (
        <p className="mt-1 font-mono text-xs text-service-mobile">{state.fieldErrors.name}</p>
      )}

      <input
        name="email"
        aria-label="Email"
        type="email"
        disabled={isPending}
        className={`mt-4 ${fieldClassName}`}
        placeholder="Email..."
      />
      {state.status === "invalid" && state.fieldErrors?.email && (
        <p className="mt-1 font-mono text-xs text-service-mobile">{state.fieldErrors.email}</p>
      )}

      <textarea
        name="message"
        aria-label="Message"
        rows={3}
        disabled={isPending}
        className={`mt-4 resize-none pt-2.5 ${fieldClassName}`}
        placeholder="Message..."
      />
      {state.status === "invalid" && state.fieldErrors?.message && (
        <p className="mt-1 font-mono text-xs text-service-mobile">{state.fieldErrors.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-12 inline-flex w-full items-center justify-center gap-2 bg-primary px-4 py-4 font-mono text-sm font-bold text-white transition-colors hover:bg-primary-shade disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit sm:justify-start"
      >
        {isPending ? "Sending..." : "Send inquiry"}
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      {state.status === "success" && (
        <p className="mt-4 font-mono text-sm font-semibold text-service-software">
          Thanks! Your message has been sent — we&apos;ll get back to you soon.
        </p>
      )}
      {state.status === "error" && (
        <p className="mt-4 font-mono text-sm font-semibold text-service-mobile">{state.error}</p>
      )}
    </form>
  );
}
