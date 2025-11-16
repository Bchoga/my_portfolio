import React from "react";
import github from "../assets/icons/githubOutline.svg";
import whatsapp from "../assets/icons/whatsappOutline.svg";
import email from "../assets/icons/email.svg";
import linkedin from "../assets/icons/linkedinOutline.svg";
const Contacts = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-white p-3">
      <div className="max-w-80">
        <h1 className="mb-10 border-b-2 border-amber-600 text-center">
          Thank You
        </h1>
        <p className="text-center">
          Thank you for visiting my portfolio!. Please do send me an email if
          you think we can work together or if you want to discuss something you
          think i might be of help with.
        </p>
      </div>

      <div className="mt-12 flex justify-around" id="links">
        <div
          className="m-2 w-14 h-10 bg-neutral-800 p-3 rounded-xl flex justify-center items-center hover:scale-110 transition-all duration-300"
          id="github"
        >
          <a href="">
            <img src={github} alt="" width={24} />
          </a>
        </div>
        <div
          className="m-2 w-14 h-10 bg-neutral-800 p-3 rounded-xl flex justify-center items-center hover:scale-110 transition-all duration-300"
          id="github"
        >
          <a href="">
            <img src={linkedin} alt="" width={24} />
          </a>
        </div>
        <div
          className="m-2 w-14 h-10 bg-neutral-800 p-3 rounded-xl flex justify-center items-center hover:scale-110 transition-all duration-300"
          id="github"
        >
          <a href="">
            <img src={whatsapp} alt="" width={24} />
          </a>
        </div>
        <div
          className="m-2 w-14 h-10 bg-neutral-800 p-3 rounded-xl flex justify-center items-center hover:scale-110 transition-all duration-300"
          id="github"
        >
          <a href="">
            <img src={email} alt="" width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
