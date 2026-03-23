"use client"

import Image from "next/image"
import Link from "next/link"
import type { Location } from "@/lib/locations"

interface LocationCardProps {
  location: Location
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Link href={`/location/${location.id}`} className="group block">
      <article className="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={location.heroImage}
            alt={location.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-foreground">
              {location.region}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {location.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-foreground">{location.rating}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
              Explore
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
