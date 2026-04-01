import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="flex min-h-screen items-center py-20" data-aos="fade-up">
      <div className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-lg transition-colors duration-500 dark:border-slate-800/80 dark:bg-slate-900/70">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Skills
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Design systems, Tailwind CSS, responsive layouts, animation, accessibility, testing.
        </p>
      </div>
    </section>
  );
};

export default Skills;
