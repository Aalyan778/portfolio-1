/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={hoverEffect ? { y: -4, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)" } : undefined}
      className={`bg-navy border border-border-subtle rounded-2xl p-8 text-text-light transition-shadow duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};
