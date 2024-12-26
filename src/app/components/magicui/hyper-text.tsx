"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  duration?: number;
  loopInterval?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  loopInterval = 5000,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    iterations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const animateText = () => {
      if (iterations.current < text.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= iterations.current
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        iterations.current = iterations.current + 0.1;
        requestAnimationFrame(animateText);
      } else {
        setTrigger(false);
      }
    };

    if (trigger || (animateOnLoad && isFirstRender.current)) {
      requestAnimationFrame(animateText);
      isFirstRender.current = false;
    }

    const intervalId = setInterval(triggerAnimation, loopInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, duration, trigger, animateOnLoad, loopInterval]);

  return (
    <div
      className="flex scale-100 cursor-default overflow-hidden py-2"
      onMouseEnter={triggerAnimation}
    >
      <motion.div initial="hidden" animate="visible" className="flex">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn(letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
