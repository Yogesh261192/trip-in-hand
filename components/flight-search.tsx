"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Users,
  ChevronDown,
  ArrowRightLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const airports = [
  { code: "DEL", city: "New Delhi", country: "India" },
  { code: "BOM", city: "Mumbai", country: "India" },
  { code: "DXB", city: "Dubai", country: "UAE" },
  { code: "LHR", city: "London", country: "United Kingdom" },
  { code: "GOI", city: "Goa", country: "India" },
  { code: "BKK", city: "Bangkok", country: "Thailand" },
  { code: "SIN", city: "Singapore", country: "Singapore" },
  { code: "CDG", city: "Paris", country: "France" },
];

const cabinClasses = ["Economy", "Premium Economy", "Business", "First"];

export function FlightSearch() {
  const router = useRouter();
  const [from, setFrom] = useState(airports[0]);
  const [to, setTo] = useState(airports[2]);
  const [departureDate, setDepartureDate] = useState("2026-04-15");
  const [returnDate, setReturnDate] = useState("2026-04-22");
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    router.push(
      `/flights/${from.code.toLowerCase()}-to-${to.code.toLowerCase()}`
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* From */}
        <div className="lg:col-span-3">
          <Popover open={fromOpen} onOpenChange={setFromOpen}>
            <PopoverTrigger asChild>
              <button className="w-full text-left p-4 rounded-xl border border-border hover:border-primary transition-colors bg-background">
                <div className="flex items-center gap-3">
                  <PlaneTakeoff className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-semibold text-foreground truncate">
                      {from.city}
                    </p>
                    <p className="text-xs text-muted-foreground">{from.code}</p>
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="start">
              <div className="p-2">
                {airports.map((airport) => (
                  <button
                    key={airport.code}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => {
                      setFrom(airport);
                      setFromOpen(false);
                    }}
                  >
                    <p className="font-medium text-foreground">
                      {airport.city}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {airport.code} - {airport.country}
                    </p>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Swap Button */}
        <div className="hidden lg:flex items-center justify-center">
          <button
            onClick={swapLocations}
            className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Swap locations"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>
        </div>

        {/* To */}
        <div className="lg:col-span-3">
          <Popover open={toOpen} onOpenChange={setToOpen}>
            <PopoverTrigger asChild>
              <button className="w-full text-left p-4 rounded-xl border border-border hover:border-primary transition-colors bg-background">
                <div className="flex items-center gap-3">
                  <PlaneLanding className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">To</p>
                    <p className="font-semibold text-foreground truncate">
                      {to.city}
                    </p>
                    <p className="text-xs text-muted-foreground">{to.code}</p>
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="start">
              <div className="p-2">
                {airports.map((airport) => (
                  <button
                    key={airport.code}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => {
                      setTo(airport);
                      setToOpen(false);
                    }}
                  >
                    <p className="font-medium text-foreground">
                      {airport.city}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {airport.code} - {airport.country}
                    </p>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Dates */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-background">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Departure</p>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-transparent font-semibold text-sm text-foreground focus:outline-none"
                />
              </div>
            </div>
            <div className="border-t border-border pt-2">
              <p className="text-xs text-muted-foreground">Return</p>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent font-semibold text-sm text-foreground focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Passengers & Class */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-background">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Passengers</p>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full bg-transparent font-semibold text-sm text-foreground focus:outline-none appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Adult" : "Adults"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="border-t border-border pt-2">
              <p className="text-xs text-muted-foreground">Cabin Class</p>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="w-full bg-transparent font-semibold text-sm text-foreground focus:outline-none appearance-none"
              >
                {cabinClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6">
        <Button onClick={handleSearch} size="lg" className="w-full lg:w-auto">
          Search Flights
        </Button>
      </div>
    </div>
  );
}
