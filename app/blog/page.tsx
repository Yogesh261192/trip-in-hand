import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Blogs</h1>
            <p className="text-muted-foreground mt-3">
              Explore curated travel stories, booking tips, and destination inspiration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {post.cta ?? "Read more"}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center text-muted-foreground">
            Want more blogs? Stay tuned for new posts every week.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
