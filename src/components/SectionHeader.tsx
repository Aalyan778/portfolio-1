/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl mb-16 md:mb-24 ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {tag}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-light font-light leading-tight tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 font-sans text-lg text-text-muted leading-relaxed font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
