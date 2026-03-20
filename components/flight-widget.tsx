'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export function FlightWidget() {
   const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://tpembd.com/content?currency=inr&trs=507824&shmarker=710659&powered_by=true&locale=en&show_header=true&limit=9&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=4478";
    script.async = true;

    widgetRef.current.appendChild(script);
  }, []);

  return <div ref={widgetRef}></div>;
}
