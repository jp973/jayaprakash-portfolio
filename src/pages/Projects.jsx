import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen items-center py-24" data-aos="fade-up">
      <div className="w-full space-y-16">
        <div className="inline-flex flex-col space-y-4">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white lg:text-5xl">
            Selected <span className="text-sky-500">Works</span>
          </h2>
          <div className="h-2 w-32 rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full w-1/2 rounded-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {[
            { title: "MMLite Integration", desc: "Automated onboarding flow for Marketing Messages Lite using Meta Graph API.", tags: ["Node.js", "Meta API", "Microservices"] },
            { title: "Portfolio 2.0", desc: "High-performance React portfolio with framer-motion animations and Tailwind CSS.", tags: ["React", "Tailwind", "AOS"] },
          ].map((project, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-start space-y-6 rounded-[2.5rem] border border-slate-200/80 bg-white/50 p-8 transition-all duration-500 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 dark:border-slate-800/80 dark:bg-slate-900/50 lg:p-12"
            >
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors duration-500 group-hover:bg-sky-500 group-hover:text-white dark:bg-slate-800 dark:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-400">{tag}</span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
