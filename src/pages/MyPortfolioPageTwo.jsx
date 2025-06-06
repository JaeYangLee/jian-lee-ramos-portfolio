import React from "react";
import ProjectDetailCard from "../components/ProjectDetailCard";

function MyPortfolioPageTwo() {
  return (
    <>
      <div className="p-8 flex flex-col justify-center items-center w-screen min-h-screen font-antonio bg-[#F9EEE8]">
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#31302D]">
            MY PROJECTS
          </h1>
          <h3 className="font-mono text-xs text-center text-[#31302D]">
            Some of the most interesting projects that I've made.
          </h3>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row xl:flex-row">
          <ProjectDetailCard
            projectLogo="assets/plantitotitaLogo.svg"
            projectName="PLANTITOTITA"
            projectDescription="A plant scanning mobile application."
            featureOne="‣ Augmented Reality Plant Recognition with detailed botanical Information."
            featureTwo="‣ Augmented Reality Disease diagnosis with detailed botanical Information."
            featureThree="‣ Informative Plant Care and Medical Guide."
            techStackOne="• JAVA"
            techStackTwo="• Android Studio"
            techStackThree="• Figma"
            projectLink="https://github.com/JaeYangLee/PLANTITOTITA"
          />
          <ProjectDetailCard
            projectLogo="assets/CGISLogo.png"
            projectName="CGWCEISC INVENTORY SYSTEM"
            projectDescription="A web based inventory management system for PCG’s Storage and Accountability Officer."
            featureOne="‣ User Authentication and Roles."
            featureTwo="‣ Real-Time Inventory Tracking."
            featureThree="‣ Item Management."
            featureFour="‣ Inventory Logs & History."
            featureFive="‣ Search and Filter Options."
            featureSix="‣ Inventory Reports Generation."
            techStackOne="• React"
            techStackTwo="• TailwindCSS"
            techStackFour="• Figma"
            techStackThree="• MySQL"
            projectLink="https://github.com/JaeYangLee/pcg-inventory-system"
          />
        </div>
      </div>
    </>
  );
}

export default MyPortfolioPageTwo;
