import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
      
      // Reset error state when video can play
      videoRef.current.addEventListener('canplay', () => {
        setError(null);
      });
    }
  }, []);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        // Ensure video is loaded
        await videoRef.current.load();
        // Set currentTime to 0 to ensure we start from beginning
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
        setIsPlaying(true);
        setError(null);
      } catch (error) {
        console.error('Error playing video:', error);
        setError('Unable to play video. Please try again.');
      }
    }
  };

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-900">
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
          <button
            onClick={handlePlay}
            className="p-6 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors transform hover:scale-105 active:bg-amber-800"
            aria-label="Play video"
            disabled={isLoading}
          >
            <Play className="w-12 h-12" />
          </button>
        </div>
      )}
      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-500 text-white px-4 py-2 rounded text-sm text-center">
          {error}
        </div>
      )}
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        poster="https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg"
        controls={isPlaying}
        playsInline
        muted
        preload="metadata"
      >
        <source
          src="https://res.cloudinary.com/dlc5g3cjb/video/upload/v1736958322/6982417e-d790-4fd1-a02b-c5a0c166dd9e_fqqeoj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}