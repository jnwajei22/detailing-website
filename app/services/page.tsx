import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Interior Reset",
    price: "From $95",
    bestFor:
      "Daily drivers, family cars, work vehicles, and interiors that need a clean reset.",
    items: [
      "Thorough vacuum of seats, floors, mats, trunk/cargo area",
      "Dash, console, cupholders, doors, and panels cleaned",
      "Interior plastics and touchpoints wiped down",
      "Floor mats cleaned",
      "Interior glass cleaned",
      "Light spot attention where reasonable",
    ],
    note: "Pet hair, heavy stains, odors, excessive trash, or deep extraction may increase the quote.",
  },
  {
    title: "Exterior Wash",
    price: "From $75",
    bestFor:
      "Vehicles that need the road grime, dust, and week-to-week buildup cleared off.",
    items: [
      "Foam pre-wash",
      "Hand wash",
      "Wheels, tires, and wheel faces cleaned",
      "Tire dressing",
      "Exterior glass cleaned",
      "Hand dry and final walkaround",
    ],
    note: "This is a maintenance-style exterior wash, not paint correction or scratch removal.",
  },
  {
    title: "Full Detail",
    price: "From $140",
    bestFor:
      "The best option when the whole vehicle needs attention inside and out.",
    items: [
      "Interior Reset included",
      "Exterior Wash included",
      "Wheels, tires, glass, mats, and trim addressed",
      "Light spot attention",
      "Door jamb wipe-down where accessible",
      "Final quality check before handoff",
    ],
    note: "Recommended for first-time customers or vehicles that have not been detailed in a while.",
  },
  {
    title: "Maintenance Detail",
    price: "From $85",
    bestFor:
      "Cars that are already in decent shape and just need to stay that way.",
    items: [
      "Quick interior refresh",
      "Basic vacuum and wipe-down",
      "Exterior maintenance wash",
      "Glass cleaned",
      "Tires dressed",
      "Ideal every 2–4 weeks",
    ],
    note: "This is not for disaster-level interiors. If the vehicle is cooked, start with a Full Detail or Interior Reset.",
  },
];

const addOns = [
  "Pet hair removal",
  "Heavy stain attention",
  "Odor treatment",
  "Seat and carpet shampoo/extraction",
  "Engine bay wipe-down",
  "Headlight restoration",
  "Clay treatment",
  "Spray wax / sealant",
];

const pricingFactors = [
  "Vehicle size",
  "Interior condition",
  "Pet hair",
  "Stains or spills",
  "Odors",
  "Travel distance",
  "Amount of trash or clutter",
  "Requested add-ons",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight">
            Detail packages built for real life, not showroom fantasy.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground-muted">
            Cars pick up spills, dust, stress, workdays, road trips, and
            everything in between. These packages are built to give your vehicle
            a clean reset with honest scope, clear pricing, and no judgment.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="text-2xl font-bold">How pricing works</h2>

          <p className="mt-3 leading-7 text-foreground-muted">
            Prices are starting points. Final quotes depend on size, condition,
            travel, and add-ons. A lightly dusty sedan and a three-row SUV with
            fries in the shadow realm are not the same job.
          </p>

          <Link
            href="/book"
            className="mt-6 inline-flex rounded-full bg-mavs-blue px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 py-16 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Add-ons
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Extra attention where the vehicle needs it.
          </h2>

          <p className="mt-4 text-sm leading-7 text-foreground-muted">
            Some jobs need more than a standard package. Add-ons are quoted
            based on the vehicle condition and how much time the work will
            reasonably take.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {addOns.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="mb-4 h-2 w-10 rounded-full bg-mavs-blue" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 grid max-w-6xl gap-6 rounded-3xl border border-border bg-card p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Quote Factors
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Why the final price can change.
          </h2>

          <p className="mt-4 text-sm leading-7 text-foreground-muted">
            Starting prices keep the menu simple. Final pricing keeps the work
            fair. If the job needs more time, chemicals, travel, or labor, the
            quote changes before work starts — not after.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pricingFactors.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-black/20 p-5"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-border bg-gradient-to-br from-card to-mavs-blue/20 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
              Ready for a reset?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Send the details. Get a real quote.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground-muted">
              Include the vehicle type, location, service needed, and any
              condition notes like pet hair, stains, odors, or heavy trash.
            </p>
          </div>

          <Link
            href="/book"
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:bg-silver"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}