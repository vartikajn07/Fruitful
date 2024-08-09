import React, { useRef, useState } from "react";
import gsap from "gsap";
import Guidesphoto1 from "../assets/Guidesphoto1.jpeg";
import Guidesphoto2 from "../assets/Guidesphoto2.jpeg";

import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

const Guides = () => {
  return (
    <div className="flex flex-col w-full gap-8  sm:min-h-[70vh] lg:flex-row sm:items-center sm:pb-10 sm:px-24 px-7 ">
      <div className="relative pointer-events-none lg:w-1/2 lg:h-1/2 sm:h-1/2 lg:pointer-events-auto">
        <img
          className="relative cursor-pointer rounded-2xl"
          src={Guidesphoto1}
          alt=""
        ></img>

        <h1 className="lg:absolute lg:top-[25rem]  lg:text-white lg:left-6 sm:text-[30px] lg:text-[35px] text-[20px] sm:font-medium lg:font-semibold">
          Your partner in progress
        </h1>
      </div>

      <div className="relative cursor-pointer pointer-events-none lg:pointer-events-auto lg:w-1/2 lg:h-1/2 sm:h-1/2">
        <img
          className="relative cursor-pointer rounded-2xl"
          src={Guidesphoto2}
          alt=""
        />
        <h1 className="lg:absolute lg:top-[25rem] lg:text-white lg:left-6 sm:text-[30px]  lg:text-[35px] text-[20px] sm:font-medium lg:font-semibold">
          Your place for piece of mind
        </h1>
      </div>
    </div>
  );
};

export default Guides;
