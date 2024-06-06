import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Angular",
    "Node",
    "Express",
    "MongoDB",
    "MySql",
    "Java",
    "C++",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/eb7bf27f-4fdf-4c8a-923d-771a7c469008/DXInp8sk8w.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello! My name is Manisha Singh. I am a dedicated software developer
            with a strong foundation in programming and a deep passion for web
            technologies, thereby enhancing my proficiency in both back-end and
            front-end development.
          </p>
          <p className="text-white">
            Fast-forward to today, I have had the privilege of training with
            Wiley Edge, where I successfully implemented Spring Boot and RESTful
            services to deliver responsive web pages and data, further
            solidifying my capabilities in this field. Here are a few
            technologies I've been working with recently.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
