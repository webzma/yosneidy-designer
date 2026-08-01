"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Full-bleed image that drifts against the scroll direction while its frame
 * crosses the viewport. The moving layer is 20% taller than the frame so the
 * drift never exposes an edge. `children` render above the image (scrims,
 * captions) and do not drift.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  priority,
  children,
}: {
  src: string;
  alt: string;
  sizes: string;
  /** Frame classes — height and width live here. */
  className?: string;
  /** Extra classes for the <Image> (object-position, hover effects). */
  imageClassName?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  /* ±8% of the layer's own height stays inside the 10% overflow on each side. */
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute -inset-y-[10%] inset-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </motion.div>
      {children}
    </div>
  );
}
