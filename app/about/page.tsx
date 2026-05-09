import Link from "next/link";

const values = [
  {
    title: "Show up right.",
    body: "If we book it, we honor it. Time, communication, and reliability matter.",
  },
  {
    title: "Respect every vehicle.",
    body: "Daily driver, work truck, family SUV, or weekend car — every vehicle gets treated with care.",
  },
  {
    title: "No judgment details.",
    body: "Cars get messy because life gets messy. The job is to clean it, not shame people for it.",
  },
  {
    title: "Do clean work.",
    body: "No streaks, residue, careless shortcuts, or leaving something worse than we found it.",
  },
  {
    title: "Communicate clearly.",
    body: "Pricing, delays, limitations, and changes get discussed upfront.",
  },
  {
    title: "Keep improving.",
    body: "Every job should make the next one sharper, faster, and more consistent.",
  },
];

const operatingStandards = [
  "Confirm the appointment before departure",
  "Review the vehicle before starting",
  "Confirm package, price, and scope",
  "Use the right towels and tools for the right surfaces",
  "Check the work before customer handoff",
  "Leave the vehicle better than we found it",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            About
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight">
            Chasing the devil out of the details.
          </h1>

          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Life gets hectic. Cars pick up the spills, dust, stress, workdays,
            road trips, and everything in between. Our mission is to give every
            customer a clean reset through honest service, clear communication,
            and detail work that respects both the vehicle and the person behind
            the wheel.
          </p>

          <p className="mt-5 text-lg leading-8 text-foreground-muted">
            YOUR DETAIL NAME is a Dallas–Fort Worth detailing service built for
            real people, real vehicles, and real messes. No judgment. No mystery
            pricing. No fake luxury act. Just structured detailing work that
            helps bring a little order back to the chaos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="rounded-full bg-mavs-blue px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              Request Appointment
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-border px-6 py-3 text-center font-semibold transition hover:bg-card-hover"
            >
              View Services
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
            Mission
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Everyone deserves a clean reset.
          </h2>

          <p className="mt-4 leading-7 text-foreground-muted">
            A clean car will not fix life. But it can make the day feel a little
            lighter. The goal is to serve people with honest work, practical
            care, and enough attention to the small things that the whole
            vehicle feels refreshed.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-black/20 p-5">
            <h3 className="font-semibold">How we work</h3>
            <p className="mt-2 text-sm leading-6 text-foreground-muted">
              We confirm the scope, respect the vehicle, clean with intention,
              check the result, and communicate clearly if anything changes.
              Revolutionary? No. Rare enough to matter? Apparently.
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Values
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
            The principles behind the work.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="mt-3 leading-7 text-foreground-muted">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 grid max-w-6xl gap-6 rounded-3xl border border-border bg-card p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Operating Standard
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Simple rules. Consistent work.
          </h2>

          <p className="mt-4 text-sm leading-7 text-foreground-muted">
            Behind the scenes, the work follows a basic operating standard so
            each appointment is handled with structure instead of guesswork. It
            is not about being fancy. It is about being consistent.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {operatingStandards.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-black/20 p-5"
            >
              <div className="mb-4 h-2 w-10 rounded-full bg-mavs-blue" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}