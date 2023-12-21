import React from "react";

const Projectitem = ({
  image,
  title,
  description,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-800 shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 hover:shadow-green-800 duration-500 py-3">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 text-center">
        <h3 className="text-2xl pb-1 font-bold text-white tracking-wider">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-white tracking-wider">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-6 pt-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-3 rounded-lg bg-green-50 border-2 border-green-700 text-green-700 font-bold cursor-pointer hover:scale-110 hover:shadow-green-400 ease-in duration-200"
          >
            GitHub
          </a>
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-3 rounded-lg border-2 border-green-700 bg-green-50 text-green-700 font-bold cursor-pointer hover:scale-110 hover:shadow-green-400 ease-in duration-200"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectitem;

