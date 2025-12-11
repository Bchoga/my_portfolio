import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import myPic from "../assets/images/cartoonMe.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-dark-transparent shadow-lg text-neutral-200 rounded-3xl w-full max-w-5xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-600 bg-transparent flex items-center justify-center">
              <img src={myPic} alt="" />
            </div>
          </Link>

          {/* desktop */}
          <nav className="hidden sm:flex items-center gap-4">
            <Link
              to="/"
              className="px-3 py-1 rounded-2xl border-yellow-600 hover:font-semibold transition"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="px-3 py-1 rounded-2xl border-yellow-600  hover:font-semibold transition"
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              className="px-3 py-1 rounded-2xl border-yellow-600  hover:font-semibold transition"
            >
              Contact
            </Link>
          </nav>

          {/* mobile menu */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-lg border-yellow-600  transition"
            >
              {/*3-line icon */}
              <div className="w-5 h-5 flex flex-col justify-between">
                <span className="block h-[2px] w-full bg-white" />
                <span className="block h-[2px] w-full bg-white" />
                <span className="block h-[2px] w-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu (full width under header) */}
      {open && (
        <div className="sm:hidden bg- border-t border-neutral-600 rounded-b-3xl transition-all duration-500">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col items-center gap-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="w-full text-center py-2 rounded-2xl hover:bg-yellow-600 transition"
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="w-full text-center py-2 rounded-2xl hover:bg-yellow-600 transition"
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="w-full text-center py-2 rounded-2xl hover:bg-yellow-600 transition"
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
