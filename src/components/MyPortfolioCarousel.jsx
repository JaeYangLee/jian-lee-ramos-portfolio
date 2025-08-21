import React from "react";
import MyPortfolioProjectCard from "./MyPortfolioProjectCard";

function MyPortfolioCarousel() {
  return (
    <>
      <main className="carousel w-full h-full">
        <div
          id="slide1"
          className="carousel-item relative w-full  flex items-center justify-center"
        >
          <MyPortfolioProjectCard />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("slide4")
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
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <MyPortfolioProjectCard />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
                  .getElementById("slide3")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="hidden btn btn-circle"
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
