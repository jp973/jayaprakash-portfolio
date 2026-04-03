import React from "react";

const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center py-24" data-aos="fade-up">
      <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-8 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 dark:border-slate-800/80 dark:bg-slate-900/70 lg:p-16">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-400/5 transition-opacity duration-700" />
        
        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white lg:text-5xl">
              About <span className="text-indigo-500">Me</span>
            </h2>
            <div className="h-1.5 w-20 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20">
              <div className="h-full w-1/2 rounded-full bg-indigo-500" />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
              I am a passionate <span className="text-indigo-500 dark:text-indigo-400">Backend Architect</span> devoted to building clarity and performance into every microservice.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              With a deep obsession for clean code and scalable architecture, I help businesses transform complex legacy systems into modern, reactive, and future-proof backend solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
