"use client";

import { useRef, useState, useTransition } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact-us/actions";
import { ArrowRightIcon } from "./icons";

const initialState: ContactFormState = { status: "idle" };
const BANNER_DURATION_MS = 5000;

const PROJECT_TYPES = ["Web Development", "Mobile App", "Custom Software", "Business System", "Other"];

const labelClassName = "block text-[10px] uppercase tracking-widest text-neutral-400 mb-1.5";
const fieldClassName =
  "w-full border border-black/15 bg-white px-3.5 py-2.5 text-sm text-black outline-none placeholder:text-neutral-400 focus:border-black disabled:opacity-60";

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
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
        setProjectType(PROJECT_TYPES[0]);
      }
      if (result.status === "success" || result.status === "error") {
        hideTimeoutRef.current = setTimeout(() => {
          setState(initialState);
        }, BANNER_DURATION_MS);
      }
    });
  }

  return (
    <form
      ref={formRef}
      action={handleAction}
      className="w-full max-w-[520px] border border-black/10 p-6 sm:p-8"
    >
      <input type="hidden" name="projectType" value={projectType} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            disabled={isPending}
            className={fieldClassName}
            placeholder="Juan dela Cruz"
          />
          {state.status === "invalid" && state.fieldErrors?.name && (
            <p className="mt-1 text-xs text-red-500">{state.fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            disabled={isPending}
            className={fieldClassName}
            placeholder="you@company.com"
          />
          {state.status === "invalid" && state.fieldErrors?.email && (
            <p className="mt-1 text-xs text-red-500">{state.fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <span className={labelClassName}>Project Type</span>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              disabled={isPending}
              onClick={() => setProjectType(type)}
              className={`border px-3 py-1.5 text-xs font-medium transition-colors disabled:opacity-60 ${
                projectType === type
                  ? "border-black bg-black text-white"
                  : "border-black/15 text-neutral-600 hover:border-black/40"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className={`resize-none ${fieldClassName}`}
          placeholder="Tell us about your project, goals, and timeline..."
        />
        {state.status === "invalid" && state.fieldErrors?.message && (
          <p className="mt-1 text-xs text-red-500">{state.fieldErrors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-black px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Send inquiry"}
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-neutral-400">
        No spam. No commitment. Just a conversation.
      </p>

      {state.status === "success" && (
        <p className="mt-4 text-sm font-semibold text-green-600">
          Thanks! Your message has been sent — we&apos;ll get back to you soon.
        </p>
      )}
      {state.status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-500">{state.error}</p>
      )}
    </form>
  );
}
