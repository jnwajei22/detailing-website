"use client";

import { useMemo, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xleqwdpy";

const EMAIL = "jnwajei22@gmail.com";
const PHONE = "(217) 303-6825";
const PHONE_HREF = "tel:+12173036825";

const SERVICES = [
  { value: "full-detail", label: "Full Detail" },
  { value: "interior-reset", label: "Interior Reset" },
  { value: "exterior-wash", label: "Exterior Wash" },
  { value: "maintenance-detail", label: "Maintenance Detail" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const VEHICLE_TYPES = [
  "Sedan / Coupe",
  "SUV",
  "Truck",
  "Van / 3-Row",
  "Other",
] as const;

const LOCATION_TYPES = [
  "Mobile appointment",
  "Drop-off / location-based appointment",
  "Not sure yet",
] as const;

type FormStatus = "idle" | "sending" | "sent" | "error";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function buildMailto({
  name,
  fromEmail,
  phone,
  vehicleType,
  vehicle,
  service,
  preferredDate,
  locationType,
  serviceArea,
  message,
}: {
  name: string;
  fromEmail: string;
  phone: string;
  vehicleType: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  locationType: string;
  serviceArea: string;
  message: string;
}) {
  const serviceLabel =
    SERVICES.find((item) => item.value === service)?.label ??
    "Detailing request";

  const subject = `Detailing request — ${serviceLabel}`;
  const bodyLines = [
    `Name: ${name || "-"}`,
    `Email: ${fromEmail || "-"}`,
    `Phone: ${phone || "-"}`,
    `Vehicle Type: ${vehicleType || "-"}`,
    `Vehicle: ${vehicle || "-"}`,
    `Requested Service: ${serviceLabel}`,
    `Preferred Date: ${preferredDate || "-"}`,
    `Location Type: ${locationType || "-"}`,
    `Service Area: ${serviceArea || "-"}`,
    "",
    "Vehicle Condition / Notes:",
    message || "-",
    "",
    "---",
    "Sent from the detailing website booking form.",
  ];

  const params = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });

  return `mailto:${EMAIL}?${params.toString()}`;
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] =
    useState<(typeof SERVICES)[number]["value"]>("full-detail");
  const [preferredDate, setPreferredDate] = useState("");
  const [locationType, setLocationType] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const mailto = useMemo(
    () =>
      buildMailto({
        name,
        fromEmail,
        phone,
        vehicleType,
        vehicle,
        service,
        preferredDate,
        locationType,
        serviceArea,
        message,
      }),
    [
      name,
      fromEmail,
      phone,
      vehicleType,
      vehicle,
      service,
      preferredDate,
      locationType,
      serviceArea,
      message,
    ]
  );

  const canSubmit =
    status !== "sending" &&
    name.trim().length >= 2 &&
    phone.trim().length >= 7 &&
    isEmail(fromEmail) &&
    vehicleType.trim().length > 0 &&
    locationType.trim().length > 0 &&
    message.trim().length >= 10 &&
    website.trim().length === 0;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (website.trim().length > 0) {
      setStatus("sent");
      return;
    }

    if (!canSubmit) {
      setStatus("error");
      setError("Please fill out the required fields before sending.");
      return;
    }

    try {
      setStatus("sending");

      const serviceLabel =
        SERVICES.find((item) => item.value === service)?.label ?? service;

      const payload = {
        name: name.trim(),
        email: fromEmail.trim(),
        phone: phone.trim(),
        vehicle_type: vehicleType,
        vehicle: vehicle.trim(),
        requested_service: serviceLabel,
        preferred_date: preferredDate || "-",
        location_type: locationType,
        service_area: serviceArea.trim(),
        message: message.trim(),
        _subject: `New detailing booking request — ${serviceLabel}`,
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        setError("Couldn’t send right now. Try again, or use the email link.");
        return;
      }

      setStatus("sent");

      setName("");
      setFromEmail("");
      setPhone("");
      setVehicleType("");
      setVehicle("");
      setService("full-detail");
      setPreferredDate("");
      setLocationType("");
      setServiceArea("");
      setMessage("");
      setWebsite("");

      window.setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setError("Network error. Try again, or use the email link.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Booking form</h2>
        <p className="mt-2 text-sm leading-6 text-foreground-muted">
          The more specific you are, the faster the quote gets cleaned up. Pun
          intended. Barely.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Name *</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Phone *</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="(000) 000-0000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Email *</span>
          <input
            value={fromEmail}
            onChange={(event) => setFromEmail(event.target.value)}
            autoComplete="email"
            inputMode="email"
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Vehicle Type *</span>
          <select
            value={vehicleType}
            onChange={(event) => setVehicleType(event.target.value)}
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
          >
            <option value="">Select vehicle type</option>
            {VEHICLE_TYPES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium">Vehicle</span>
          <input
            value={vehicle}
            onChange={(event) => setVehicle(event.target.value)}
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="Year, make, model — ex: 2018 Toyota Camry"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Requested Service *</span>
          <select
            value={service}
            onChange={(event) =>
              setService(
                event.target.value as (typeof SERVICES)[number]["value"]
              )
            }
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
          >
            {SERVICES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Preferred Date</span>
          <input
            value={preferredDate}
            onChange={(event) => setPreferredDate(event.target.value)}
            type="date"
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium">Location Type *</span>
          <select
            value={locationType}
            onChange={(event) => setLocationType(event.target.value)}
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
          >
            <option value="">Select location type</option>
            {LOCATION_TYPES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium">Service Address / Area</span>
          <input
            value={serviceArea}
            onChange={(event) => setServiceArea(event.target.value)}
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="City or general area — ex: Cedar Hill, Grand Prairie, Arlington"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium">
            Vehicle Condition / Notes *
          </span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            className="w-full rounded-2xl border border-border bg-black/30 px-4 py-3 outline-none focus:border-mavs-blue"
            placeholder="Tell me about stains, pet hair, odors, spills, trash, exterior condition, or anything else relevant."
          />
          <p className="text-xs text-foreground-muted">
            Minimum 10 characters. “Dirty” technically counts, but it is not
            very useful. Criminally vague, honestly.
          </p>
        </label>

        <label className="hidden">
          Website
          <input
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-full bg-mavs-blue px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Sent"
              : "Send Booking Request"}
        </button>

        {status === "error" ? (
          <p className="text-center text-sm text-red-400">{error}</p>
        ) : status === "sent" ? (
          <p className="text-center text-sm text-green-300">
            Request sent. You’ll get a follow-up to confirm pricing and
            availability.
          </p>
        ) : (
          <p className="text-center text-sm text-foreground-muted">
            Sends via Formspree. Prefer email?{" "}
            <a href={mailto} className="text-white underline">
              Open an email draft
            </a>
            .
          </p>
        )}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-black/20 p-4">
        <p className="text-sm leading-6 text-foreground-muted">
          Prefer direct contact? Call or text{" "}
          <a href={PHONE_HREF} className="text-white underline">
            {PHONE}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${EMAIL}`} className="text-white underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  );
}