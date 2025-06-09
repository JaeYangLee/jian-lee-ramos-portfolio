import React from "react";

function MyPortfolioSideBar() {
  return (
    <>
      <div className="w-[10px] md:w-[30px] lg:w-[40px] bg-[whitesmoke] min-h-screen">
        <div className="pt-4 pb-4 h-full flex flex-col items-center justify-center font-mono font-bold text-[8px] bg-[#C6BF8B]">
          <p>ジ</p>
          <p>ア</p>
          <p>ン</p>
          <br />
          <p>リ</p>
          <p>ー</p>
        </div>

        <div className="h-screen flex flex-col screen items-center justify-center font-mono font-bold text-[8px] border-l-[0.5px] border-[#F9EEE8] text-[#F9EEE8] bg-[#31302D]">
          <p>1</p>
          <p>4</p>
          <p>.</p>
          <p>8</p>
          <p>1</p>
          <p>4</p>
          <p>3</p>
          <p>°</p>
          <br />
          <p>N</p>
          <p>/</p>
          <br />
          <p>1</p>
          <p>2</p>
          <p>1</p>
          <p>.</p>
          <p>0</p>
          <p>7</p>
          <p>2</p>
          <p>5</p>
          <p>°</p>
          <br />
          <p>E</p>
          <br />
          <div className="fixed bottom-0 flex flex-col w-[10px] md:w-[30px] lg:w-[40px] h-[30px] xl:h-[38px] items-center justify-center font-mono font-bold text-[#31302D] text-[8px] md:text-xs lg:text-lg bg-[#F9EEE8]">
            <p>0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPortfolioSideBar;
