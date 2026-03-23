import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getLocationById, locations } from "@/lib/locations"

interface LocationPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    id: location.id,
  }))
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { id } = await params
  const location = getLocationById(id)

  if (!location) {
    return { title: "Location Not Found" }
  }

  return {
    title: `${location.name} | Trip In Hand`,
    description: location.shortDescription,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { id } = await params
  const location = getLocationById(id)

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={location.heroImage}
          alt={location.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground mb-4 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Destinations
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
              {location.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                {location.region}
              </span>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-foreground font-medium">{location.rating}</span>
              </div>
              <span className="text-muted-foreground">{location.priceLevel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  About {location.name.split(",")[0]}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {location.fullDescription}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {location.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[3/2] overflow-hidden rounded-xl group"
                    >
                      <Image
                        src={image}
                        alt={`${location.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Highlights
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {location.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg bg-secondary/50 border border-border p-3"
                    >
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm font-medium text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Key Info Card */}
                <div className="rounded-xl bg-card border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Key Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Best Time to Visit
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {location.bestTimeToVisit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price Level</p>
                        <p className="text-sm font-medium text-foreground">
                          {location.priceLevel}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="text-sm font-medium text-foreground">
                          {location.rating} / 5.0
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <svg
                          className="h-5 w-5 text-primary"
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
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Region</p>
                        <p className="text-sm font-medium text-foreground">
                          {location.region}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ready to explore?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start planning your trip to {location.name.split(",")[0]} today.
                  </p>
                  <button className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                    Plan Your Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}