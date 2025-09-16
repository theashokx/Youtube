import React from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { toggleVoicebtn } from "../utils/appSlice";

const MicPage = () => {
  const isVoiceBtn = useSelector((store) => store.app.isVoiceBtn);
  const dispatch = useDispatch();

  const handleCloseBtn = () => {
    dispatch(toggleVoicebtn());
  };

  return (
    isVoiceBtn && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-8 w-[32rem]  h-[24rem] text-center relative shadow-2xl">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={() => handleCloseBtn()}
          >
            <CloseIcon className="text-2xl" />
          </button>

          <h2 className="text-xl font-semibold mb-8">Listening...</h2>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-110">
              <KeyboardVoiceIcon className="text-gray-700 text-5xl" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MicPage;
