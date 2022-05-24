import { useState } from "react";

const SuggestedTag = () => {
  const [color, setColor] = useState("#2E2F30");

  const switchColors = (e: any) => {
    console.log("clicked");
    e.stopPropagation();
    if (color == "#76d0a3") {
      setColor("#2E2F30");
    } else {
      setColor("#76d0a3");
    }
  };
  return (
    <div
      onClick={(e) => switchColors(e)}
      className={
        color == "#76d0a3"
          ? `w-max p-3 flex items-center justify-center bg-[#76d0a3] shadow-[#242727a2]   shadow-lg rounded-xl`
          : `w-max p-3 flex items-center justify-center bg-[#2E2F30] shadow-[#242727a2]   shadow-lg rounded-xl`
      }
    >
      <span className={color == "#76d0a3" ? ` text-black` : ` text-[#919090]`}>
        #javascript
      </span>
    </div>
  );
};

export default SuggestedTag;
