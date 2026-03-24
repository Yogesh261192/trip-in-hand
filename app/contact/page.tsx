import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Have questions? We’d love to help. Reach out to our support team for booking assistance, product feedback, or general inquiries.
          </p>
          <p className="text-base">
            Email: support@tripinhand.in 
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
