import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import caculator from "../assets/images/calculator.png";
import asteroidBlaster from "../assets/images/asteroid_blaster.png";
import labkwip from "../assets/images/labkwip.png";

const calculatorDescription = `Using HTML,CSS and JS I built this simple responsive calculator to test my 
knowledge in JS and CSS, Features include Theme Switching.
`;

const asteroidBlasterDescription = `I made this game using vanilla JS CSS and canvas CSS, no external libs. 
Object oriented programming and simple game concepts.Can you reach 100 points?
`;

const labkwipDescription = `This is a simple landing page for a small start up with the purpose of the sit was just an online presence.
`;

const project4Description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, 
vel? Eum molestiae nesciunt ducimus, fugiat obcaecati temporibus veritatis error cumque 
voluptate maxime voluptates dicta in commodi rem, asperiores iure cum.
`;

const project5Description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, 
vel? Eum molestiae nesciunt ducimus, fugiat obcaecati temporibus veritatis error cumque 
voluptate maxime voluptates dicta in commodi rem, asperiores iure cum.
`;

const Projects = () => {
  return (
    <div className="min-h-screen w-full mt-56 mb-20 rounded-3xl p-3 ">
      <h2 className="mb-20  text-amber-600 font-semibold ">
        FEATURED PROJECTS
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-14">
        <ProjectCard
          key="labkwip"
          name={"Labkwip Landing Page"}
          description={labkwipDescription}
          imagePath={labkwip}
          gitLink={"https://bchoga.github.io/labkwip/"}
          webLink={"https://bchoga.github.io/labkwip/"}
          techArray={["React.js", "tailwind-css"]}
        />

        <ProjectCard
          key="asteroid-blaster"
          name={"Asteroid Blaster Game"}
          description={asteroidBlasterDescription}
          imagePath={asteroidBlaster}
          gitLink={"https://github.com/Bchoga/AsteroidBlaster"}
          webLink={"https://bchoga.github.io/AsteroidBlaster/"}
          techArray={["HTML", "CSS", "JS"]}
        />

        <ProjectCard
          key="simple-calculator"
          name={"Simple Calculator"}
          description={calculatorDescription}
          imagePath={caculator}
          techArray={["HTML", "CSS", "JS"]}
        />
      </div>

      <div className="w-ful flex justify-center">
        <Link to="/contacts">
          <button className="bg-neutral-800 text-[18px] text-amber-600 rounded-3xl px-8 py-2 font-semibold hover:text-neutral-600 shadow-lg border-2 hover:border-amber-600 mt-20 mb-20 ">
            CONNECT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
