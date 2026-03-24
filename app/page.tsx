import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FlightSearch } from "@/components/flight-search";
import { FlightWidget } from "@/components/flight-widget";
import { Plane, Shield, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[200px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-travel.jpg"
              alt="Beautiful travel destination"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-4 text-balance">
                  Find Your Perfect Flight
                </h1>
                <p className="text-lg sm:text-xl text-background/90 max-w-2xl mx-auto text-pretty">
                  Compare prices from hundreds of airlines and book your next
                  adventure with the best deals.
                </p>
              </div>

              {/* Flight Search */}
              {/* <FlightSearch /> */}

              {/* Flight Widget Results */}
             
            </div>
          </div>
        </section>
         <div className="mt-1">
                <FlightWidget />
              </div>

        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    500+ Airlines
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Compare flights from major and budget carriers worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Secure Booking
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your payment and personal data are always protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our team is here to help you anytime, anywhere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    No Hidden Fees
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Transparent pricing with no surprise charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes Section */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Trending Routes
                </h2>
                <p className="text-muted-foreground mt-1">
                  Popular flight routes with the best deals
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link href="/routes">View All Routes</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/routes">View All Routes</Link>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Deals page CTA */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Find the Best Travel Deals
            </h2>
            <p className="text-muted-foreground mb-6">
              All live deals have moved to the Deals page. Tap below to explore today's top destinations.
            </p>
            <Button size="lg" asChild>
              <Link href="/deals">Go To Deals</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20">
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
                  Sign up now to receive exclusive deals, price alerts, and
                  travel tips straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="font-semibold" asChild>
                    <Link href="/deals">Get Started Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
