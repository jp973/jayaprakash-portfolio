import React from "react";
import profileImg from "../assets/jayaprakash.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center py-20"
      data-aos="fade-up"
    >
      <div className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-lg transition-colors duration-500 dark:border-slate-800/80 dark:bg-slate-900/70">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl leading-tight">
            Turning complex problems into scalable backend solutions using microservices and modern
            backend technologies.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-slate-300 bg-slate-50 shadow-xl transition-colors duration-500 dark:border-slate-700 dark:bg-slate-800">
            <img
              src={profileImg}
              alt="Jayaprakash"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
