import React from "react";
import Image1Img from "../../assets/image 1.png";

function Dsc() {
  const Config = {
    line1: "Digital Strategy Consulting",
    line2:
      "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
  };
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start h-[276px] px-3 ">
      <div className="sm:text-center h-[187px] w-full flex flex-col justify-between">
        <div>
          <h1 className="flex flex-row xl:h-[33px] lg:h-[33px] h-[66px] text-bluish-purle font-poppins text-[27px] font-semibold	text-center leading-[33px]	tracking-[0.4px]">
            <br></br>
            {Config.line1}
          </h1>
          <p className="font-inter xl:h-[76px] lg:h-[76px] md:h-[95px] h-[133px] text-[16px] font-normal pl-2 sm:text-left text-center leading-[19.36px]">
            <br></br>
            {Config.line2}
          </p>
        </div>
        <br></br>
        <div className="text-left">
          <button className="px-5 py-3 rounded bg-orange text-white uppercase font-bold leading-[14px] text-sm tracking-wide">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <img src={Image1Img} className="w-full h-auto" />
      </div>
    </div>
  );
}
export default Dsc;
