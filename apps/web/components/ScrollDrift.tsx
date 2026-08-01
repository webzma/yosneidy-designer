"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Slides its children vertically as they cross the viewport — the subtle
 * scroll-linked drift applied to section titles and the giant wordmarks.
 *
 * Disabled below the `sm` breakpoint: mobile spacing is tighter than the
 * drift distance, so there the effect overlapped neighbours (the hero
 * wordmark covered the availability pill, the footer's covered the credits).
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
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 47.99rem)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduce || isMobile) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
