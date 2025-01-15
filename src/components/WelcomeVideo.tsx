import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      console.error('Video failed to load');
      setShowFallback(true);
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Preload video metadata
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // Reset video to start
      video.currentTime = 0;
      
      // On iOS, we need to play muted first
      video.muted = true;
      await video.play();
      
      // After autoplay starts, we can unmute if needed
      // video.muted = false;
      
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to play video:', error);
      setShowFallback(true);
    }
  };

  // If video fails, show a static image
  if (showFallback) {
    return (
      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <img
          src="https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg"
          alt="Welcome to Bragadin 75"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-900">
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
          <button
            onClick={handlePlay}
            className="p-6 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors transform hover:scale-105 active:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Play video"
            disabled={isLoading}
          >
            <Play className="w-12 h-12" />
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06926-HDR-scaled_q6ezvf.jpg"
        playsInline
        muted
        controls={isPlaying}
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