import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DealCard } from "@/components/deal-card";
import { travelDeals } from "@/lib/mock-data";

export default function DealsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold">Travel Deals</h1>
            <p className="text-muted-foreground mt-3">
              Explore the latest curated bargains for top destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
