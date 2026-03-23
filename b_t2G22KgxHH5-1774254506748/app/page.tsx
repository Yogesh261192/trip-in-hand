import { Header } from "@/components/header"
import { LocationCard } from "@/components/location-card"
import { locations } from "@/lib/locations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Discover Your Next
              <span className="text-primary"> Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Explore breathtaking destinations around the world. From ancient temples to pristine beaches, find your perfect escape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto">
                Start Exploring
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors w-full sm:w-auto">
                View All Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Popular Destinations
              </h2>
              <p className="text-muted-foreground">
                Handpicked locations loved by travelers worldwide
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {locations.length} destinations
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold text-foreground">Wanderlust</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Wanderlust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
