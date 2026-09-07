import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PackageDetail from '@/components/pricing/PackageDetail';
import { getPackageBySlug, PACKAGE_DETAILS } from '@/lib/pricing';
import { pageMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PACKAGE_DETAILS.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  return pageMetadata({
    title: `${pkg.name} — ${pkg.price}`,
    description: `${pkg.name} at Batres Grand Venue in Humble, TX. ${pkg.price}. ${pkg.description.slice(0, 120)}`,
    path: `/packages/${pkg.slug}`,
  });
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return <PackageDetail pkg={pkg} />;
}
