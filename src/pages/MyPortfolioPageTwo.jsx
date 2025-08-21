import React from "react";
import MyPortfolioProjectCard from "../components/MyPortfolioProjectCard";
import MyPortfolioCarousel from "../components/MyPortfolioCarousel";
import { img } from "motion/react-client";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="w-full h-full bg-[#F9EEE8]">
        <header className="flex flex-col gap-4 p-8 pt-12 md:px-24 lg:px-36 xl:px-68">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left font-antonio text-[#31302D]">
            MY SOFTWARE DEVELOPMENT PROJECTS
          </h1>
          <h3 className="hidden font-mono text-xs lg:text-sm xl:text-lg text-justify md:flex text-[#31302D] lg:pr-40">
            As a Computer Science graduate, here are some of the projects where
            I got to bring my ideas to life, apply what I’ve learned, and have
            fun building along the way!
          </h3>
        </header>
        <main className="py-4">
          <MyPortfolioCarousel />
        </main>
      </div>
    </>
  );
}

export default MyPortfolioPageTwo;
