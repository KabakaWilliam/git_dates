import React from "react";
import LanguageBubble from "./LanguageBubble";

const UserCard = () => {
  return (
    <div className="w-[300px] h-[400px] snap-y overflow-y-auto snap-mandatory md:w-[400px] md:h-[500px] bg-[#222324]  cursor-pointer shadow-[#131414]  shadow-lg rounded-xl">
      <div className="snap-start w-[100%] h-[100%] -green-500 rounded-t-xl  ">
        <div className="h-[80%] w-[100%]  "></div>
        <div className="h-[20%] w-[100%]  flex flex-wrap items-center justify-start gap-x-3 pl-2">
          <LanguageBubble language="Python" match={true} />
          <LanguageBubble language="Typescript" match={false} />
          <LanguageBubble language="Rust" match={true} />
        </div>
      </div>
      <div className="snap-start w-[100%] h-[100%] -red-500 "></div>
      <div className="snap-start w-[100%] h-[100%] -purple-500 "></div>
      <div className="snap-start w-[100%] h-[100%] -yellow-500 "></div>
    </div>
  );
};

export default UserCard;
