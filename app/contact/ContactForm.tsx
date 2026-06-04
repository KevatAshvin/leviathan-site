"use client";

import { FormEvent, useState } from "react";

const revenueOptions = [
  "Under $5,000",
  "$5,000–$20,000",
  "$20,000–$50,000",
  "$50,000–$100,000",
  "Over $100,000",
];

const marketplaceOptions = [
  "Amazon.com US",
  "Amazon.co.uk UK",
  "Amazon.in India",
  "Amazon.ca Canada",
  "Amazon.de Germany",
  "Amazon.fr France",
  "Amazon.it Italy",
  "Amazon.es Spain",
  "Amazon.com.au Australia",
  "Multiple marketplaces",
];

const serviceOptions = [
  "FBA Reconciliation & Reimbursement Recovery",
  "FBA Account Management",
  "Amazon Product Research",
  "All Services / Not Sure Yet",
];

const requiredFields = ["name", "email", "marketplace", "service"] as const;
const FALLBACK_EMAIL = "hello@leviathansellers.com";

type RequiredField = (typeof requiredFields)[number];
type Errors = Partial<Record<RequiredField | "submit", string>>;

function fieldClass(hasError: boolean) {
  return `mt-2 w-full rounded-xl border px-3 py-2.5 text-base text-[#0F172A] outline-none transition focus:ring-2 ${
    hasError
      ? "border-[#DC2626] focus:ring-red-100"
      : "border-[#E2E8F0] bg-white focus:border-[#F97316] focus:ring-orange-100"
  }`;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [serviceUnavailable, setServiceUnavailable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setServiceUnavailable(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const nextErrors: Errors = {};

    requiredFields.forEach((field) => {
      const value = String(payload[field] ?? "").trim();
      if (!value) {
        nextErrors[field] = "This field is required.";
      }
    });

    const email = String(payload.email ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        if (response.status === 503 || response.status === 502) {
          setServiceUnavailable(true);
          return;
        }
        setErrors({
          submit: result.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      form.reset();
      setSuccessMessage(
        "✓ Request received! We'll review your account and be in touch within 48 hours.",
      );
    } catch {
      setServiceUnavailable(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2E8F0] bg-white p-6 lg:p-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-[#0F172A]">
        Request Your Free Audit
      </h2>
      <p className="mt-3 leading-7 text-[#64748B]">
        Takes 2 minutes. Results within 48 hours. 100% free — no credit card
        required.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Your Name *
          <input
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass(Boolean(errors.name))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="mt-1 block text-sm text-red-600">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          Email Address *
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass(Boolean(errors.email))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <span id="email-error" className="mt-1 block text-sm text-red-600">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass(false)}
          />
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          Monthly Revenue USD
          <select name="monthlyRevenue" className={fieldClass(false)} defaultValue="">
            <option value="" disabled>
              Select monthly revenue
            </option>
            {revenueOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          Primary Marketplace *
          <select
            name="marketplace"
            className={fieldClass(Boolean(errors.marketplace))}
            defaultValue=""
            aria-invalid={Boolean(errors.marketplace)}
            aria-describedby={
              errors.marketplace ? "marketplace-error" : undefined
            }
          >
            <option value="" disabled>
              Select marketplace
            </option>
            {marketplaceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.marketplace ? (
            <span
              id="marketplace-error"
              className="mt-1 block text-sm text-red-600"
            >
              {errors.marketplace}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          Service Interested In *
          <select
            name="service"
            className={fieldClass(Boolean(errors.service))}
            defaultValue=""
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <span id="service-error" className="mt-1 block text-sm text-red-600">
              {errors.service}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-[#0F172A]">
          How can we help you?
          <textarea
            name="message"
            rows={4}
            className={`${fieldClass(false)} resize-y`}
          />
        </label>

        <label style={{ display: "none" }}>
          Website URL
          <input name="website_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {serviceUnavailable ? (
        <div
          role="alert"
          className="mt-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800"
        >
          <p className="font-semibold">
            Our form is temporarily unavailable.
          </p>
          <p className="mt-1">
            Please email{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Free%20FBA%20Audit%20Request`}
              className="font-semibold text-amber-900 underline hover:text-[#F97316]"
            >
              {FALLBACK_EMAIL}
            </a>{" "}
            with your marketplace and a short note about your account, and we&apos;ll
            be in touch within 48 business hours.
          </p>
        </div>
      ) : errors.submit ? (
        <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {errors.submit}
        </p>
      ) : null}

      {successMessage ? (
        <p className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          {successMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-xl bg-[#F97316] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#EA580C] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Audit Request →"}
      </button>

      <p className="mt-4 text-sm leading-6 text-[#64748B]">
        🔒 Your information is secure and never shared. We respond within 24
        business hours.
      </p>
    </form>
  );
}
