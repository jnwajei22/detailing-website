import Link from "next/link";

const galleryItems = [
  {
    title: "Interior Reset",
    category: "Interior",
    description:
      "Seats, floors, cupholders, touchpoints, and the everyday buildup that makes the car feel tired.",
  },
  {
    title: "Wheel & Tire Cleanup",
    category: "Exterior",
    description:
      "Brake dust, road grime, tires, and wheel faces cleaned so the vehicle looks sharper from the ground up.",
  },
  {
    title: "Exterior Wash",
    category: "Exterior",
    description:
      "Foam pre-wash, hand wash, glass, tires, and final dry for a cleaner outside finish.",
  },
  {
    title: "Floor Mat Cleaning",
    category: "Interior",
    description:
      "Mats collect the worst of daily life. Dirt, spills, crumbs, and whatever else gravity betrayed you with.",
  },
  {
    title: "Console & Crevice Detail",
    category: "Interior",
    description:
      "Cupholders, console areas, buttons, vents, and the small spaces where dust and crumbs like to start families.",
  },
  {
    title: "Full Detail Result",
    category: "Full Detail",
    description:
      "Interior and exterior reset together for vehicles that need the full clean-start treatment.",
  },
];

const photoStandards = [
  "Before photos",
  "After photos",
  "Service notes",
  "No fake stock images",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
            Gallery
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight">
            Proof of the reset.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground-muted">
            Before-and-after photos will live here as the work comes in. For
            now, this page shows the kinds of details and transformations the
            service is built around.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="text-2xl font-bold">
            Real photos coming with real jobs.
          </h2>

          <p className="mt-3 leading-7 text-foreground-muted">
            Every featured job should show the actual condition, the work
            performed, and the final result. No fake stock-photo flexing.
          </p>

          <Link
            href="/book"
            className="mt-6 inline-flex rounded-full bg-mavs-blue px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Book a Detail
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-black via-background-secondary to-mavs-blue/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,83,188,0.25),transparent_40%)]" />

              <div className="relative rounded-2xl border border-border bg-black/40 px-5 py-4 text-center backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mavs-blue">
                  {item.category}
                </p>
                <p className="mt-2 text-sm text-foreground-muted">
                  Photo slot
                </p>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 h-2 w-10 rounded-full bg-mavs-blue" />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-foreground-muted">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-border bg-card p-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-mavs-blue">
              Photo Standard
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Honest before-and-after work.
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              Gallery photos should show real vehicles, real conditions, and
              real results. Some jobs need a basic reset. Some need heavier
              work. The goal is to show the difference clearly without making
              every car look like a studio ad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {photoStandards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-black/20 p-5"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}