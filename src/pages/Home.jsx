import React from "react";
import profileImg from "../assets/jayaprakash.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center py-20 lg:py-32"
      data-aos="fade-up"
    >
      <div className="w-full rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-2xl transition-all duration-500 hover:shadow-sky-500/10 dark:border-slate-800/80 dark:bg-slate-900/70 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-bold tracking-widest text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
                BACKEND ARCHITECT
              </span>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Turning complex problems into <span className="text-sky-500">scalable</span> solutions.
              </h1>
              <p className="mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-400 lg:mx-0 lg:text-xl">
                Expertise in microservices, cloud architecture, and modern backend technologies to build high-performance systems.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#contact" className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-sky-500 hover:shadow-sky-500/30 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400">
                Let's Talk
              </a>
              <a href="#projects" className="rounded-2xl border border-slate-200 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800/50">
                View Projects
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-700 hover:scale-105 dark:border-slate-800 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <img
                  src={profileImg}
                  alt="Jayaprakash"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:rotate-3 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
