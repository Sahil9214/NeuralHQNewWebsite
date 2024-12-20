"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { ChevronDown, PieChart, Sparkles, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface Solution {
  name: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

interface NavItem {
  name: string;
  link: string;
  solutions?: Solution[];
}

const solutions: Solution[] = [
  {
    name: "Intelligent Catalogue",
    description: "AI-powered tagging and catalog enhancement for e-commerce",
    icon: PieChart,
    link: "#intelligent-catalogue",
  },
  {
    name: "Visual Generation",
    description: "Transform product imagery with AI-powered tools",
    icon: Sparkles,
    link: "#visual-catalogue",
  },
  {
    name: "Semantic Discovery",
    description: "Context-aware search and recommendations",
    icon: Shield,
    link: "#contextual-search",
  },
];

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [width, setWidth] = useState("75%");
  const [navGap, setNavGap] = useState("3rem");
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const updateNavbar = () => {
        const heroHeight = window.innerHeight;
        const scrollPercentage = Math.min(window.scrollY / heroHeight, 1);
        const newWidth = 60 - scrollPercentage * 20;
        const newGap = 3 - scrollPercentage * 1.5;
        setWidth(`${newWidth}%`);
        setNavGap(`${newGap}rem`);
      };
      window.addEventListener("scroll", updateNavbar);
      return () => window.removeEventListener("scroll", updateNavbar);
    } else {
      setWidth("68%");
      setNavGap("0.75rem");
    }
  }, [isLargeScreen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    router.push(link);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-4 left-1/2 border border-blue-100 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg z-[5000] py-1.5 px-3 flex items-center justify-between",
          className
        )}
        style={{
          width: isLargeScreen ? width : "68%",
          transform: "translateX(-50%)",
          maxWidth: isLargeScreen ? "none" : "360px",
        }}
      >
        <motion.div className="flex items-center space-x-2">
          <div className="w-5 h-5 lg:w-6 lg:h-6  rounded-full"></div>
          <Link href="/">
            <Image
              src="/assets/Images/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <div
          className="hidden md:flex items-center justify-center"
          style={{ gap: navGap }}
        >
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("Solutions")}
              className="flex items-center text-xs lg:text-sm font-medium text-gray-600 hover:text-[#494BF2] transition-colors"
            >
              Solutions
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full min-w-[600px] max-w-[90vw] bg-white rounded-lg shadow-lg py-6 px-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="grid grid-cols-3 gap-8">
                {solutions.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.link}
                    className="flex flex-col space-y-2 group/item hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    onClick={(e) => handleNavigation(e, solution.link)}
                  >
                    <div className="p-2 rounded-lg bg-[#494BF2]/5 w-fit">
                      <solution.icon className="w-5 h-5 text-[#494BF2]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 group-hover/item:text-[#494BF2] transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {solution.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {navItems.slice(1, 3).map((navItem: NavItem, idx: number) => (
            <Link
              key={`nav-item-${idx}`}
              href={navItem.link}
              className="text-xs lg:text-sm font-medium text-gray-600 hover:text-[#494BF2] transition-colors"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <motion.div>
          <Link
            href={navItems[3].link}
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#494BF2] px-2 py-1 lg:px-3 lg:py-1.5 text-xs lg:text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#3a3cc2]"
          >
            <span>{navItems[3].name}</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20" />
            </div>
          </Link>
        </motion.div>
        {!isLargeScreen && (
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && !isLargeScreen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bg-white shadow-lg rounded-b-lg z-[4999] py-4 px-6"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {solutions.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.link}
                    className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={(e) => handleNavigation(e, solution.link)}
                  >
                    <div className="p-2 rounded-lg bg-[#494BF2]/5">
                      <solution.icon className="w-5 h-5 text-[#494BF2]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-900">
                        {solution.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {solution.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              {navItems.slice(1, 3).map((navItem, idx) => (
                <Link
                  key={`mobile-nav-item-${idx}`}
                  href={navItem.link}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-[#494BF2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
