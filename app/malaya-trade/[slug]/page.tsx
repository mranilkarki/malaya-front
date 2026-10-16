import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. MUST be exported from this exact dynamic file for "output: export"
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    
    if (!res.ok) {
      console.warn(`[build] Failed to fetch products: status ${res.status}`);
      // Fallback dummy slug so export doesn't fail if the backend is down during build
      return [{ slug: 'sample' }];
    }

    const data = await res.json();
    const products = Array.isArray(data) ? data : data?.data || [];

    if (!products.length) {
      return [{ slug: 'sample' }];
    }

    // Next.js expects an array of objects: [{ slug: 'item-1' }, { slug: 'item-2' }]
    return products.map((item: any) => ({
      slug: String(item.slug || item.id),
    }));
  } catch (error) {
    console.error('[build] Error in generateStaticParams:', error);
    // Return at least one static route so the build passes
    return [{ slug: 'sample' }];
  }
}

// 2. The detail page component (Server Component)
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  let product: any = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`);
    if (res.ok) {
      product = await res.json();
    }
  } catch (err) {
    console.error('Error fetching product detail:', err);
  }

  if (!product) {
    notFound();
  }

  const formattedPrice =
    typeof product.price === 'number'
      ? product.price.toLocaleString('en-US')
      : product.price;

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/malaya-trade"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#5b714b] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Malaya Trade
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            {product.image ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.image}`}
                alt={product.name || 'Product'}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                No Image Available
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              {product.category?.name && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#5b714b] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                  {product.category.name}
                </span>
              )}

              <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
                {product.name}
              </h1>

              <div className="text-2xl font-black text-[#5b714b] mb-6">
                NPR {formattedPrice}
              </div>

              {product.sku && (
                <p className="text-xs text-slate-400 mb-4">
                  SKU: <span className="font-mono text-slate-600">{product.sku}</span>
                </p>
              )}

              <div className="prose prose-sm text-slate-600 leading-relaxed mb-6">
                <p>{product.description || 'Authentic Himalayan export product.'}</p>
              </div>
            </div>

            {/* B2B Inquiry Button */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#5b714b] hover:bg-[#4a5c3d] text-white font-bold text-sm transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> Inquire for Bulk / Export
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}