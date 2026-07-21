/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-navy-dark/90 backdrop-blur-md border-border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: AM Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-maroon text-gold transition-colors duration-500 group-hover:border-gold">
              {/* Gold Monogram Overlay */}
              <span className="font-serif text-lg font-semibold tracking-tighter text-gold">
                AM
              </span>
              <motion.div
                className="absolute inset-0 rounded-full border border-gold"
                initial={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="font-serif text-lg font-medium text-text-light tracking-wide hidden sm:inline-block">
              AM Agency
            </span>
          </a>

          {/* Center: Navigation Menu */}
          <div className="hidden md:flex items-center gap-8 bg-navy-dark/40 backdrop-blur-md border border-gold/20 rounded-full px-8 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative font-sans text-xs font-medium uppercase tracking-widest text-text-muted hover:text-text-light transition-colors duration-300 py-1.5"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Action Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              onClick={() => handleNavClick("#contact")}
              className="group shadow-[0_4px_20px_rgba(128,0,32,0.15)]"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-text-light focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 md:hidden bg-navy-dark/95 backdrop-blur-md flex flex-col justify-between p-8 border-t border-border-subtle"
          >
            <div className="flex flex-col gap-6 pt-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left font-serif text-3xl font-light tracking-wide py-2 flex items-center justify-between ${
                      isActive ? "text-gold" : "text-text-light"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold" />}
                  </button>
                );
              })}
            </div>

            <div className="pb-12">
              <Button
                variant="primary"
                onClick={() => handleNavClick("#contact")}
                className="w-full text-center py-4 text-base shadow-[0_4px_20px_rgba(128,0,32,0.15)]"
              >
                Let's Talk
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
