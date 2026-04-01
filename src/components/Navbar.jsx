const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
          JAYAPRAKSH
        </span>
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-slate-700 transition-colors duration-300 dark:text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleDarkMode}
          className="rounded-full border border-slate-300/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 transition-colors duration-300 hover:border-slate-500 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-slate-50"
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
