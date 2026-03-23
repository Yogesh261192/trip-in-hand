import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground mt-3">
            Welcome to the Trip In Hand blog. Content is coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
