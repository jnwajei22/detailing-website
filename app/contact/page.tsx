import Link from "next/link";

const contactCards = [
  {
    label: "Phone",
    title: "(217) 303-6825",
    body: "Call or text for availability, quotes, and scheduling.",
    href: "tel:+12173036825",
  },
  {
    label: "Email",
    title: "jnwajei22@gmail.com",
    body: "Good for longer requests, photos, and quote details.",
    href: "mailto:jnwajei22@gmail.com",
  },
];

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Grand Prairie",
  "Cedar Hill",
  "Nearby DFW areas",
];

const availability = [
  {
    label: "Weekdays",
    value: "Limited availability",
    description: "Best for smaller jobs, quotes, and scheduled evening windows.",
  },
  {
    label: "Saturday",
    value: "Primary booking day",
    description: "Best option for full details and longer appointments.",
  },
  {
    label: "Sunday",
    value: "Limited slots",
    description: "Available when schedule allows. Book ahead when possible.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight">
            Questions, quotes, and appointment requests.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground-muted">
            Send your vehicle type, location, preferred service, and a quick
            description of the vehicle condition. Photos help if the interior is
            rough, stained, or pet-hair certified.
          </p>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6">
          <h2 className="text-2xl font-bold">Need a quote?</h2>

          <p className="mt-3 leading-7 text-foreground-muted">
            The fastest route is the booking request form. It gives enough info
            to price the job without playing twenty questions over text.
          </p>

          <Link
            href="/book"
            className="mt-6 inline-flex rounded-full bg-mavs-blue px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Request Appointment
          </Link>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 py-16 md:grid-cols-3">
        {contactCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="rounded-3xl border border-border bg-card p-6 transition hover:bg-card-hover"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
              {card.label}
            </p>

            <h2 className="mt-3 break-words text-2xl font-bold">
              {card.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-foreground-muted">
              {card.body}
            </p>
          </a>
        ))}

        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
            Service Area
          </p>

          <h2 className="mt-3 text-2xl font-bold">DFW Area</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-black/20 px-3 py-1 text-xs text-foreground-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-border bg-card p-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
              Availability
            </p>

            <h2 className="mt-3 text-3xl font-bold">By appointment only</h2>

            <p className="mt-4 text-sm leading-6 text-foreground-muted">
              Detailing appointments are scheduled around service type, vehicle
              condition, location, weather, and travel time. Reach out first so
              the job can be quoted and scheduled correctly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {availability.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-black/20 p-5"
              >
                <p className="text-sm font-semibold text-mavs-blue">
                  {item.label}
                </p>

                <p className="mt-2 font-bold">{item.value}</p>

                <p className="mt-3 text-sm leading-6 text-foreground-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-black/20 p-5">
          <p className="text-sm leading-6 text-foreground-muted">
            Mobile appointments may include a travel fee depending on distance.
            Final timing is confirmed after reviewing the vehicle, requested
            service, and location.
          </p>
        </div>
      </section>
    </main>
  );
}