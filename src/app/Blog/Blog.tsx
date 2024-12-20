/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../Footer";

import { FloatingNav } from "../components/ui/floating-navbar";
import { navItems } from "../utils/Constants/NavItem";
import { blogPosts, BlogCardProps } from "../utils/Constants/Blog";

import React from "react";

const Blog = () => {
  return (
    <main className="min-h-screen ">
      <FloatingNav navItems={navItems} />
      <BlogPageHeroSection />
      <section className="container mx-auto w-[95vw]  lg:w-[83.333333vw] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              href={post.href}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;

function BlogPageHeroSection() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Handle screen width changes
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1721);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full mx-auto py-14 md:py-12 lg:py-24
    ${isWideScreen ? "px-4 " : ""}
    `}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-between 
        ${isWideScreen ? "container px-4" : "w-full"} 
        mx-auto gap-8 md:gap-12`}
      >
        {/* Image Container */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-r-full">
            <Image
              src="/assets/Images/BlogHeroSection.png"
              alt="Desk with angled laptop, coffee cup, calculator, and papers"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6">
          <h1 className="font-quicksand text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.375] md:leading-[1.375] lg:leading-[88px] tracking-tight text-center md:text-left max-w-[600px]">
            What&apos;s new at{" "}
            <span className="text-indigo-600 inline-block">neuralhq</span>?
          </h1>
          <div className="w-16 h-1 bg-indigo-600"></div>
        </div>
      </div>
    </div>
  );
}

export function BlogCard({ title, description, image, href }: BlogCardProps) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle screen width changes
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1721);
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isMobile, "isMobileValue");
  return (
    <div className="flex flex-col space-y-4 ">
      <div className="relative aspect-[4/3] w-full overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover 
         
           ${isMobile ? "rounded-6xl" : "rounded-xl"}     
          transition-all duration-1000 hover:rounded-6xl
          
          `}
        />
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="text-muted-foreground line-clamp-2">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
      >
        <button className="text-indigo-600 hover:text-indigo-700">
          Read more
        </button>
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
