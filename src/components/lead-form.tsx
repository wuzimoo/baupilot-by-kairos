"use client";

import { track } from "@vercel/analytics";
import { FormEvent, useState } from "react";

import { LandingLocale, LeadFormCopy } from "@/content/landing";

type LeadFormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  role: string;
  fieldEmployees: string;
  activeProjects: string;
  meetingFormat: string;
  currentProcess: string;
  interest: string;
  locale: LandingLocale;
};

function createInitialState(
  copy: LeadFormCopy,
  locale: LandingLocale
): LeadFormState {
  return {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    role: "",
    fieldEmployees: "",
    activeProjects: "",
    meetingFormat: copy.preferredFormatOptions[0] ?? "",
    currentProcess: "",
    interest: copy.interestOptions[0] ?? "",
    locale,
  };
}

export function LeadForm({
  copy,
  locale,
}: {
  copy: LeadFormCopy;
  locale: LandingLocale;
}) {
  const [form, setForm] = useState(() => createInitialState(copy, locale));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(responseBody?.error || copy.requestError);
      }

      track("form_submission", {
        interest: form.interest,
        meeting_format: form.meetingFormat,
        locale,
      });

      setSuccess(copy.successMessage);
      setForm(createInitialState(copy, locale));
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : copy.unknownError
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label={copy.fullNameLabel}
          name="fullName"
          required
          value={form.fullName}
          onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
        />
        <Field
          label={copy.companyNameLabel}
          name="companyName"
          required
          value={form.companyName}
          onChange={(value) => setForm((current) => ({ ...current, companyName: value }))}
        />
        <Field
          label={copy.emailLabel}
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
        />
        <Field
          label={copy.phoneLabel}
          name="phone"
          value={form.phone}
          onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
        />
        <Field
          label={copy.roleLabel}
          name="role"
          required
          value={form.role}
          onChange={(value) => setForm((current) => ({ ...current, role: value }))}
        />
        <Field
          label={copy.fieldEmployeesLabel}
          name="fieldEmployees"
          required
          value={form.fieldEmployees}
          onChange={(value) =>
            setForm((current) => ({ ...current, fieldEmployees: value }))
          }
        />
        <Field
          label={copy.activeProjectsLabel}
          name="activeProjects"
          required
          value={form.activeProjects}
          onChange={(value) =>
            setForm((current) => ({ ...current, activeProjects: value }))
          }
        />

        <label className="grid gap-2 text-sm font-medium text-background">
          {copy.preferredFormatLabel}
          <select
            className="min-h-13 rounded-2xl border border-white/10 bg-background px-4 text-base text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
            name="meetingFormat"
            value={form.meetingFormat}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                meetingFormat: event.target.value,
              }))
            }
          >
            {copy.preferredFormatOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-background md:col-span-2">
          {copy.mainInterestLabel}
          <select
            className="min-h-13 rounded-2xl border border-white/10 bg-background px-4 text-base text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
            name="interest"
            value={form.interest}
            onChange={(event) =>
              setForm((current) => ({ ...current, interest: event.target.value }))
            }
          >
            {copy.interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-background md:col-span-2">
          {copy.currentProcessLabel}
          <textarea
            className="min-h-36 rounded-[1.5rem] border border-white/10 bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
            name="currentProcess"
            required
            value={form.currentProcess}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                currentProcess: event.target.value,
              }))
            }
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-7 text-base font-semibold text-background shadow-sm transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? copy.submitPending : copy.submitIdle}
        </button>
        <p className="technical-label text-background/60">
          {copy.helper}
        </p>
      </div>

      <div className="mt-4 min-h-6">
        {error ? (
          <p aria-live="polite" className="text-sm font-medium text-red-300">
            {error}
          </p>
        ) : null}
        {success ? (
          <p aria-live="polite" className="text-sm font-medium text-green-300">
            {success}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  type?: "email" | "text";
  onChange: (value: string) => void;
};

function Field({
  label,
  name,
  onChange,
  required,
  type = "text",
  value,
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-background">
      {label}
      <input
        className="min-h-13 rounded-2xl border border-white/10 bg-background px-4 text-base text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
        name={name}
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
