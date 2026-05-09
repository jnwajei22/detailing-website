import Link from "next/link";
import BookingForm from "@/components/BookingForm";

const helpfulDetails = [
  "Vehicle year, make, and model",
  "Interior and exterior condition",
  "Pet hair, stains, odors, spills, or heavy trash",
  "Preferred date and city/service area",
  "Photos help if the vehicle is rough",
];

export default function BookPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Booking Request
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Request a detail.
          </h1>

          <p className="mt-5 leading-8 text-foreground-muted">
            Send your vehicle, service, location, and condition details. This is
            a request, not an automatic confirmation. You’ll get a follow-up
            with pricing, availability, and next steps.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Helpful details</h2>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground-muted">
              {helpfulDetails.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mavs-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Not sure what to pick?</h2>

            <p className="mt-3 text-sm leading-6 text-foreground-muted">
              Pick “Not sure yet” on the form. The quote can be adjusted once
              the vehicle condition and service needs are clear.
            </p>

            <Link
              href="/services"
              className="mt-5 inline-flex rounded-full border border-border px-5 py-2 text-sm font-semibold transition hover:bg-card-hover"
            >
              Compare Services
            </Link>
          </div>

          <div className="mt-5 rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">How booking works</h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-foreground-muted">
              <p>
                <span className="font-semibold text-white">1. Send the request.</span>{" "}
                Include the vehicle, location, service, and condition notes.
              </p>

              <p>
                <span className="font-semibold text-white">2. Get a quote.</span>{" "}
                Pricing is confirmed before the work starts.
              </p>

              <p>
                <span className="font-semibold text-white">3. Confirm the appointment.</span>{" "}
                Once the time, scope, and location are clear, the appointment is
                locked in.
              </p>
            </div>
          </div>
        </div>

        <BookingForm />
      </section>
    </main>
  );
}