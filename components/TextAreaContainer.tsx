import { spawn } from "child_process";
import { useState } from "react";

const TextAreaContainer = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="relative h-[60%] w-[100%] text-5xl text-[#ffffff] p-5 font-bold shadow ">
      <form action="" className="w-[100%] h-[98%]">
        <textarea
          onChange={(e) => {
            e.preventDefault();
            setInputText(e.target.value);
          }}
          typeof="submit"
          placeholder="howdy, write a note here"
          className="bg-transparent  w-[100%] h-[100%] resize-none outline-none"
        />
      </form>
      <div className="w-[90%] flex justify-end  text-sm font-thin text-[#4b4b4d] absolute bottom-0 ">
        {/* {inputText.length}/250 characters */}
        {inputText.length == 0 ? (
          "0 characters"
        ) : (
          <span>{inputText.length}/250 characters</span>
        )}
      </div>
    </div>
  );
};

export default TextAreaContainer;
