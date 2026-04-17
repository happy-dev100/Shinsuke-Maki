'use client';

import dynamic from 'next/dynamic';

const HeroShape = dynamic(
  () => import('./HeroShape').then((m) => m.HeroShape),
  { ssr: false }
);

export function HeroShapeClient() {
  return (
    <div className="flex justify-center">
      <HeroShape />
    </div>
  );
}
