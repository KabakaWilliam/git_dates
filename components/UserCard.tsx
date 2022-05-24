import React, { useState } from "react";
import AddIcon from "./AddIcon";
import LanguageBubble from "./LanguageBubble";
import SuggestedTag from "./SuggestedTag";
import SuggestedTagContainer from "./SuggestedTagContainer";
import TextAreaContainer from "./TextAreaContainer";

const UserCard = () => {
  const [tags, setTags] = useState("");
  return (
    <div className="select-none w-[300px] h-[450px] snap-y overflow-y-auto snap-mandatory md:w-[400px] md:h-[500px] bg-[#222324]   shadow-[#131414]  shadow-lg rounded-xl">
      <div className="snap-start w-[100%] h-[100%] -green-500 rounded-t-xl  ">
        <div className="h-[20%] w-[100%] flex items-center justify-start  ">
          <div className="text-[#a1a6a7] text-md font-thin pl-5">
            24/06/2022
          </div>
        </div>
        <TextAreaContainer />
        <div className="h-[20%] w-[100%] flex flex-wrap items-center justify-start gap-x-3 pl-2 border-[#2c2c2c] border-t">
          {/* <LanguageBubble language="Python" match={true} />
          <LanguageBubble language="Typescript" match={false} />
          <LanguageBubble language="Rust" match={true} /> */}
          <AddIcon />
          <span className="text-[#4b4b4d]">add tag?</span>
          <SuggestedTagContainer />
        </div>
      </div>
      <div className="snap-start w-[100%] h-[100%] -red-500 "></div>
      <div className="snap-start w-[100%] h-[100%] -purple-500 "></div>
      <div className="snap-start w-[100%] h-[100%] -yellow-500 "></div>
    </div>
  );
};

export default UserCard;
