/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-border-subtle pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center bg-maroon text-gold">
                <span className="font-serif text-xs font-semibold text-gold">AM</span>
              </div>
              <span className="font-serif text-lg font-medium text-text-light tracking-wide">
                AM Agency
              </span>
            </div>
            <p className="font-sans text-sm text-text-muted max-w-sm leading-relaxed font-light">
              Building intelligent digital experiences for modern businesses. Combining state-of-the-art AI architecture with flawless, custom design.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Capabilities", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-sans text-sm text-text-muted hover:text-gold transition-colors duration-300 font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-4">
              Social
            </h4>
            <ul className="space-y-4">
              {[
                { label: "LinkedIn", detail: "Aalyan Mukhtar", href: "https://www.linkedin.com" },
                { label: "Instagram", detail: "@am_agency26", href: "https://www.instagram.com/am_agency26" },
                { label: "WhatsApp", detail: "+92 315 2548432", href: "https://wa.me/923152548432" },
                { label: "Email", detail: "aalyanmukhtar1@gmail.com", href: "mailto:aalyanmukhtar1@gmail.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <span className="font-sans text-sm text-text-muted hover:text-gold transition-colors duration-300 font-light block">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-text-muted/60 hover:text-gold/80 transition-colors duration-300 block">
                      {item.detail}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-text-muted font-light">
            &copy; {currentYear} AM Agency. Designed and engineered by Aalyan Mukhtar. All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wider text-text-light hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
