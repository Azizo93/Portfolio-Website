import React from "react";
import Projectitem from "./Projectitem";
import restaurantAppImg from "../assets/images/restaurantapp.png";
import weatherAppImg from "../assets/images/weatherapp.png";
import promptopiaAppImg from "../assets/images/promptopiaapp.png";
import movieLandImg from "../assets/images/movieland.png";
import hogwartsAppImg from "../assets/images/hogwartsapp.png";
import pythonTextBasedGameImg from "../assets/images/python_tbag.png";

const projectData = [
  {
    image: restaurantAppImg,
    title: "Restaurant App",
    description: "The Bazaari Bites app uses Vite, React JS & CSS to offer users an interactive menu with filter options",
    githubLink: "https://github.com/Azizo93/Resturant-App/",
    websiteLink: "https://bazaari-bites.netlify.app/",
  },
  {
    image: promptopiaAppImg,
    title: "Promptopia App",
    description: "A Next.JS based web app allowing users to generate share and view AI prompts",
    githubLink: "https://github.com/Azizo93/project_promptopia/",
    websiteLink: "https://project-promptopia-wine.vercel.app/",
  },
  {
    image: weatherAppImg,
    title: "Weather App",
    description: "Check the weather forecast for any city using the OpenWeatherMap API",
    githubLink: "https://github.com/Azizo93/weather_app/",
    websiteLink: "https://azizo93.github.io/",
  },
  {
    image: movieLandImg,
    title: "Movie Land App",
    description: "Search the React based MovieLand web-app for any movie using the OMDB API",
    githubLink: "https://github.com/Azizo93/react_js_movieland_app/",
    websiteLink: "https://movie-land-react-app.netlify.app/",
  },
  {
    image: hogwartsAppImg,
    title: "Hogwarts App",
    description: "A HTLM CSS and JS based website for Hogwarts School",
    githubLink: "https://github.com/Azizo93/Aziz93.github.io-hogwarts",
    websiteLink: "https://azizo93.github.io/Aziz93.github.io-hogwarts/",
  },
  {
    image: pythonTextBasedGameImg,
    title: "Python Game",
    description: "A Text Based Adventure Game built with Python - boot up your terminal and visit The Castle of Darkness",
    githubLink: "https://github.com/Azizo93/python_text_based_adventure_game",
    websiteLink: "https://github.com/Azizo93/python_text_based_adventure_game",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full md:pl-40 m-auto p-4 pr-12">
      <h1 className="text-4xl font-bold inline border-b-4 border-green-800 text-stone-600">
        PROJECTS
      </h1>
      <p className="text-left py-8 text-stone-600">
        I have been busy working on a few projects. Check them out below..
      </p>
      <div className="grid sm:grid-cols-3 gap-12">
        {projectData.map((item, idx) => (
          <Projectitem
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
            githubLink={item.githubLink}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
