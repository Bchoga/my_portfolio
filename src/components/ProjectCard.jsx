import { Link } from "react-router-dom";
import gitIcon from "../assets/icons/github.svg";
import webIcon from "../assets/icons/liveWeb.svg";
const ProjectCard = ({ imagePath, name, techArray, description, webLink }) => {
  return (
    <div className="cardContainer">
      <div className="max-w-96 bg-neutral-900 rounded-3xl mb-6 flex flex-col overflow-hidden">
        {/* Image: responsive height, cover and clipped */}
        <div
          className="w-full bg-neutral-900 overflow-hidden p-2"
          id="ImageContainer"
        >
          <img
            src={imagePath}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div
          className="w-full p-4 flex flex-col flex-1"
          id="DetailsAndLinksContainer"
        >
          <div id="nameAndTech" className="flex flex-wrap gap-8">
            <p className="text-amber-600 font-bold text-lg mb-2 truncate">
              {name}
            </p>
            <div className="flex gap-2">
              {techArray.map((techItem, index) => (
                <ul>
                  <li
                    key={index}
                    className="px-2 py bg-neutral-800 text-neutral-400 rounded-xl text-center"
                  >
                    {techItem}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <p className="mb-3 text-sm text-neutral-400 break-words">
            {description}
          </p>

          <div className="w-full flex flex-wrap gap-3 mt-auto" id="links">
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1px]  border-white bg-neutral-900  text-white hover:border-amber-600 flex-1 sm:flex-none sm:w-40 rounded-3xl p-2 flex justify-center items-center gap-2.5 text-sm"
            >
              <img src={webIcon} alt="live site" className="w-5 h-5" />
              View App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
