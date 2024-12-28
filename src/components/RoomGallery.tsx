import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface RoomGalleryProps {
  images: string[];
  name: string;
  onClose?: () => void;
  isModal?: boolean;
}

export function RoomGallery({ images, name, onClose, isModal = false }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const galleryContent = (
    <>
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={images[currentIndex]}
          alt={`${name} - Image ${currentIndex + 1}`}
          className={`w-full h-full object-cover ${isModal ? 'rounded-lg' : ''}`}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl w-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>
          {galleryContent}
        </div>
      </div>
    );
  }

  return <div className="mb-6">{galleryContent}</div>;
}