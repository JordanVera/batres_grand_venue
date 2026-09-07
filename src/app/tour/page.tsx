import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { COMPANY, VIDEOS } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Schedule a Tour',
  description:
    'Tour Batres Grand Venue at 14803 Vera Dr in Humble — reception hall, grand staircase, and VIP bridal suite.',
  path: '/tour',
});

export default function TourPage() {
  const video = VIDEOS.find((v) => v.type === 'youtube');
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image src="/gallery/gallery-02.jpg" alt="Tour Batres Grand Venue" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase">Explore the Hall</p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">Tour Batres</h1>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <p className="mx-auto max-w-xl text-center text-foreground/60 leading-relaxed">
            Walk our 4,500 sq ft reception hall — crystal chandeliers, grand staircase, VIP suite, and bar at {COMPANY.address}, {COMPANY.city}.
          </p>
          {video?.youtubeId ? (
            <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
          ) : null}
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C4A35A] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-white uppercase hover:bg-[#A6863F]">
              Schedule a Private Tour <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
