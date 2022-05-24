import SuggestedTag from "./SuggestedTag";

const SuggestedTagContainer = () => {
  return (
    <div className="w-[60%] overflow-x-auto flex gap-x-5 md:gap-x-3 ">
      <SuggestedTag />
      <SuggestedTag />
      <SuggestedTag />
    </div>
  );
};

export default SuggestedTagContainer;
