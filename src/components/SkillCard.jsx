const SkillCard = ({ name, iconPath, description }) => {
  return (
    <>
      <div className="skillCard bg-neutral-900 text-neutral-400 w-xs m-3 p-3 rounded-md hover:scale-110 transition duration-500">
        <div className="topPart mb-1.5 flex items-center">
          <img src={iconPath} alt="icon" width={30} />
          <span className="font-bold ml-3 text-white">{name}</span>
        </div>

        <div className="bottomPart">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
