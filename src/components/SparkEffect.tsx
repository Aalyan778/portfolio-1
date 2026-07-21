import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  scale: number;
  color: string;
}

export function SparkEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't fire if clicked on standard hidden layers
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Generate 12-16 custom particles for a satisfying golden spark burst
      const particleCount = 12 + Math.floor(Math.random() * 6);
      const newSparks: Spark[] = [];

      for (let i = 0; i < particleCount; i++) {
        // Random angle around 360 degrees
        const angle = Math.random() * Math.PI * 2;
        // Natural physical dispersion distance
        const distance = 30 + Math.random() * 80;
        // Varied scaling for depth
        const scale = 0.3 + Math.random() * 1.1;
        // Premium gold spectrum palette matching the logo & identity
        const goldColors = [
          "#D4AF37", // Classic Gold
          "#F3E5AB", // Pale Yellow Gold
          "#FFDF00", // Bright Gold
          "#AA7C11", // Darker Rich Gold
          "#F5E050", // Light Gold Spark
        ];
        const color = goldColors[Math.floor(Math.random() * goldColors.length)];

        newSparks.push({
          id: Date.now() + Math.random() * 1000,
          x: clickX,
          y: clickY,
          angle,
          distance,
          scale,
          color,
        });
      }

      setSparks((prev) => [...prev, ...newSparks].slice(-100)); // Limit active sparks in queue
    };

    window.addEventListener("mousedown", handleGlobalClick);
    return () => {
      window.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {sparks.map((spark) => {
          const targetX = Math.cos(spark.angle) * spark.distance;
          const targetY = Math.sin(spark.angle) * spark.distance;

          return (
            <motion.div
              key={spark.id}
              initial={{
                x: spark.x,
                y: spark.y,
                scale: spark.scale,
                opacity: 1,
              }}
              animate={{
                x: spark.x + targetX,
                y: spark.y + targetY,
                scale: 0,
                opacity: 0,
                rotate: Math.random() > 0.5 ? 240 : -240,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5 + Math.random() * 0.4,
                ease: [0.1, 0.8, 0.25, 1], // Realistic rapid deceleration physics
              }}
              onAnimationComplete={() => {
                setSparks((prev) => prev.filter((s) => s.id !== spark.id));
              }}
              className="absolute w-3.5 h-3.5 flex items-center justify-center"
              style={{
                marginLeft: "-7px",
                marginTop: "-7px",
              }}
            >
              {/* Hand-crafted 4-point spark vectors */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: spark.color }}
              >
                <path
                  d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
                  fill="currentColor"
                  className="drop-shadow-[0_0_3px_rgba(212,175,55,0.7)]"
                />
              </svg>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
