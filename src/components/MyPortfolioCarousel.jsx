import React from "react";
import MyPortfolioProjectCard from "./MyPortfolioProjectCard";

function MyPortfolioCarousel() {
  return (
    <>
      <main className="w-full h-full carousel">
        <div
          id="slide1"
          className="relative flex flex-col items-center justify-center w-full gap-8 md:flex-row carousel-item"
        >
          <MyPortfolioProjectCard
            projectImage={"public/assets/plantitotitaLogo.svg"}
            projectTitle={"PLANTITOTITA"}
            projectDescription={"Mobile Application"}
            keyFeatures1={"AR Plant Recognition with detailed botanical Info."}
            keyFeatures2={
              "AR Plant Disease diagnosis with detailed botanical Info."
            }
            keyFeatures3={"Informative Plant Care and Medical Guide."}
            techStack1={"Java"}
            techStack2={"Android Studio"}
            techStack3={"Firebase"}
            techStack4={"Figma"}
          />
          <div className="bottom-0 flex flex-row items-center justify-between gap-8 pt-8 transform -translate-y-1/2 md:justify-center md:top-1/2 md:absolute md:gap-120 left-5 right-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide2")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="bg-transparent btn btn-circle text-[#31302D]"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide2")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="bg-transparent btn btn-circle text-[#31302D]"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="relative flex flex-col items-center justify-center w-full gap-8 md:flex-row carousel-item"
        >
          <MyPortfolioProjectCard
            projectImage={"public/assets/CGISLogo.png"}
            projectTitle={"Philippine Coast Guard IMS"}
            projectDescription={"IMS Web Application"}
            keyFeatures1={"Inventory Report Generation."}
            keyFeatures2={"Inventory Logs & History."}
            keyFeatures3={"Search and Filter Options."}
            keyFeatures4={"User Authentication and Roles."}
            techStack1={"React js"}
            techStack2={"Node js"}
            techStack3={"Express js"}
            techStack4={"TailwindCSS"}
            techStack5={"SQL"}
            techStack6={"Figma"}
          />
          <div className="bottom-0 flex flex-row items-center justify-between gap-8 pt-8 transform -translate-y-1/2 md:justify-center md:top-1/2 md:absolute md:gap-120 left-5 right-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide1")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="bg-transparent btn btn-circle text-[#31302D]"
            >
              ❮
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide1")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="bg-transparent btn btn-circle text-[#31302D]"
            >
              ❯
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyPortfolioCarousel;
