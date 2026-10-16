'use client';

interface ShopBannerProps {
  title?: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export default function VisaBanner({
  title = "Visa Country",
  breadcrumbs = [
    { label: "HOME", href: "/" },
    { label: "VISA COUNTRY", href: "/" }
  ],
  backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmswYj5PDwc4zO7EDw2dkI9ycobA9wT3ukg&s"
}: ShopBannerProps) {
  return (
    <div className="relative h-70 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative mt-25 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-3">
              <a
                href={crumb.href}
                className={`transition-colors ${
                  index === breadcrumbs.length - 1
                    ? 'text-slate-400 pointer-events-none'
                    : 'text-white hover:text-[#5b714b]'
                }`}
              >
                {crumb.label}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="text-slate-400">·</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}