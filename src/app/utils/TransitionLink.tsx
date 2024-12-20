"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocomotiveScroll } from "../context/LocomotiveScrollContext";

interface TransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isTransitioning) return;

    setIsTransitioning(true);
    const body = document.querySelector("body");
    const background = document.createElement("div");
    background.className = "page-transition-background";
    document.body.appendChild(background);

    // Stop locomotive scroll
    if (scroll) {
      scroll.stop();
    }

    // Start transition
    body?.classList.add("page-transition-enter");
    background.classList.add("active");

    // Wait for background fade
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Navigate
    router.push(href);

    // Clean up transition elements
    setTimeout(() => {
      body?.classList.remove("page-transition-enter");
      background.classList.remove("active");

      // Restart locomotive scroll after transition
      if (scroll) {
        scroll.scrollTo(0, { duration: 0 });
      }

      setTimeout(() => {
        background.remove();
        setIsTransitioning(false);
      }, 600);
    }, 800);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
