interface props {
  language: string;
  match: boolean;
}
const LanguageBubble = ({ language, match }: props) => {
  return (
    <div className="w-max p-3 flex items-center justify-center bg-[#0d0f12] shadow-[#242727a2]   shadow-lg rounded-xl">
      <span className={match ? `textGradient ` : `text-[#7c7a7a] `}>
        {language}
      </span>
    </div>
  );
};

export default LanguageBubble;
