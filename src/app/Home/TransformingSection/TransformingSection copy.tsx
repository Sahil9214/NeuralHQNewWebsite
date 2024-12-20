/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./TransformingSection.css";
import NumberTicker from "../../components/ui/number-ticker";
import { useInView } from "../../hooks/useInView";
import { TransformingSectionThreshold } from "../../utils/Constants/AnimationConstant";
import { cards } from "../../utils/Constants/TransformingSection";

export const TransformingSection = () => {
  const [ref, isInView] = useInView({
    threshold: TransformingSectionThreshold, // Trigger when 20% of the element is visible
  });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1028);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const { scrollYProgress } = useScroll();
  return (
    <div className="h-full lg:h-screen w-full md:max-w-[90vw] mx-auto flex items-center justify-center">
      <main
        ref={ref as unknown as React.RefObject<HTMLElement>}
        className="container mx-auto px-4 py-8 lg:py-16 lg:max-w-[80vw] xl:max-w-[90vw]"
      >
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] leading-tight lg:leading-[64px] font-semibold mb-4">
            Transforming Customer Experience Into{" "}
            <span className="text-[#6366F1]">Business Growth</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-[1.6vw] leading-normal lg:leading-8 text-gray-600 font-normal">
            Measured impact across thousands of customer interactions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 lg:mt-12">
          {cards.map((card, index) => (
            <CardWithFloatingAnimation
              key={index}
              card={card}
              index={index}
              scrollYProgress={scrollYProgress}
              isLargeScreen={isLargeScreen}
              isInView={!!isInView}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

interface CardProps {
  card: {
    title: string;
    className: string;
    className2: string;
    value: number;
    description: string;
  };
  index: number;
  scrollYProgress: any;
  isLargeScreen: boolean;
  isInView: boolean;
}

const CardWithFloatingAnimation: React.FC<CardProps> = ({
  card,
  index,
  scrollYProgress,
  isLargeScreen,
  isInView,
}) => {
  // Create different floating patterns for each card
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 50 : -50] // Alternate up/down movement
  );
  // Add slight rotation for more dynamic effect
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 5 : -5]
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        y,
        rotate,
      }}
      whileHover={{ scale: 1.05 }}
      className="space-y-4 bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-lg sm:text-xl lg:text-[1.4vw] leading-8 font-normal text-center mb-6">
          {card.title}
        </h2>
        <div className="relative mb-6 h-[32vh] sm:max-h-[25vh] lg:h-[30vh] xl:max-h-[30vh] 2xl:max-h-[40vh]">
          <div className={card.className}>
            <div className={card.className2} />
          </div>
          <div className="absolute inset-0 flex items-end justify-end pr-4">
            <p className="whitespace-pre-wrap text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-black dark:text-white">
              {(isLargeScreen ? isInView : !isInView) && (
                <NumberTicker value={card.value} />
              )}
            </p>
          </div>
        </div>
        <p className="text-base lg:text-[1.2vw] xl:text-[1vw] xl:mt-[1.7vw] 2xl:mt-[1.7vw] leading-7 text-gray-600">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};
