import React from "react";
import { motion } from "framer-motion";

interface ProgressProps {
  progress: number; // Progress value from 0 to 100
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const fillHeight = (progress / 100) * 130; 
  const fillY = 122 - fillHeight; 

  return (
    <div className="flex flex-col items-center w-[10vw] relative top-[9vw] left-[3.5vw]">
      <svg width="150" height="220" viewBox="0 -10 100 170" className="drop-shadow-lg">
        <ellipse cx="50" cy="10" rx="45" ry="15" fill="rgba(230, 230, 230, 0.7)" stroke="black" strokeWidth="1" />
        <path d="M5 10 v130 M95 10 v130" stroke="black" strokeWidth="1" fill="none" />
        <motion.rect
          x="5"
          y={fillY}
          width="90"
          height={fillHeight}
          fill="rgba(130, 141, 114, 0.8)"
          stroke="none"
          initial={{ height: 0 }}
          animate={{ height: fillHeight, y: fillY }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
         <ellipse cx="50" cy="140" rx="45" ry="15" fill="rgba(130, 141, 114, 0.8)" stroke="black" strokeWidth="1" />
        {/* <clipPath id="bottomClip">
          <rect x="0" y="140" width="100" height="20" />
        </clipPath>
        <ellipse cx="50" cy="140" rx="45" ry="15" fill="rgba(130, 141, 114, 0.8)" stroke="black" strokeWidth="1.2" clipPath="url(#bottomClip)" /> */}
        {/* This ellipse should be used when progress is more than 10% */}
      </svg>
      <p className="text-[1.5vw] pxl text-gray-800 mt-2 ml-4">Progress {progress}%</p>
    </div>
  );
};

export default Progress;
