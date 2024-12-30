import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404161/SIM07019-Edit-3-scaled_skyytb.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404161/SIM07002-HDR-scaled_eh0ai8.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404161/SIM07011-HDR-scaled_l78mbn.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404161/SIM07035-scaled_izyy0n.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404161/SIM07048-scaled_fd8olj.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404162/SIM06935-HDR-scaled_a8hgap.jpg',
  'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404162/SIM06908-HDR-scaled_kx7vtx.jpg'
];

export function HomeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}