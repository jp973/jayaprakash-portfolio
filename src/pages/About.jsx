import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg transition-colors duration-500 dark:border-slate-800/80 dark:bg-slate-900/70"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        About Me
      </h2>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
        Curious engineer obsessed with clarity, motion, and writing reusable UI components.
      </p>
    </section>
  );
};

export default About;
