import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="relative z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-white">
            YOUR DETAIL NAME
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            Dallas • Fort Worth
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-foreground-muted md:flex">
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

        <Link
          href="/book"
          className="rounded-full bg-mavs-blue px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}