import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-4">
        <ButtonList />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
