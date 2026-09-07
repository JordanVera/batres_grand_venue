import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Photos of Our Humble, Texas Wedding Venue',
  description:
    'Browse photos of Batres Grand Venue — a restored luxury estate at 14803 Vera Dr. See the banquet hall facade, grounds, bridal suite, and wedding moments in Humble, Texas.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-02.jpg"
          alt={`Gallery of ${COMPANY.name} — historic luxury estate in Humble, Texas`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#C4A35A] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Space
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/65 leading-relaxed">
          Explore Batres Grand Venue: a restored luxury banquet hall estate
          with a wraparound porch, turret, courtyard, reception hall, and bridal
          suite at 14803 Vera Dr in Humble, Texas.
        </p>
        <GalleryGrid />
      </section>
    </>
  );
}
