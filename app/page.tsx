export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-mavs-blue blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-mavs-green blur-3xl opacity-10" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-border backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">
              YOUR DETAIL NAME
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
              Dallas • Fort Worth
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-foreground-muted md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="rounded-full bg-mavs-blue px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground-muted backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-mavs-green" />

              Hybrid Detailing • Mobile + Location-Based
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Clean work.
              <br />
              Clear communication.
              <br />
              Consistent results.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground-muted md:text-xl">
              Professional auto detailing serving the Dallas–Fort Worth area.
              Structured service, fair pricing, and reliable workmanship
              without the luxury markup nonsense.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="flex h-14 items-center justify-center rounded-full bg-mavs-blue px-8 text-sm font-medium text-white transition hover:opacity-90"
              >
                Reserve Appointment
              </a>

              <a
                href="#pricing"
                className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-card p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground-muted">
                  Starting Packages
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Full Detail
                </h2>
              </div>

              <div className="rounded-full bg-mavs-green/20 px-3 py-1 text-sm font-medium text-mavs-green">
                Available
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-foreground-muted">Sedan</span>

                <span className="font-medium text-white">$140</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground-muted">SUV</span>

                <span className="font-medium text-white">$180</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground-muted">
                  Truck / 3-Row
                </span>

                <span className="font-medium text-white">$220</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm leading-7 text-foreground-muted">
                Mobile appointments available. Travel fees may apply depending
                on distance and vehicle condition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}