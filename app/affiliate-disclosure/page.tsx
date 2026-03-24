import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Learn how we use affiliate links and partnerships to bring deals while keeping transparency and trust.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
