"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define words with their special colors
  const specialWords: Record<string, string> = {
    edit: "#9b6400",
    sign: "#9b6400",
    collaborate: "#0f503c",
    search: "red",
    securely: "#ff69b4",
    store: "#ff69b4",
  };

  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[200vh] w-full", className)}
      style={{
        background:
          "linear-gradient(167.89deg, #D7DAF9 24.96%, rgba(249, 215, 216, 0) 50.59%)",
      }}
    >
      <div className="sticky top-0 mx-auto flex h-[50%] md:max-w-[90vw] lg:max-w-[70vw] xl:max-w-[65vw]         items-center bg-transparent px-[1rem] py-[5rem] ">
        <p className="flex flex-wrap p-5 text-2xl font-bold text-black dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl ">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const color = specialWords[word.toLowerCase()];

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                color={color}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  color?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, color }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{
          opacity: opacity,
          color: color || "inherit",
        }}
        className={color ? "" : "text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;

export const TextRevealByWordDiv = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextRevealByWord text="With Dropbox, you can edit and sign your documents, collaborate👇 on projects and search🔍 across all your apps, and it happens in the same place you securely store all your content. It’s that simple :)" />
    </div>
  );
};
