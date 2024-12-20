/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { AnimatedGridPattern } from "../components/ui/animated-grid-pattern";
import { CombinedTitleEffect } from "../components/magicui/combined-title-effect";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import { subtitleWords } from "../utils/Constants/HomeHeroSectionSubtitleWord";
export function HeroSection() {
  return (
    <section className="bg-white relative h-screen flex items-center justify-center overflow-hidden ">
      <AnimatedGridPattern
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
        width={32}
        height={32}
        numSquares={78}
        maxOpacity={0.3}
        duration={8}
        repeatdelay={0}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-[90%] mx-auto">
        <CombinedTitleEffect
          hyperText="Transform"
          gradualText="Your E-commerce with Intelligent Agents"
          className="text-[4.2vw] sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
        />
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8 ">
          {subtitleWords.map((word, index) => (
            <FadeText
              key={index}
              text={word}
              direction={index % 2 === 0 ? "up" : "right"}
              className="text-base leading-[2vh] sm:text-base md:text-lg text-gray-700"
              framerProps={{
                show: { transition: { delay: 1 + index * 0.1 } },
              }}
            />
          ))}
        </div>
        <BlurIn
          className="inline-block"
          duration={0.5}
          variant={{
            hidden: { filter: "blur(10px)", opacity: 0 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              // @ts-ignore
              transition: { delay: 2.5 },
            },
          }}
        >
          <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#494BF2] rounded-md group text-sm sm:text-base">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3a3cc2] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3a3cc2] rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#3a3cc2] rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center justify-center">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </BlurIn>
      </div>
    </section>
  );
}
// git add .
//git commit -m"hero section"
//git push
