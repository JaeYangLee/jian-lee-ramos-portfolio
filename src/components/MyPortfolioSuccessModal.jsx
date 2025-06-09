import React, { useState } from "react";
import * as motion from "motion/react-client";

function MyPortfolioSuccessModal({
  isSuccessCopyModalOpen,
  onSuccessCopyModalClose,
}) {
  if (!isSuccessCopyModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 z-50 flex flex-col items-center justify-center w-screen min-h-screen bg-black/50"
        onClick={onSuccessCopyModalClose}
      >
        <motion.div
          className="w-64 h-24 p-8 flex flex-col justify-center items-center gap-4 border border-transparent rounded-2xl bg-[#F9EEE8] font-mono shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
          }}
        >
          <h3 className="text-xs">Email copied to clipboard!</h3>
          <button
            className="text-xs bg-[#C6BF8B] p-2 border border-transparent rounded-lg active:bg-[#9a935f] active:text-[#F9EEE8]"
            onClick={onSuccessCopyModalClose}
          >
            Close
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default MyPortfolioSuccessModal;
