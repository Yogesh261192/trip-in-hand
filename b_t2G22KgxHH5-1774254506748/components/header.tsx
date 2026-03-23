import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xl font-semibold text-foreground">Wanderlust</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>
        <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Plan Trip
        </button>
      </div>
    </header>
  )
}
