import React, { useState } from "react";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson, BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <FaBars
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden bg-transparent shadow-lg rounded-md shadow-gray-400 hover:scale-110 hover:shadow-green-800 ease-in duration-200"
        />
      </div>
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col gap-1 justify-center items-center z-20 text-stone-500">
          <a
            onClick={handleNav}
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-green-800 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-green-800 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-green-800 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-green-800 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-green-800 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#home"
            className="nav-link rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 relative"
          >
            <AiOutlineHome size={20} />
            <span className="nav-text">Home</span>
          </a>

          <a
            href="#about"
            className="nav-link rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 relative"
          >
            <BsPerson size={20} />
            <span className="nav-text">About</span>
          </a>

          <a
            href="#work"
            className="nav-link rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 relative"
          >
            <GrProjects size={20} />
            <span className="nav-text">Experience</span>
          </a>

          <a
            href="#projects"
            className="nav-link rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 relative"
          >
            <AiOutlineProject size={20} />
            <span className="nav-text">Projects</span>
          </a>

          <a
            href="#contact"
            className="nav-link rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 relative"
          >
            <AiOutlineMail size={20} />
            <span className="nav-text">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
