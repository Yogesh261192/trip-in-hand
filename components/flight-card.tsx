import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Flight } from "@/lib/mock-data";

interface FlightCardProps {
  flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Airline Info */}
        <div className="flex items-center gap-3 lg:w-32">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Plane className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">
              {flight.airline}
            </p>
          </div>
        </div>

        {/* Flight Details */}
        <div className="flex-1 grid grid-cols-3 gap-4 items-center">
          {/* Departure */}
          <div className="text-center lg:text-left">
            <p className="text-xl sm:text-2xl font-bold text-foreground">
              {flight.departureTime}
            </p>
            <p className="text-sm text-muted-foreground">
              {flight.departureCode}
            </p>
          </div>

          {/* Duration & Stops */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-muted-foreground mb-1">
              {flight.duration}
            </p>
            <div className="w-full flex items-center gap-1">
              <div className="h-[2px] flex-1 bg-border" />
              <Plane className="h-3 w-3 text-primary -rotate-90" />
              <div className="h-[2px] flex-1 bg-border" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {flight.stops === 0 ? (
                <span className="text-green-600 font-medium">Direct</span>
              ) : (
                <span>
                  {flight.stops} {flight.stops === 1 ? "Stop" : "Stops"}
                  {flight.stopInfo && ` (${flight.stopInfo})`}
                </span>
              )}
            </p>
          </div>

          {/* Arrival */}
          <div className="text-center lg:text-right">
            <p className="text-xl sm:text-2xl font-bold text-foreground">
              {flight.arrivalTime}
            </p>
            <p className="text-sm text-muted-foreground">
              {flight.arrivalCode}
            </p>
          </div>
        </div>

        {/* Price & Book */}
        <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-6">
          <div className="flex-1 lg:text-right">
            <p className="text-2xl font-bold text-foreground">
              {formatPrice(flight.price, flight.currency)}
            </p>
            <p className="text-xs text-muted-foreground">per person</p>
          </div>
          <Button size="sm">View Deal</Button>
        </div>
      </div>
    </div>
  );
}
