type ServiceCardProps = {
  title: string;
  price: string;
  bestFor: string;
  items: string[];
  note?: string;
};

export default function ServiceCard({
  title,
  price,
  bestFor,
  items,
  note,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-foreground-muted">
            {bestFor}
          </p>
        </div>

        <p className="shrink-0 rounded-full bg-black/30 px-4 py-2 text-sm font-semibold">
          {price}
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-foreground-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mavs-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {note ? (
        <div className="mt-6 rounded-2xl border border-border bg-black/20 p-4">
          <p className="text-sm leading-6 text-foreground-muted">{note}</p>
        </div>
      ) : null}
    </article>
  );
}