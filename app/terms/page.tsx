import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Understand the usage terms for Trip In Hand, including booking conditions and user responsibilities.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
