import React from "react";
import heroImage from "../assets/images/fullStack.png";
import calendar from "../assets/icons/calendar.svg";

import SkillCard from "../components/SkillCard";
import TechCard from "../components/TechCard";

import android from "../assets/icons/android.svg";
import appwrite from "../assets/icons/appwrite.svg";
import c_pp from "../assets/icons/c_pp.svg";
import circuit_board from "../assets/icons/circuit-board.svg";
import css from "../assets/icons/css.svg";
import dart from "../assets/icons/dart.svg";
import embedded from "../assets/icons/embedded.svg";
import firebase from "../assets/icons/firebase.svg";
import flutter from "../assets/icons/flutter-light.svg";
import html from "../assets/icons/html.svg";
import idea from "../assets/icons/idea.svg";
import iot from "../assets/icons/iot.svg";
import javascript from "../assets/icons/javascript.svg";
import kicad from "../assets/icons/kicad.svg";
import react from "../assets/icons/react.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import typescript from "../assets/icons/typescript.svg";
import web from "../assets/icons/web.svg";
import gitIcon from "../assets/icons/github.svg";

import { Link } from "react-router";
const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-white mt-30">
      <section
        id="aboutHero"
        className="relative bg-neutral-800 w-full rounded-3xl overflow-hidden"
      >
        <img src={heroImage} alt="" className="mx-auto" width={560} />
        <div
          id="overlay"
          className="absolute w-full bg-[#00000060] top-0 h-full left-0 flex flex-col justify-center px-4"
        >
          <div
            className="font-semibold px-3 rounded-3xl bg-[#00000080] self-start w-fit"
            id="heroText"
          >
            BRIAN<span className="text-yellow-600 ">CHOGA</span>
          </div>

          <p className="text-[18px] mt-1">
            FullStack Software|Hardware Engineer
          </p>
        </div>
      </section>

      <section className="mt-20 px-2 w-full shadow-lg" id="persoanlStatement">
        <h2 className="text-yellow-600 font-bold mb-5">PERSONAL STATEMENT</h2>
        <div className="font-light text-neutral-400">
          <p className="mb-3">
            I am an Electronic Engineer who loves both Hardware and Software,
            Thats why i call my self a{" "}
            <span className="text-white">
              Full Stack Software|Hardware Engineer
            </span>
            .What i love above everything else is building stuff.
          </p>
          <p className="mb-3">
            I Love the flexibility of being able to come up with solutions using
            my broad skill set from making smart home iot solutions, embedded
            firmware to web development and mobile application development.
          </p>

          <p>
            What drives me is my thirst to find solutions to problems i meet
            everyday. I have strong commitment to excellence and efficiency.
            More than anything i like making stuff.
          </p>
        </div>
      </section>

      <section id="skills" className="w-full shadow-lg px-2 mt-20">
        <h2 className="text-yellow-600 font-bold mb-5">SKILLS</h2>
        <div className="flex flex-wrap justify-center">
          <SkillCard
            iconPath={web}
            name={"Web Dev"}
            description={
              "HTML, CSS and JavaScript, i use mordern FrameWorks like React to for Faster Development"
            }
          />

          <SkillCard
            iconPath={android}
            name={"Mobile App Dev"}
            description={
              "Flutter, ReactNative, I am also looking into Kotlin Multiplatform"
            }
          />

          <SkillCard
            iconPath={iot}
            name={"IoT"}
            description={
              "using platforms like STM32, ESP32, and Arduino i come up with solutions to make everyday life easier"
            }
          />

          <SkillCard
            iconPath={embedded}
            name={"Embedded Systems"}
            description={
              "I write firmware for STM32/STM32 Cube IDE, ESP32/ESP32-IDF and also Arduino"
            }
          />

          <SkillCard
            iconPath={circuit_board}
            name={"PCB Design"}
            description={
              "I use tools like KiCad, EasyEDA, Proteus, and LT Spice to build simple and complex but functional PCBs"
            }
          />

          <SkillCard
            iconPath={idea}
            name={"Problem Solving"}
            description={
              "Over the Years I have developed my critical thinking to solve problems i come across in my everyday life, i think this is the most important skill."
            }
          />
        </div>
      </section>

      <section
        className="mb-20 w-full shadow-lg px-2 mt-20 text-neutral-400"
        id="experience"
      >
        <h2 className="text-yellow-600 font-bold mb-5">EXPERIENCE</h2>
        <div id="embedded">
          <p className="text-white font-semibold text-2xl">
            ① Embedded Systems Developer
          </p>
          <div className=" mb-5 flex gap-6">
            <span className="text-yellow-600 text-2xl ">
              <a
                href="https://www.linkedin.com/company/aura-group-pvt-ltd/"
                target="_blank"
              >
                @Aura Group
              </a>
            </span>
            <span className="text-[1rem] flex items-center gap-2">
              <div className="w-6 h-6">
                <img src={calendar} alt="" />
              </div>
              <div className="h-6 align-bottom pt-[1.5px] text-neutral-400 font-semibold">
                {"CONTRACT: 2019-2020"}
              </div>
            </span>
          </div>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            Developed Firmware for an ESD (Electronic Signature Device) using
            C++. The work was demanding as i had to make sure the device
            communicated correctly with the complimentary Software from the
            computer side, and also be able to communicate to a file server via
            an onboard GPRS module.
          </p>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            Worked together with the other software team responsible for the
            Desktop software, to ensure there would be no conflicts during
            intergration. This also meant i had to read and understand their C#
            code.
          </p>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-500 text-2xl align-middle">
              ⦾
            </span>{" "}
            Designed the hardware of a portable Electronic Signature Device
            (ESD) using KiCAD software. The greatest challenge was making the
            PCB footprint as small as a thumb drive whilst mantaining electrical
            intergrity and minimising costs.
          </p>
        </div>

        <div id="supervisor" className="mt-20">
          <p className="text-white font-semibold text-2xl">
            ② Engineering Supervisor
          </p>
          <div className=" mb-5 flex gap-6">
            <span className="text-yellow-600 text-2xl ">
              <a
                href="https://www.facebook.com/p/Cognitive-Technogies-100063796429781/"
                target="_blank"
              >
                @cogniTech Zimbabwe
              </a>{" "}
            </span>
            <span className="text-[1rem] flex items-center gap-2">
              <div className="w-6 h-6">
                <img src={calendar} alt="" />
              </div>
              <div className="h-6 align-bottom pt-[1.5px] text-neutral-400 font-semibold">
                {"2018-PRESENT"}
              </div>
            </span>
          </div>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            Overseeing and managing Solar Installation projects. Ensure Solar
            Instalations are done correctly and Saftely.
          </p>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            Trainning technicians how to execute installations and other
            technical work.
          </p>

          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            Designing Solar Systems to meet customer needs and communicate with
            clients to ensure we meet their expectations and also convince them
            to make the right decisions.
          </p>
        </div>
      </section>

      <section
        id="certifications"
        className="w-full shadow-lg mb-20 text-neutral-400 px-2"
      >
        <h2 className="text-yellow-600 font-bold mb-5">CERTIFICATES</h2>
        <div id="DSA">
          <p className="text-white font-semibold text-2xl">
            ① Data Structures & Algorithms
          </p>
          <a
            href="https://www.udemy.com/certificate/UC-1ef29a3c-1e9a-42cc-95cc-121475e7c9b1/"
            target="_blank"
            className="text-yellow-600 text-2xl "
          >
            @Udemy
          </a>
          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            This hands on tutorial taught me a lot about DSA, I learned how to
            write efficient code in terms of Time Complexity and Space
            Complexity. The greatest take away was learning how to solve those
            tricky DSA questions thus training to think like a programmer.
          </p>
        </div>

        <div id="fullStack" className="mt-10">
          <p className="text-white font-semibold text-2xl">
            ② Full Stack Web Development
          </p>
          <a
            href="https://credsverse.com/credentials/2db3fccc-5ba6-42ed-b355-642021196b3b"
            target="_blank"
            className="text-yellow-600 text-2xl "
          >
            @Tunga
          </a>
          <p className="mt-3">
            <span id="bullet" className="text-yellow-600 text-2xl align-middle">
              ⦾
            </span>{" "}
            This cohort openned the word of web development to me, having had
            experience with mostly Embedded Systems, this one helped me have a
            bit more understanding about web development and that was the bit i
            neeeded.
          </p>
        </div>
      </section>

      <section id="skills" className="w-full shadow-lg px-2 mt-20">
        <h2 className="text-yellow-600 font-bold mb-5">TOOL STACK</h2>
        <div className="techCards flex justify-center flex-wrap mb-6">
          <TechCard iconPath={html} />
          <TechCard iconPath={css} />
          <TechCard iconPath={javascript} />
          <TechCard iconPath={typescript} />
          <TechCard iconPath={react} />
          <TechCard iconPath={tailwindcss} />
          <TechCard iconPath={flutter} />
          <TechCard iconPath={dart} />
          <TechCard iconPath={c_pp} />
          <TechCard iconPath={appwrite} />
          <TechCard iconPath={firebase} />
          <TechCard iconPath={kicad} />
          <TechCard iconPath={gitIcon} />
        </div>
      </section>

      <Link to="/contacts">
        <button className="bg-neutral-800 text-[18px] text-yellow-600 rounded-3xl px-8 py-2 font-semibold hover:text-neutral-600 shadow-lg border-2 hover:border-yellow-600 mt-10 mb-20 ">
          SAY HI
        </button>
      </Link>
    </div>
  );
};

export default About;
