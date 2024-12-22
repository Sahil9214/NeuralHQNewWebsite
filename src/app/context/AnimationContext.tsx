"use client";
import { createContext, useContext, useState } from "react";

interface AnimationContextType {
  isAnimating: boolean;
  setIsAnimating: (state: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  isAnimating: false,
  setIsAnimating: () => {},
});

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimation = () => useContext(AnimationContext);
