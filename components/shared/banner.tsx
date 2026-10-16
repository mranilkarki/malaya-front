'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BannerProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function Banner({
  title = 'Malaya Trade',
  subtitle = 'Connecting Himalayan products with global markets.',
  breadcrumbs = [
    { label: 'HOME', href: '/' },
    { label: 'MALAYA TRADE', href: '/malaya-trade' },
  ],
}: BannerProps) {
  return (
    <div className="bg-[#5b714b] text-white py-14 md:py-16 mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title & Slogan */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mb-4 font-light">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={index} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-emerald-200 cursor-default">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}

                {!isLast && (
                  <span className="text-emerald-300/70">/</span>
                )}
              </div>
            );
          })}
        </nav>

      </div>
    </div>
  );
}