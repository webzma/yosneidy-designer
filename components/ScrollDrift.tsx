"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Slides its children vertically as they cross the viewport — the subtle
 * scroll-linked drift applied to section titles and the giant wordmarks.
 */
export function ScrollDrift({
  children,
  className,
  distance = 30,
}: {
  children: React.ReactNode;
  className?: string;
  /** Pixels travelled from entering to leaving the viewport. */
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
