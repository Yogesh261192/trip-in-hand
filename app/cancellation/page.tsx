import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Cancellation Policy</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Review our cancellation policy, refund timelines, and rebooking options for flexible travel.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
