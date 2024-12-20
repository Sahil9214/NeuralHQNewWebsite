import { NumberTickerDuration } from "@/app/utils/Constants/AnimationConstant";
import React, { useEffect, useState } from "react";

interface NumberTickerProps {
  value: number;
  duration?: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  duration = NumberTickerDuration, // Increased duration to slow down the speed
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };
    requestAnimationFrame(animateValue);
  }, [value, duration]);

  return (
    <span className="font-extrabold text-4xl sm:text-6xl md:text-7xl font-lato">
      {displayValue}%
    </span>
  );
};

export default NumberTicker;
