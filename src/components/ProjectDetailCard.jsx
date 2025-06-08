import React from "react";

function ProjectDetailCard({
  projectLogo,
  projectName,
  projectDescription,
  featureOne,
  featureTwo,
  featureThree,
  featureFour,
  featureFive,
  featureSix,
  techStackOne,
  techStackTwo,
  techStackThree,
  techStackFour,
  techStackFive,
  projectLink,
}) {
  const handleViewOnGitHubClick = () => {
    window.open(projectLink, "_blank");
  };
  return (
    <>
      <div className="border rounded-2xl min-w-[232px] min-h-[412px] md:w-[444px] md:h-[488px] shadow-xl">
        <div className="flex flex-row items-center justify-start gap-2 p-4 border-b">
          <div className="m-2">
            <img src={projectLogo} alt="Project Logo" className="w-16" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg md:text-3xl">{projectName}</h1>
            <h2 className="font-mono text-[8px] md:text-xs">
              {projectDescription}
            </h2>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 p-4 border-b">
          <h1 className="text-md md:text-lg">KEY FEATURES:</h1>
          <ul className="font-mono text-[8px] md:text-xs flex flex-col gap-4">
            <li>{featureOne}</li>
            <li>{featureTwo}</li>
            <li>{featureThree}</li>
            <li>{featureFour}</li>
            <li>{featureFive}</li>
            <li>{featureSix}</li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 p-4">
          <h1 className="text-md md:text-lg">TECH STACK:</h1>
          <ul className="flex flex-row gap-4 font-mono text-[8px] md:text-xs">
            <li>{techStackOne}</li>
            <li>{techStackTwo}</li>
            <li>{techStackThree}</li>
            <li>{techStackFour}</li>
            <li>{techStackFive}</li>
          </ul>
        </div>
        <div className="p-4 flex flex-col items-center gap-4 justify-center font-mono text-[8px] md:text-xs lg:flex-row">
          <button
            className="flex flex-row justify-center items-center gap-2 bg-[#C6BF8B] p-2 w-full border-transparent rounded-2xl transition-transform ease-in transform duration-300 hover:cursor-pointer hover:bg-[#a49e6d] active:bg-[#726c42] active:text-[#F9EEE8]"
            onClick={handleViewOnGitHubClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 0C22.375 0 0 22.9559 0 51.2695C0 73.9263 14.325 93.1396 34.1875 99.9114C36.6875 100.394 37.6042 98.8091 37.6042 97.4462C37.6042 96.2286 37.5625 93.0029 37.5417 88.7304C23.6333 91.8237 20.7 81.8517 20.7 81.8517C18.425 75.9344 15.1375 74.3536 15.1375 74.3536C10.6083 71.1749 15.4875 71.239 15.4875 71.239C20.5083 71.5978 23.1458 76.5197 23.1458 76.5197C27.6042 84.3597 34.85 82.0953 37.7083 80.7836C38.1583 77.4682 39.4458 75.2081 40.875 73.9263C29.7708 72.6446 18.1 68.2354 18.1 48.5907C18.1 42.9937 20.0375 38.4222 23.2458 34.8333C22.6833 33.5388 20.9958 28.3264 23.6833 21.264C23.6833 21.264 27.8708 19.8883 37.4333 26.5191C41.4333 25.3784 45.6833 24.8144 49.9333 24.7888C54.1833 24.8144 58.4333 25.3784 62.4333 26.5191C71.9333 19.8883 76.1208 21.264 76.1208 21.264C78.8083 28.3264 77.1208 33.5388 76.6208 34.8333C79.8083 38.4222 81.7458 42.9937 81.7458 48.5907C81.7458 68.2867 70.0583 72.6232 58.9333 73.8836C60.6833 75.4217 62.3083 78.5662 62.3083 83.3685C62.3083 90.23 62.2458 95.7415 62.2458 97.4078C62.2458 98.7536 63.1208 100.356 65.6833 99.8431C85.6875 93.1182 100 73.8922 100 51.2695C100 22.9559 77.6125 0 50 0Z" />
            </svg>
            View On GitHub
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailCard;
