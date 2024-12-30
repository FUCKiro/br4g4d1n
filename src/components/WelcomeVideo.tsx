import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
    }
  }, []);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-900">
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
          <button
            onClick={handlePlay}
            className="p-6 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors transform hover:scale-105"
            aria-label="Play video"
            disabled={isLoading}
          >
            <Play className="w-12 h-12" />
          </button>
        </div>
      )}
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        poster="https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg"
        controls={isPlaying}
        playsInline
        muted={!isPlaying}
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dlc5g3cjb/video/upload/v1735567388/6982417e-d790-4fd1-a02b-c5a0c166dd9e_zlochv.mov"
          type="video/quicktime"
        />
        <source
          src="https://res.cloudinary.com/dlc5g3cjb/video/upload/v1735567388/6982417e-d790-4fd1-a02b-c5a0c166dd9e_zlochv.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}