import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Telugu Cinema",
    "Movies",
    "Music",
    "News",
    "Podcasts",
    "Roasts",
    "Mixtures",
    "Self-Confidence",
    "Thoughts",
    "Motivation",
  ];

  return (
    <div className="w-full ">
      <ul className="flex flex-nowrap gap-3 px-2 py-2">
        {buttonList.map((button, index) => (
          <li key={index} className="whitespace-nowrap">
            <Button name={button} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
