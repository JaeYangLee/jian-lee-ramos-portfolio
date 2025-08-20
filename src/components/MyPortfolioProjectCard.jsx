import React from "react";

function MyPortfolioProjectCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-start justify-center h-full border rounded-2xl w-70 md:w-100 text-[#31302D] shadow-lg shadow-black/30">
          <header className="flex flex-row items-center gap-8 p-4">
            <img
              src="public/assets/plantitotitaLogo.svg"
              alt="Project Icon"
              width="68"
              className="p-4 border rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold font-antonio">PLANTITOTITA</h1>
              <h2 className="font-mono text-xs truncate w-36 md:w-48">
                Mobile Application
              </h2>
            </div>
          </header>
          <hr className="w-full my-2" />
          <main className="p-4 py-2 font-mono">
            <h2 className="text-lg font-semibold font-antonio">
              KEY FEATURES:
            </h2>
            <ul className="flex flex-col justify-center gap-4 py-2 font-mono">
              <li className="p-2 text-xs border rounded-lg">
                Augmented Reality Plant Recognition with detailed botanical
                Information.
              </li>
              <li className="p-2 text-xs border rounded-lg">
                Augmented Reality Disease diagnosis with detailed botanical
                Information.
              </li>
              <li className="p-2 text-xs border rounded-lg">
                Informative Plant Care and Medical Guide.
              </li>
              <li className="p-2 text-xs border rounded-lg"></li>
            </ul>
          </main>
          <hr className="w-full my-2" />
          <section className="p-4 py-2 font-mono">
            <h2 className="text-lg font-semibold font-antonio">TECH STACK:</h2>
            <ul className="grid grid-cols-3 grid-rows-2 gap-2 py-4 justify">
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg">
                Java
              </li>
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg">
                Android Studio
              </li>
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg">
                Firebase
              </li>
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg">
                Figma
              </li>
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg"></li>
              <li className="flex items-center justify-center p-2 text-xs text-center border rounded-lg"></li>
            </ul>
          </section>
          <section className="flex flex-col items-center justify-center w-full gap-2 p-4 font-mono">
            <button className="flex flex-row items-center justify-center w-full gap-2 px-4 py-2 text-xs border rounded-2xl bg-[#C6BF8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              View on GitHub
            </button>
            <button className="flex flex-row items-center justify-center w-full gap-2 px-4 py-2 text-xs border rounded-2xl bg-[#C6BF8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
              Live Demo
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default MyPortfolioProjectCard;
