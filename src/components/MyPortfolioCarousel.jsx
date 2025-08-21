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
          <MyPortfolioProjectCard />
          <div className="bottom-0 flex flex-row items-center justify-between gap-8 pt-8 transform -translate-y-1/2 md:justify-center md:top-1/2 md:absolute md:gap-120 left-5 right-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide2")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="btn btn-circle"
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
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="relative flex flex-col items-center justify-center w-full gap-8 md:flex-row carousel-item"
        >
          <MyPortfolioProjectCard />
          <div className="bottom-0 flex flex-row items-center justify-between gap-8 pt-8 transform -translate-y-1/2 md:justify-center md:top-1/2 md:absolute md:gap-120 left-5 right-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide1")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="btn btn-circle"
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
              className="btn btn-circle"
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
