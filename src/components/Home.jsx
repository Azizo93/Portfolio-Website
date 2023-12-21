import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Background from '../assets/images/background1.jpg';
import Cv from '../assets/docs/cv.pdf';

const Home = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover"
        src={Background}
        alt="background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/80">
        <div className="max-w-[700px] m-auto h-2/3 w-full flex flex-col justify-center lg:items-start items-left sm: pl-10">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-600">
            Hello!
          </h1>
          <h1 className="sm:text-5xl text-4xl pt-3 font-bold text-gray-600">
            I'm <span className="text-green-700">Omar Aziz</span>
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-600">
            I'm a{" "}
            <span className="text-green-800 font-bold">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="div"
                cursorStyle={true}
                repeat={Infinity}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
              />
            </span>
          </h2>
          <div className="flex justify-between pt-6 max-w-[180px] w-full">
            <a
              href="https://www.linkedin.com/in/omaraziz2503"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full shadow-lg bg-green-100  shadow-gray-400 hover:scale-110 hover:shadow-green-800 ease-in duration-200 p-2"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://github.com/Azizo93"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full shadow-lg bg-green-100  shadow-gray-400 hover:scale-110 hover:shadow-green-800 ease-in duration-200 p-2"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={Cv}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full shadow-lg bg-green-100 shadow-gray-400 hover:scale-110 hover:shadow-green-800 ease-in duration-200 p-3"
            >
              <BsFillPersonLinesFill size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
