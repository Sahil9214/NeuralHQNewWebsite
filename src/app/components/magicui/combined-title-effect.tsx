"use client";

import { HyperText } from "./hyper-text";
import { GradualSpacing } from "./gradual-spacing";

interface CombinedTitleEffectProps {
  hyperText: string;
  gradualText: string;
  className?: string;
}

export function CombinedTitleEffect({
  hyperText,
  gradualText,
  className,
}: CombinedTitleEffectProps) {
  const sharedTextStyles =
    "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600";

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center ${className}`}
    >
      <HyperText
        text={hyperText}
        className={`${sharedTextStyles} tracking-normal font-sans`}
        animateOnLoad={true}
        duration={1200}
        loopInterval={5000}
        framerProps={{
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 3 },
        }}
      />
      <GradualSpacing
        text={` ${gradualText}`}
        duration={0.8}
        delayMultiple={0.06}
        className={`${sharedTextStyles} tracking-normal font-sans`}
        framerProps={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      />
    </div>
  );
}
