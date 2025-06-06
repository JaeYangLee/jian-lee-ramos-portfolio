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
}) {
  return (
    <>
      <div className="border rounded-2xl w-[232px] h-[412px] md:w-[444px] md:h-[488px]">
        <div className="flex flex-row items-center justify-start gap-2 p-4 border-b">
          <div className="m-2">
            <img src={projectLogo} alt="Project Logo" className="w-16" />
          </div>
          <div className="">
            <h1 className="text-lg">{projectName}</h1>
            <h2 className="font-mono text-[8px]">{projectDescription}</h2>
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
          <h1 className="text-xs md:text-lg">TECH STACK:</h1>
          <ul className="flex flex-row gap-4 font-mono text-[8px] md:text-xs">
            <li>{techStackOne}</li>
            <li>{techStackTwo}</li>
            <li>{techStackThree}</li>
            <li>{techStackFour}</li>
            <li>{techStackFive}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailCard;
