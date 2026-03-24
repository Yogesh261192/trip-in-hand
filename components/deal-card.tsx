import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { locations } from "@/lib/locations";
import type { Deal } from "@/lib/mock-data";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const destinationKey = deal.destination.trim().toLowerCase();
  const locationMatch = locations.find((location) => {
    const normalizedName = location.name.toLowerCase();
    return (
      location.id.toLowerCase() === destinationKey ||
      normalizedName === destinationKey ||
      normalizedName.startsWith(`${destinationKey},`) ||
      normalizedName.includes(destinationKey)
    );
  });

  const exploreHref = locationMatch
    ? `/destinations/${locationMatch.id}`
    : `/flights/delhi-to-${destinationKey.replace(/\s+/g, "-")}`;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={deal.image}
          alt={`Flights to ${deal.destination}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-background">
          <h3 className="text-xl font-bold">{deal.destination}</h3>
          <p className="text-sm text-background/80">{deal.country}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-xl font-bold text-primary">
              {formatPrice(deal.price, deal.currency)}
            </p>
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href={exploreHref}>
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
