"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { usePathname } from "next/navigation";

interface LocomotiveScrollContextType {
  scroll: LocomotiveScroll | null;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType>({
  scroll: null,
});

export function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.destroy();
      scrollRef.current = null;
    }

    const initScroll = () => {
      scrollRef.current = new LocomotiveScroll({});
    };

    // Small delay to ensure DOM is ready
    setTimeout(initScroll, 100);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, [pathname]); // Reinitialize on route change

  return (
    <LocomotiveScrollContext.Provider value={{ scroll: scrollRef.current }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);
