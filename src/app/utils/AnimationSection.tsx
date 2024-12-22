"use client";
import { motion } from "framer-motion";
import { useAnimation } from "../context/AnimationContext";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  delay = 0,
}: AnimatedSectionProps) => {
  const { setIsAnimating } = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
      }}
    >
      {children}
    </motion.div>
  );
};
