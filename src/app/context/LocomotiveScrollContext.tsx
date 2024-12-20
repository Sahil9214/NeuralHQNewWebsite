"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

  useEffect(() => {
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll: scrollRef.current }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

export const useLocomotiveScroll = () => {
  return useContext(LocomotiveScrollContext);
};
