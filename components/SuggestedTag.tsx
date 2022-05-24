import { useState } from "react";

const SuggestedTag = () => {
  const [color, setColor] = useState("#2E2F30");

  const switchColors = () => {
    if (color == "#76d0a3") {
      setColor("#2E2F30");
    } else {
      setColor("#76d0a3");
    }
  };
  return (
    <div
      onClick={switchColors}
      className={`w-max p-3 flex items-center justify-center bg-[${color}] shadow-[#242727a2]   shadow-lg rounded-xl`}
    >
      <span
        className={
          color == "#76d0a3"
            ? `select-none text-black`
            : `select-none text-[#919090]`
        }
      >
        #javascript
      </span>
    </div>
  );
};

export default SuggestedTag;
