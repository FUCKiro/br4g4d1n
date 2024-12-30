import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

export function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="p-4 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors"
            aria-label="Play video"
          >
            <Play className="w-8 h-8" />
          </button>
        </div>
      )}
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        poster="https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg"
        controls={isPlaying}
        playsInline
        preload="metadata"
      >
        <source
          src="https://res.cloudinary.com/dlc5g3cjb/video/upload/v1735567388/6982417e-d790-4fd1-a02b-c5a0c166dd9e_zlochv.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}