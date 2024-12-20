/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatdelay?: number;
}

const colors = ["#EB734C", "#BC1199", "#7729D4", "#F24D97"];

export function AnimatedGridPattern({
  width = 32,
  height = 32,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 78,
  className,
  maxOpacity = 0.5,
  duration = 4,
  //   repeatdelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<
    Array<{ id: number; pos: [number, number]; color: string }>
  >([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(
        generateSquares(numSquares, dimensions.width, dimensions.height)
      );
    }
  }, [dimensions, numSquares]);

  function getPos(
    containerWidth: number,
    containerHeight: number
  ): [number, number] {
    return [
      Math.floor(Math.random() * (containerWidth / width)),
      Math.floor(Math.random() * (containerHeight / height)),
    ];
  }

  function generateSquares(
    count: number,
    containerWidth: number,
    containerHeight: number
  ) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(containerWidth, containerHeight),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(dimensions.width, dimensions.height),
              color: colors[Math.floor(Math.random() * colors.length)],
            }
          : sq
      )
    );
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        <AnimatePresence>
          {squares.map(({ pos: [x, y], id, color }, index) => (
            <motion.rect
              key={`${id}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              exit={{ opacity: 0 }}
              transition={{
                duration,
                repeat: Infinity,
                delay: index * 0.1,
                repeatType: "reverse",
              }}
              onAnimationComplete={() => updateSquarePosition(id)}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
              fill={color}
              strokeWidth="0"
              style={{ mixBlendMode: "soft-light" }}
            />
          ))}
        </AnimatePresence>
      </svg>
    </svg>
  );
}
