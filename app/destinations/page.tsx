import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationCard } from "@/components/location-card"
import { locations } from "@/lib/locations"

export default function DestinationsPage() {
  const indianLocations = locations.filter(location => location.category === 'indian')
  const internationalLocations = locations.filter(location => location.category === 'international')

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

      {/* Indian Destinations */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                🌟 Indian Destinations
              </h2>
              <p className="text-muted-foreground">
                Discover the incredible diversity of India - from spiritual ghats to royal palaces
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {indianLocations.length} destinations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {indianLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* International Destinations */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                🌍 International Destinations
              </h2>
              <p className="text-muted-foreground">
                Explore the world's most sought-after travel destinations
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {internationalLocations.length} destinations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
