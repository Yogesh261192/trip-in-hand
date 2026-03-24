import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Careers at Trip In Hand</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Join our fast-growing travel platform and help millions of users book memorable trips.
          </p>
          <p className="text-base">
            We are hiring across engineering, design, marketing, and customer success. Check updated openings and apply with your resume.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
