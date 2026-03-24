import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Welcome to Trip In Hand, your trusted travel companion for flight deals, destination guides, and travel planning. We are passionate about helping travelers find the best value and experience for every journey.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our mission is to simplify travel by providing an intuitive platform for browsing destinations, comparing prices, and booking trips with confidence. We constantly update our offerings to make sure you get the latest deals and curated experiences.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're searching for adventure itineraries, relaxing beach vacations, or city escapes, Trip In Hand is here to inspire and assist every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card p-6 border border-border">
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-sm text-muted-foreground">
                Make global travel accessible, affordable, and memorable for everyone.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <h2 className="text-xl font-semibold mb-2">Our Team</h2>
              <p className="text-sm text-muted-foreground">
                A diverse group of travel experts, designers, and technologists dedicated to improving your journey.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p className="text-sm text-muted-foreground">
                Reach out to support@tripinhand.in for assistance or partnership inquiries.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
