import React from "react";
import Omar from '../assets/images/omar.png';

const About = () => {
  return (
    <div
      id="about"
      className="w-full m-auto md:pl-40 p-8 pt-16 md:pt-12 pb-6 flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      <div className="md:w-1/2 pr-4">
        <h1 className="text-4xl font-bold inline border-b-4 border-green-800 text-stone-600">
          ABOUT
        </h1>
        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          Hello there! I'm Omar, a software engineer based in Manchester,
          England.
        </p>
        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          Embarking on an exhilarating journey into the world of coding and web
          development, I'm passionate about the transformative power of
          technology.
        </p>
        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          What started as a fascination quickly evolved into a
          strong commitment to turning ideas into reality through the art of coding.
        </p>
        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          My goal is to bring our shared vision to life by crafting something
          that delivers a truly unique user experience. Whether you're an
          enthusiast like me, a potential collaborator, or just curious about
          the wonders of web development, I'm delighted to have you here.
        </p>

        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          Feel free to explore, and if you have any questions or ideas you'd
          like to discuss, don't hesitate to shoot me a{" "}
          <a
            className="underline-offset-1 text-green-700 hover:text-green-300"
            href="#contact"
          >
            message
          </a>
          .
        </p>
        <p className="text-left pt-4 md:pt-6 text-xl text-stone-600">
          Let's build something incredible together!
        </p>
      </div>
      <div className="md:w-auto md:pl-20">
        <img
          className="w-full md:max-w-md mx-auto"
          src={Omar}
          alt="omar"
        />
      </div>
    </div>
  );
};

export default About;
