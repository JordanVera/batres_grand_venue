import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaStrip from '@/components/home/CtaStrip';
import {
  PACKAGE_NAV,
  SPECIAL_OFFERS,
  SPECIAL_PACKAGES_INTRO,
} from '@/lib/pricing';
import { pageMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'Special Packages — Micro Weddings & Corporate Events',
  description:
    'Special packages at Batres Grand Venue in Humble, TX — Christmas corporate events from $4,350 and micro weddings from $4,500. Schedule a private tour.',
  path: '/packages/special',
});

export default function SpecialPackagesPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-16.jpg"
          alt="Special packages at Batres Grand Venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase">
            Seasonal & Intimate
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Special Packages
          </h1>
        </div>
      </section>

      <section className="border-b border-border px-6 py-6 lg:px-8">
        <nav
          aria-label="Package options"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-4"
        >
          {PACKAGE_NAV.map((link) => {
            const isActive = link.href === '/packages/special';
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-colors',
                  isActive
                    ? 'text-[#C4A35A]'
                    : 'text-foreground/50 hover:text-foreground',
                )}
              >
                {link.shortLabel}
              </Link>
            );
          })}
        </nav>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            {SPECIAL_PACKAGES_INTRO}
          </p>
          <div className="mt-8">
            <Link
              href="/tour"
              className="inline-flex bg-[#C4A35A] px-6 py-3 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#A6863F]"
            >
              Book a Private Tour
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4EE] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {SPECIAL_OFFERS.map((offer) => (
            <article
              key={offer.id}
              className="flex flex-col border border-border bg-white p-8 sm:p-10"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#C4A35A] uppercase">
                Special Offer
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground">
                {offer.name}
              </h2>
              <p className="mt-3 font-serif text-2xl text-[#C4A35A]">
                {offer.price}
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/65">
                {offer.description}
              </p>
              <Link
                href="/tour"
                className="mt-8 inline-flex text-xs tracking-[0.2em] text-[#C4A35A] uppercase transition-colors hover:text-[#A6863F]"
              >
                Schedule a Private Tour →
              </Link>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-5xl text-center text-xs text-foreground/45">
          *Prices are subject to change. Package details customized during your
          tour.
        </p>
      </section>

      <CtaStrip />
    </>
  );
}
