import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
];

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Grand Prairie",
  "Cedar Hill",
  "DFW Area",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-white">
              YOUR DETAIL NAME
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground-muted">
              Dallas • Fort Worth Detailing
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-foreground-muted">
            Chasing the devil out of the details. Honest auto detailing for
            daily drivers, work vehicles, family cars, and the mess life leaves
            behind.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm text-foreground-muted sm:flex-row sm:gap-5">
            <a href="tel:+12173036825" className="transition hover:text-white">
              (217) 303-6825
            </a>
            <a
              href="mailto:jnwajei22@gmail.com"
              className="transition hover:text-white"
            >
              jnwajei22@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
            Pages
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm text-foreground-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-mavs-blue">
            Service Area
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-black/20 px-3 py-1 text-xs text-foreground-muted"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-foreground-muted">
            By appointment only. Mobile appointments may include a travel fee.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-border pt-6 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} YOUR DETAIL NAME. All rights reserved.</p>
        <p>Clean reset. No judgment. Clear communication.</p>
      </div>
    </footer>
  );
}