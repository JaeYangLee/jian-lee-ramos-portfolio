import React from "react";
import MyPortfolioProjectCard from "../components/MyPortfolioProjectCard";
import MyPortfolioCarousel from "../components/MyPortfolioCarousel";
import { img } from "motion/react-client";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="w-full h-full bg-[#F9EEE8]">
        <header className="flex flex-col gap-4 p-4 pt-12 md:px-12">
          <h1 className="text-3xl font-bold text-center md:text-left font-antonio text-[#31302D]">
            MY SOFTWARE DEVELOPMENT PROJECTS
          </h1>
          <h3 className="hidden font-mono text-xs text-left md:flex text-[#31302D]">
            “As a Computer Science graduate, here are some of the projects where
            I got to bring my ideas to life, apply what I’ve learned, and have
            fun building along the way!”
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
