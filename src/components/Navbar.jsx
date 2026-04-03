import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled 
          ? "border-b border-white/10 bg-white/70 py-3 shadow-lg backdrop-blur-md dark:bg-slate-950/70" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="group relative flex items-center gap-2 text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white"
        >
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-sky-500 transition-all duration-500">
            JAYAPRAKSH
          </span>
          <div className="absolute -bottom-1 left-0 h-1 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative py-1 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transition-all duration-300 hover:bg-sky-500 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-sky-400 dark:hover:text-slate-900"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="rounded-xl p-4 text-lg font-bold uppercase tracking-widest text-slate-700 hover:bg-slate-100 hover:text-sky-500 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-sky-400 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
