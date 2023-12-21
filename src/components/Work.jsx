import React from "react";
import Workitem from "./Workitem";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JavaScript from "../assets/images/javascript.png";
import ReactJS from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";
import GitHub from "../assets/images/github.png";
import Node from "../assets/images/node.png";
import Vite from "../assets/images/vite.png";
import Python from "../assets/images/python.svg";
import Next from "../assets/images/next.svg";

const data = [
  {
    year: 2023,
    title: "Software Engineering Bootcamp",
    duration: "October - December",
    details: " A course which provides the building blocks and advance technical skills needed to work in Software Engineering. The program introduces various Software Engineering & Web Dev concepts and the opportunity to discover theory by exploring subjects through extensive self-study. The bootcamp also provides scope to practise and apply knowledge."
  },
];

const Work = () => {
  return (
    <div id="work" className="w-full md:pl-40 m-auto p-4 pr-12">
      <h1 className="text-4xl font-bold inline border-b-4 border-green-800 text-stone-600">
        EXPERIENCE
      </h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}

      <div className="w-full pt-12">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-green-800 text-stone-600">
            SKILLS
          </h1>
          <p className="py-4 pt-6 text-md text-stone-600">
            These are just some of the technologies I've been learning..
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-2 text-green-800">HTML</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-2 text-green-800">CSS</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-2 text-green-800">JAVASCRIPT</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={ReactJS} alt="React icon" />
            <p className="my-2 text-green-800">REACT</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-2 text-green-800">TAILWIND CSS</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={Vite} alt="Vite icon" />
            <p className="my-2 text-green-800">VITE</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={Next} alt="Next icon" />
            <p className="my-2 text-green-800">NEXT JS</p>
          </div>
          <div className="bg-gray-100 shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-green-800 duration-500 py-3">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-2 text-green-800">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
