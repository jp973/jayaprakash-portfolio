import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="flex min-h-screen items-center py-24" data-aos="fade-up">
      <div className="w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white lg:text-5xl">
            Technical <span className="text-sky-500">Expertise</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A comprehensive stack focused on performance, security, and scalability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Backend Systems", desc: "Microservices design using Node.js, Go, and scalable Cloud Infrastructure.", color: "sky" },
            { title: "Distributed SQL", desc: "Deep knowledge of PostgreSQL, Redis, and high-availability database clusters.", color: "indigo" },
            { title: "API Architecture", desc: "Building secure GraphQL and RESTful APIs with strict performance metrics.", color: "blue" },
            { title: "DevOps & CI/CD", desc: "Automated deployment pipelines and container orchestration with K8s.", color: "sky" },
            { title: "Testing & QA", desc: "Unit testing, integration testing, and automated performance profiling.", color: "indigo" },
            { title: "Design Systems", desc: "Crafting reusable UI components with React and Tailwind CSS.", color: "blue" },
          ].map((skill, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 dark:border-slate-800/80 dark:bg-slate-900/50"
            >
              <div className={`absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-${skill.color}-500/5 blur-2xl group-hover:bg-${skill.color}-500/10 transition-colors duration-500`} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
