import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          // Once it intersects, we can stop observing it
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={
          hasIntersected
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: yOffset }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Premium ease-out expo curve for ultra-smooth movement
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
