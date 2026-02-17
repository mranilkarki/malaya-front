'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface GalleryProps {
  images?: GalleryImage[];
  gallery?: string[]; // Receives the array of filenames directly
}

export default function Gallery({ images, gallery }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Map the string array to the GalleryImage interface
  const processedApiImages: GalleryImage[] = (gallery || []).map((filename, index) => ({
    id: `api-${index}`,
    url: `${process.env.NEXT_PUBLIC_STORAGE_URL}/${filename}`,
    alt: `Gallery image ${index + 1}`
  }));

  const galleryImages = images ?? processedApiImages;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  if (galleryImages.length === 0) return null;

  return (
    <>
      {/* Gallery Layout */}
      <div className="grid grid-cols-1   mt-20 md:grid-cols-3 gap-3 rounded-3xl overflow-hidden">
        {/* Large Left Image */}
        <div
          className="md:col-span-2 relative group cursor-pointer h-[420px] md:h-[520px]"
          onClick={() => openLightbox(0)}
        >
          <img
            src={galleryImages[0].url}
            alt={galleryImages[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition">
            <Maximize2 className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Right Grid – 4 Images */}
        <div className="grid grid-cols-2 gap-3 h-[420px] md:h-[520px]">
          {galleryImages.slice(1, 5).map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-7xl max-h-[90vh] px-20">
            <img
              src={galleryImages[currentImageIndex].url}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute bottom-6 text-white text-sm">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}