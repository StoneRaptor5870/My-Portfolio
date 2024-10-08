import React from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import deployment from "../assets/deployment.png";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, moreProj } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_proj_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          <div
            onClick={() => window.open(source_proj_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={deployment}
              alt="launch"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Project = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBack = () => {
    navigate("/"); // Navigate to the root endpoint
  };

  return (
    <div className="w-full mt-10">
      <div className="flex justify-between items-center">
        <div>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText} text-green-600`}>Projects.</h2>
        </div>
        
        <button
          onClick={handleBack}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors duration-300"
        >
          Go Back
        </button>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <span className="text-white">I know a good app means good business.</span>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {moreProj.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "");
