/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TransformingSection.css";
import NumberTicker from "../../components/ui/number-ticker";
import { useInView } from "../../hooks/useInView";
import { TransformingSectionThreshold } from "../../utils/Constants/AnimationConstant";
import { cards } from "../../utils/Constants/TransformingSection";
import { useLocomotiveScroll } from "@/app/context/LocomotiveScrollContext";
import { AnimatedSection } from "@/app/utils/AnimationSection";

export const TransformingSection = () => {
  const [ref, isInView] = useInView({
    threshold: TransformingSectionThreshold,
  });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1028);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      data-scroll-section
      className="h-full lg:h-screen w-full md:max-w-[90vw] mx-auto flex items-center justify-center"
    >
      <main
        ref={ref as unknown as React.RefObject<HTMLElement>}
        data-scroll
        data-scroll-speed="0.2"
        data-scroll-delay="0.1"
        className="container mx-auto px-4 py-8 lg:py-16 lg:max-w-[80vw] xl:max-w-[90vw]"
      >
        <div
          // data-scroll
          // data-scroll-speed="0.3"
          className="text-center mb-8 lg:mb-16"
        >
          <h1
            className="text-xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] leading-tight lg:leading-[64px] font-semibold mb-4"
            data-scroll
            data-scroll-speed="0.12"
            data-scroll-delay="0.1"
          >
            Transforming Customer Experience Into{" "}
            <span className="text-[#6366F1]">Business Growth</span>
          </h1>
          <p
            className="text-base sm:text-xl lg:text-[1.6vw] leading-normal lg:leading-8 text-gray-600 font-normal"
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-delay="0.1"
          >
            Measured impact across thousands of customer interactions
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 lg:mt-2 "
          data-scroll
          data-scroll-speed={0.05}
          data-scroll-delay={0.1}
        >
          {cards.map((card, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <CardWithLocoAnimation
                card={card}
                index={index}
                scroll={scroll}
                isLargeScreen={isLargeScreen}
                isInView={!!isInView}
              />
            </AnimatedSection>
          ))}
        </motion.div>
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
  scroll: any;
  isLargeScreen: boolean;
  isInView: boolean;
}

const CardWithLocoAnimation: React.FC<CardProps> = ({
  card,
  index,
  isLargeScreen,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
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
