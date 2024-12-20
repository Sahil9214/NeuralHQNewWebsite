/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import "./TransformingSection.css";
import NumberTicker from "../../components/ui/number-ticker";
import { useInView } from "../../hooks/useInView";
import { TransformingSectionThreshold } from "../../utils/Constants/AnimationConstant";
import "./TransformingSection.css";
import { cards } from "../../utils/Constants/TransformingSection";
export const TransformingSection = () => {
  const [ref, isInView] = useInView({
    threshold: TransformingSectionThreshold, // Trigger when 20% of the element is visible
  });

  return (
    <div className="h-full lg:h-screen max-w-[90vw]  mx-auto bg-white flex items-center justify-center border-4 border-red-500">
      <main
        //@ts-ignore
        ref={ref}
        className="container mx-auto px-4 py-8 lg:py-16 max-w-[90vw] lg:max-w-[80vw] xl:max-w-[90vw]  "
      >
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-[3vw] 2xl:text-[2.4vw] leading-tight lg:leading-[64px] font-semibold mb-4">
            Transforming Customer Experience Into{" "}
            <span className="text-[#6366F1]">Business Growth</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-[1.6vw] leading-normal lg:leading-8 text-gray-600 font-normal">
            Measured impact across thousands of customer interactions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-12 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="space-y-4 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl sm:text-xl lg:text-[1.4vw] leading-8 font-normal text-center mb-6">
                  {card.title}
                </h2>
                <div className="relative mb-6 max-h-[30vh] sm:max-h-[25vh] lg:h-[30vh] xl:max-h-[30vh] 2xl:max-h-[40vh] ">
                  <div className={card.className}>
                    <div className={card.className2} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-end pr-4">
                    <p className="whitespace-pre-wrap text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-black dark:text-white">
                      {isInView && <NumberTicker value={card.value} />}
                    </p>
                  </div>
                </div>
                <p className="text-base lg:text-[1.2vw] xl:text-[1vw]  xl:mt-[1.7vw] 2xl:mt-[1.7vw] leading-7 text-gray-600 ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
