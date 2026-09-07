import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  PACKAGE_NAV,
  SPECIAL_OFFERS,
  VENUE_PACKAGES,
} from '@/lib/pricing';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Wedding & Event Packages from $9,515',
  description:
    'Compare Silver, Gold, Platinum, and special packages at Batres Grand Venue in Humble, TX. Prices from $4,350 for corporate events and $9,515 for full wedding packages.',
  path: '/packages',
});

export default function PackagesIndexPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-04.jpg"
          alt="Wedding packages at Batres Grand Venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase">
            Humble, Texas
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Packages
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            Personalized packages for weddings, quinceañeras, and private
            events — customized to fit every budget.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {VENUE_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col border p-8 ${
                pkg.highlighted
                  ? 'border-[#C4A35A] bg-[#F8F4EE] shadow-lg shadow-[#C4A35A]/10'
                  : 'border-border bg-card'
              }`}
            >
              {pkg.highlighted ? (
                <span className="mb-4 self-start bg-[#C4A35A] px-3 py-1 text-[10px] tracking-[0.2em] text-black uppercase">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[10px] tracking-[0.3em] text-[#C4A35A] uppercase">
                {pkg.name}
              </p>
              <p className="mt-2 font-serif text-5xl text-foreground">
                {pkg.price}
              </p>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-foreground/60">
                {pkg.description}
              </p>
              <ul className="flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-foreground/70"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[#C4A35A]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.href}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#C4A35A] px-6 py-3 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#A6863F]"
              >
                View Full Details <ArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#C4A35A] uppercase">
            Also Available
          </p>
          <h2 className="mb-12 text-center font-serif text-3xl text-white sm:text-4xl">
            Special Packages
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {SPECIAL_OFFERS.map((offer) => (
              <article
                key={offer.id}
                className="border border-white/10 bg-[#161410] p-8"
              >
                <h3 className="font-serif text-2xl text-white">{offer.name}</h3>
                <p className="mt-2 font-serif text-2xl text-[#C4A35A]">
                  {offer.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/packages/special"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#C4A35A] uppercase transition-all hover:gap-3"
            >
              Explore Special Packages <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-10 lg:px-8">
        <nav
          aria-label="All packages"
          className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4"
        >
          {PACKAGE_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase transition-colors hover:text-[#C4A35A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <CtaStrip />
    </>
  );
}
