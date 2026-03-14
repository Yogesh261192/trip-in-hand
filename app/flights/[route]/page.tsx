"use client";

import { useState, use } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FlightCard } from "@/components/flight-card";
import { FiltersSidebar } from "@/components/filters-sidebar";
import { mockFlights } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowUpDown, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortOption = "cheapest" | "fastest" | "best";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "cheapest", label: "Cheapest" },
  { value: "fastest", label: "Fastest" },
  { value: "best", label: "Best" },
];

interface FlightResultsPageProps {
  params: Promise<{ route: string }>;
}

export default function FlightResultsPage({ params }: FlightResultsPageProps) {
  const resolvedParams = use(params);
  const [sortBy, setSortBy] = useState<SortOption>("cheapest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Parse route parameter
  const routeParts = resolvedParams.route.split("-to-");
  const fromCode = routeParts[0]?.toUpperCase() || "DEL";
  const toCode = routeParts[1]?.toUpperCase() || "DXB";

  // Sort flights based on selected option
  const sortedFlights = [...mockFlights].sort((a, b) => {
    switch (sortBy) {
      case "cheapest":
        return a.price - b.price;
      case "fastest":
        // Parse duration string to minutes for comparison
        const getDurationMinutes = (duration: string) => {
          const match = duration.match(/(\d+)h\s*(\d+)?m?/);
          if (!match) return 0;
          return parseInt(match[1]) * 60 + (parseInt(match[2]) || 0);
        };
        return getDurationMinutes(a.duration) - getDurationMinutes(b.duration);
      case "best":
        // Best is a combination of price and duration
        return a.price / 1000 + a.stops * 2 - (b.price / 1000 + b.stops * 2);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Search Summary */}
        <section className="bg-primary py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-primary-foreground">
                <h1 className="text-xl sm:text-2xl font-bold">
                  {fromCode} to {toCode}
                </h1>
                <p className="text-sm text-primary-foreground/80">
                  {sortedFlights.length} flights found
                </p>
              </div>
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                Modify Search
              </Button>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Desktop */}
              <aside className="hidden lg:block lg:w-72 shrink-0">
                <div className="sticky top-20">
                  <FiltersSidebar />
                </div>
              </aside>

              {/* Flight Results */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setShowMobileFilters(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>

                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                      Sort by:
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="min-w-[120px]">
                          <ArrowUpDown className="h-4 w-4 mr-2" />
                          {sortOptions.find((opt) => opt.value === sortBy)
                            ?.label || "Sort"}
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {sortOptions.map((option) => (
                          <DropdownMenuItem
                            key={option.value}
                            onClick={() => setSortBy(option.value)}
                            className={
                              sortBy === option.value ? "bg-muted" : ""
                            }
                          >
                            {option.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Quick Sort Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        sortBy === option.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* Flight Cards */}
                <div className="space-y-4">
                  {sortedFlights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">
                    Load More Flights
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-background overflow-y-auto">
            <div className="p-4">
              <FiltersSidebar
                isMobile
                onClose={() => setShowMobileFilters(false)}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
