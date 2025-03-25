
import React from 'react';

interface VideoBackgroundProps {
  src: string;
  type?: string;
  overlay?: boolean;
  overlayColor?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  type = 'video/mp4',
  overlay = true,
  overlayColor = 'from-white/80 to-papaya/10',
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor} z-10`}></div>
      )}
      <video 
        className="absolute w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
