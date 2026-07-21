/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "text";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center font-sans text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none rounded-full px-6 py-3 cursor-pointer overflow-hidden";
  
  const variants = {
    primary: "bg-maroon text-text-light hover:bg-maroon-hover border border-maroon",
    secondary: "bg-transparent text-text-light border border-border-subtle hover:border-maroon hover:bg-maroon-light",
    gold: "bg-gold text-navy-dark font-medium hover:bg-maroon hover:text-text-light border border-gold hover:border-maroon",
    text: "bg-transparent text-text-muted px-3 py-2 hover:text-maroon rounded-none"
  };

  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
