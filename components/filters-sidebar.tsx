"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FiltersSidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const airlines = [
  "Air India",
  "IndiGo",
  "Emirates",
  "British Airways",
  "Vistara",
  "SpiceJet",
];

const stops = [
  { value: "direct", label: "Direct" },
  { value: "1", label: "1 Stop" },
  { value: "2", label: "2+ Stops" },
];

const departureTimes = [
  { value: "morning", label: "Morning (6AM - 12PM)" },
  { value: "afternoon", label: "Afternoon (12PM - 6PM)" },
  { value: "evening", label: "Evening (6PM - 12AM)" },
  { value: "night", label: "Night (12AM - 6AM)" },
];

export function FiltersSidebar({
  onClose,
  isMobile = false,
}: FiltersSidebarProps) {
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const toggleAirline = (airline: string) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((a) => a !== airline)
        : [...prev, airline]
    );
  };

  const toggleStop = (stop: string) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((s) => s !== stop) : [...prev, stop]
    );
  };

  const toggleTime = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const clearFilters = () => {
    setPriceRange([5000, 50000]);
    setSelectedAirlines([]);
    setSelectedStops([]);
    setSelectedTimes([]);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
          {isMobile && onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close filters</span>
            </Button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-4">
          Price Range
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={1000}
          max={100000}
          step={1000}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Stops */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-4">Stops</h3>
        <div className="space-y-3">
          {stops.map((stop) => (
            <div key={stop.value} className="flex items-center gap-3">
              <Checkbox
                id={`stop-${stop.value}`}
                checked={selectedStops.includes(stop.value)}
                onCheckedChange={() => toggleStop(stop.value)}
              />
              <Label
                htmlFor={`stop-${stop.value}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {stop.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Airlines */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-4">Airlines</h3>
        <div className="space-y-3">
          {airlines.map((airline) => (
            <div key={airline} className="flex items-center gap-3">
              <Checkbox
                id={`airline-${airline}`}
                checked={selectedAirlines.includes(airline)}
                onCheckedChange={() => toggleAirline(airline)}
              />
              <Label
                htmlFor={`airline-${airline}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {airline}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Departure Time */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">
          Departure Time
        </h3>
        <div className="space-y-3">
          {departureTimes.map((time) => (
            <div key={time.value} className="flex items-center gap-3">
              <Checkbox
                id={`time-${time.value}`}
                checked={selectedTimes.includes(time.value)}
                onCheckedChange={() => toggleTime(time.value)}
              />
              <Label
                htmlFor={`time-${time.value}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {time.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
