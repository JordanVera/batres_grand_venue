import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Thank You',
  description: `Thank you for contacting ${COMPANY.name}. We will be in touch soon about your Humble, Texas wedding or celebration.`,
  path: '/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-[#C4A35A] text-[10px] tracking-[0.4em] uppercase mb-6">Message Received</p>
      <h1 className="font-serif text-foreground text-4xl sm:text-5xl mb-6">Thank You</h1>
      <p className="text-foreground/60 max-w-md leading-relaxed mb-10">
        We&apos;ve received your inquiry and will be in touch soon. We look forward
        to welcoming you to Batres Grand Venue.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-8 py-3.5 bg-[#C4A35A] text-black text-xs tracking-[0.2em] uppercase hover:bg-[#A6863F] transition-colors">
          Back to Home
        </Link>
        <Link href="/contact" className="px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
