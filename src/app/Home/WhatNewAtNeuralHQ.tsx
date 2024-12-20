"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { posts } from "../utils/Constants/WhatAtNeuralHQ";
import Button from "../components/Button/Button";

const WhatNewAtNeuralHQ = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState<typeof posts>([]);

  const updateVisiblePosts = useCallback(() => {
    const postCount = posts.length;
    const prev = (currentIndex - 1 + postCount) % postCount;
    const next = (currentIndex + 1) % postCount;
    setVisiblePosts([posts[prev], posts[currentIndex], posts[next]]);
  }, [currentIndex]);

  useEffect(() => {
    updateVisiblePosts();
  }, [currentIndex, updateVisiblePosts]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <main className="relative z-20 min-h-screen bg-white py-12 ">
      {/* Navigation Buttons */}
      <button
        className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full w-8 h-8 hover:text-white z-10"
        style={{
          background: "linear-gradient(104.09deg, #CCE2FB 0%, #FADCEA 100%)",
        }}
        onClick={goToPrev}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
        <span className="sr-only">Previous post</span>
      </button>

      <button
        className="absolute top-1/2 right-2 md:right-12 md:top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full w-8 h-8 hover:text-white z-10"
        style={{
          background: "linear-gradient(104.09deg, #CCE2FB 0%, #FADCEA 100%)",
        }}
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 text-white" />
        <span className="sr-only">Next post</span>
      </button>

      {/* Content Container */}
      <div className="container mx-auto px-4 w-full md:max-w-[90vw]  ">
        {/* Header Section */}
        <div className="flex w-full justify-between items-center mb-16 md:max-w-[80vw] mx-auto  ">
          <h1 className="font-quicksand font-semibold text-[4.5vw] md:text-[3.33vw] leading-[1.3] md:leading-[64px]">
            <span className="text-[#6366F1]">What&apos;s new</span> at Neuralhq?
          </h1>
          <Button link="/Blog" text="View our blog" />
        </div>

        {/* Carousel Section */}
        <div className="w-full relative overflow-hidden">
          <div className="flex items-center justify-center w-full md:min-h-[80vh] md:max-w-[80vw] mx-auto ">
            <div className="flex items-center justify-center gap-x-5  h-[72vh] ">
              {visiblePosts.map((post, idx) => (
                <div
                  key={post.id}
                  className={cn(
                    "shadow-xl md:shadow-none transition-all duration-500 h-[70vh]  ease-in-out rounded-3xl overflow-hidden bg-white ",
                    idx === 1
                      ? " w-[90vw]  md:w-[40vw]"
                      : "md:w-[20vw] opacity-80",
                    "md:block",
                    idx !== 1 ? "hidden md:block" : ""
                  )}
                >
                  <div className="relative h-[50%]   ">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 lg:h-[60] overflow-hidden ">
                    <h3 className="font-quicksand font-semibold leading-5 sm:text-base lg:text-xl lg:leading-6 text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="font-quicksand font-normal sm:text-sm lg:text-sm leading-7 text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <button className="flex items-center gap-2 bg-white text-[#6265C6] border border-[#6265C6] px-4 py-2 rounded-md">
                      Read more
                      <ArrowRight className="w-4 h-4 text-[#6265C6]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatNewAtNeuralHQ;
