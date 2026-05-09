type PricingCardProps = {
  vehicle: string;
  price: string;
  note: string;
};

export default function PricingCard({
  vehicle,
  price,
  note,
}: PricingCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-black/20 p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-foreground-muted">{vehicle}</span>
        <span className="font-medium text-white">{price}</span>
      </div>

      <p className="mt-2 text-xs leading-5 text-foreground-muted">{note}</p>
    </div>
  );
}