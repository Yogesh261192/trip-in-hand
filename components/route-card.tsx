import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Route } from "@/lib/mock-data";

interface RouteCardProps {
  route: Route;
}

export function RouteCard({ route }: RouteCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      href={`/flights/${route.fromCode.toLowerCase()}-to-${route.toCode.toLowerCase()}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all">
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={route.image}
            alt={`Flights from ${route.from} to ${route.to}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2 text-background">
              <span className="font-semibold">{route.from}</span>
              <ArrowRight className="h-4 w-4" />
              <span className="font-semibold">{route.to}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-lg font-bold text-primary">
                {formatPrice(route.price, route.currency)}
              </p>
            </div>
            <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
              {route.fromCode} - {route.toCode}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
