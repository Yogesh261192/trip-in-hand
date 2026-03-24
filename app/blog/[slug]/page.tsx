import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-posts";

interface BlogPostPageProps {
  params: { slug: string };
}

function findPostBySlug(slug: string | string[] | undefined) {
  const requestedSlug = Array.isArray(slug) ? slug[0] : slug;
  const normalizedSlug = requestedSlug?.toLowerCase().trim();

  return (
    blogPosts.find((item) => item.slug.toLowerCase() === normalizedSlug) ||
    blogPosts.find((item) => item.slug.toLowerCase().includes(normalizedSlug || "")) ||
    blogPosts[0]
  );
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = findPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "This blog post is currently unavailable.",
    };
  }

  return {
    title: `${post.title} | Trip In Hand`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Trip In Hand`,
      description: post.summary,
      type: "article",
      url: `https://your-domain.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Trip In Hand`,
      description: post.summary,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const requestedSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const normalizedSlug = requestedSlug?.toLowerCase().trim();

  const post =
    blogPosts.find((item) => item.slug.toLowerCase() === normalizedSlug) ||
    blogPosts.find((item) => item.slug.toLowerCase().includes(normalizedSlug || "")) ||
    blogPosts[0];

  if (!post) {
    // Fallback to ensure user sees a blog instead of never found
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested article is not available yet.</p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-2">{post.publishedDate} • {post.author}</p>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{post.summary}</p>
          <article className="prose prose-lg text-foreground">
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'subheading') {
                return (
                  <h3 key={index} className="text-2xl font-semibold mt-6 mb-3">
                    {block.text}
                  </h3>
                );
              }

              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="leading-7 mb-4">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul key={index} className="list-disc list-inside mb-4">
                    {block.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
