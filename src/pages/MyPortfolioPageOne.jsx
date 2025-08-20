import React, { useState } from "react";
import MyPortfolioSuccessModal from "../components/MyPortfolioSuccessModal";

function MyPortfolioPageOne() {
  const [isSuccessCopyModalOpen, setSuccessCopyModalOpen] = useState(false);

  const handleGitHubClick = () => {
    window.open("https://github.com/JaeYangLee");
  };
  const handleEmailCopyClick = () => {
    navigator.clipboard.writeText("ramosjianlee@gmail.com");
    setSuccessCopyModalOpen(true);
  };
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/jlanl33?utm_source=ig_web_button_share_sheet&igsh=cXNod2Z3NWkxY2Rh"
    );
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#31302D]">
        <div className="flex flex-col items-center gap-2 font-bold md:items-start font-antonio">
          <h1 className="text-5xl select-none md:text-7xl lg:text-8xl xl:text-9xl text-[#C6BF8B]">
            JIAN LEE RAMOS
          </h1>
          <div className="flex flex-col md:gap-4 lg:gap-4 md:flex-row lg:flex-row">
            <div className="flex flex-col items-center md:items-start md:gap-48 lg:gap-64 xl:gap-76">
              <h2 className="mt-1 text-2xl select-none md:text-4xl lg:text-5xl xl:text-6xl text-[#F9EEE8]">
                FRONTEND DEVELOPER
              </h2>
              <div className="flex flex-row items-start gap-4 xl:gap-8"></div>
            </div>
            <img
              src="assets/JianImage.png"
              alt="Jian Lee Image"
              className="m-2 object-contain w-48 md:w-60 lg:w-76 xl:w-92 border border-transparent rounded-2xl shadow-[10px_10px_0px_0px_rgba(198,191,139,0.75)]"
            />
          </div>
        </div>
      </div>

      <MyPortfolioSuccessModal
        isSuccessCopyModalOpen={isSuccessCopyModalOpen}
        onSuccessCopyModalClose={() => setSuccessCopyModalOpen(false)}
      />
    </>
  );
}

export default MyPortfolioPageOne;
