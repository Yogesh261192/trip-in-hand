'use client';

import { useEffect, useRef, useState } from 'react';
import { Spinner } from '@/components/ui/spinner';

export function FlightWidget() {
  const widgetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://tpembd.com/content?currency=inr&trs=507824&shmarker=710659&powered_by=true&locale=en&show_header=true&limit=9&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=4478";
    script.async = true;
    script.onload = () => setIsLoading(false);
    script.onerror = () => setIsLoading(false);

    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner className="size-8" />
            <p className="text-sm text-muted-foreground">Loading flight deals...</p>
          </div>
        </div>
      )}
      <div ref={widgetRef}></div>
    </div>
  );
}
