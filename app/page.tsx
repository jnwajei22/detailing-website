import Link from "next/link";
import PricingCard from "@/components/PricingCard";

const packages = [
  {
    vehicle: "Sedan / Coupe",
    price: "$140+",
    note: "Best for smaller daily drivers.",
  },
  {
    vehicle: "SUV / Crossover",
    price: "$180+",
    note: "More space, more surfaces, more crumbs. Science.",
  },
  {
    vehicle: "Truck / 3-Row",
    price: "$220+",
    note: "Larger vehicles quoted based on condition and layout.",
  },
];

const highlights = [
  {
    title: "No judgment details",
    body: "Cars get messy because life gets messy. The job is to clean it, not shame people for it.",
  },
  {
    title: "Clear communication",
    body: "Pricing, timing, service limits, and changes get discussed upfront.",
  },
  {
    title: "Clean reset",
    body: "Interior, exterior, and full detail options built around real-life vehicle care.",
  },
];

const servicePreview = [
  "Interior Reset",
  "Exterior Wash",
  "Full Detail",
  "Maintenance Detail",
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-mavs-blue opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-mavs-green opacity-10 blur-3xl" />
      </div>

      <section className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground-muted backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-mavs-green" />
              Hybrid Detailing • Mobile + Location-Based
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Chasing the devil
              <br />
              out of the details.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground-muted md:text-xl">
              Life gets hectic. Cars pick up the spills, dust, stress, workdays,
              road trips, and everything in between. Our mission is to give
              every customer a clean reset through honest service, clear
              communication, and detail work that respects both the vehicle and
              the person behind the wheel.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="flex h-14 items-center justify-center rounded-full bg-mavs-blue px-8 text-sm font-medium text-white transition hover:opacity-90"
              >
                Request Appointment
              </Link>

              <Link
                href="/services"
                className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>

          <aside className="w-full rounded-3xl border border-white/10 bg-card p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-foreground-muted">
                  Starting Package
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Full Detail
                </h2>
              </div>

              <div className="shrink-0 rounded-full bg-mavs-green/20 px-3 py-1 text-sm font-medium text-mavs-green">
                By appointment
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              {packages.map((item) => (
                <PricingCard key={item.vehicle} {...item} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm leading-7 text-foreground-muted">
                Final quotes depend on size, condition, pet hair, stains,
                odors, trash, travel distance, and requested add-ons.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid w-full max-w-7xl gap-5 px-6 pb-20 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-border bg-card p-6 backdrop-blur"
          >
            <div className="mb-4 h-2 w-10 rounded-full bg-mavs-blue" />
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Built for real cars, real messes, and real schedules.
          </h2>

          <p className="mt-4 text-sm leading-7 text-foreground-muted">
            Choose the service that matches the condition of the vehicle. If you
            are not sure, send the details and the quote can be adjusted before
            anything starts.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-flex rounded-full border border-border px-5 py-2 text-sm font-semibold transition hover:bg-card-hover"
          >
            Compare Services
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {servicePreview.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="mb-4 h-2 w-10 rounded-full bg-mavs-blue" />
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-20 w-full max-w-7xl px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-mavs-blue/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
                Ready for a reset?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Send the details. Get a real quote.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground-muted">
                Include the vehicle type, service area, preferred service, and
                any condition notes like pet hair, stains, odors, or heavy
                trash.
              </p>
            </div>

            <Link
              href="/book"
              className="rounded-full bg-mavs-blue px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}