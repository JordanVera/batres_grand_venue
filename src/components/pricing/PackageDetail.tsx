import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  PACKAGE_NAV,
  type VenuePackageDetail,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';

type PackageDetailProps = {
  pkg: VenuePackageDetail;
};

export default function PackageDetail({ pkg }: PackageDetailProps) {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.name} at Batres Grand Venue`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#C4A35A] uppercase">
            {pkg.tagline}
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            {pkg.name}
          </h1>
          <p className="mt-4 font-serif text-2xl text-[#C4A35A] sm:text-3xl">
            {pkg.price}
          </p>
        </div>
      </section>

      <section className="border-b border-border px-6 py-6 lg:px-8">
        <nav
          aria-label="Package options"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-4"
        >
          {PACKAGE_NAV.map((link) => {
            const isActive = link.href === `/packages/${pkg.slug}`;
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
            {pkg.description}
          </p>
          <p className="mt-4 text-sm text-foreground/50">{pkg.capacity}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tour"
              className="inline-flex bg-[#C4A35A] px-6 py-3 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#A6863F]"
            >
              Book a Private Tour
            </Link>
            <Link
              href="/contact"
              className="inline-flex border border-[#C4A35A] px-6 py-3 text-xs tracking-[0.2em] text-[#C4A35A] uppercase transition-colors hover:bg-[#C4A35A] hover:text-black"
            >
              Inquire About Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4EE] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {pkg.sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-5 font-serif text-2xl text-foreground">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/70"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[#C4A35A]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {pkg.footnote ? (
          <p className="mx-auto mt-12 max-w-5xl text-center text-xs text-foreground/45">
            *{pkg.footnote}
          </p>
        ) : null}
      </section>

      <CtaStrip />
    </>
  );
}
