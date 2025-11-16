const TechCard = ({ iconPath }) => {
  return (
    <>
      <div className="bg-neutral-800 rounded-3xl w-16 h-16 p-4 flex justify-center m-2 rotate360OnHover">
        <img src={iconPath} alt="icon" />
      </div>
    </>
  );
};

export default TechCard;
