import React from "react";

import reactLogo from "./../../images/react.png";
import reduxLogo from "./../../images/redux.png";
import reactNativeLogo from "./../../images/react-native.png";
import javascriptLogo from "./../../images/javascript.png";
import typescriptLogo from "./../../images/typescript.png";

import { StaticImage } from "gatsby-plugin-image";

const JsTechCircle = () => {
  return (
    <section className="relative w-min">
      <div className="animate-rotate relative items-center justify-center h-[25rem] w-[25rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
        <div className="absolute animate-rotate-back -top-[10%] left-[10%] h-[8rem] w-[8rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <StaticImage
            src="./../../images/react.png"
            alt="react logo"
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="absolute animate-rotate-back top-[10%] left-[80%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <StaticImage
            src="./../../images/typescript.png"
            alt="typescript logo"
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="absolute animate-rotate-back top-[70%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full ">
          <StaticImage
            src="./../../images/react-native.png"
            alt="react-native logo"
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="absolute animate-rotate-back top-[75%] left-[70%] h-[6rem] w-[6rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <StaticImage
            src="./../../images/redux.png"
            alt="redux logo"
            className=" drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute h-[8rem] w-[8rem] bg-[#f9f9f9] dark:bg-white shadow-md rounded-full p-6 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <StaticImage src="./../../images/javascript.png" alt="tailwind logo" />
      </div>
    </section>
  );
};

export default JsTechCircle;
