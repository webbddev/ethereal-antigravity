'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // Customize these values to dial in the "feel"
        lerp: 0.1, // Low = smoother/slower, High = snappier
        duration: 1.5, // How long the scroll animation lasts
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
