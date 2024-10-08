import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger} from "gsap/all";
import { styles } from "../styles";
import { github } from "../assets";
import deployment from "../assets/deployment.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight } from 'react-icons/ai'

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
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between'
    >
      <div className='relative w-full h-0' style={{ paddingBottom: '56.25%' }}>
        <img
          src={image}
          alt='project_image'
          className='absolute top-0 left-0 w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='flex flex-col flex-grow justify-between pt-4'>
        <div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="github"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>

        <div
          onClick={() => window.open(source_proj_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-[5px]"
        >
          <img
            src={deployment}
            alt="launch"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </Tilt>
  );
};

const Works = () => {
  const homeProjects = projects.slice(0,6)
  const workRef = useRef(null)
  const textRef = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])


  return (
    <div ref={workRef}>
      <div variants={textVariant()}>
       <div className="flex justify-between">
       <p  className={`${styles.sectionSubText} text-slate-100`}>My work</p>
       <Link to="/project" className={`${styles.sectionSubText} flex items-center`}>View More <AiOutlineArrowRight /></Link>
       </div>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>


      <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-slate-300 text-[17px] max-w-3xl leading-[30px]'
        >
         Explore my Projects and discover how I turn complex problems into elegant solutions. Each project is a real-world example of my skills and expertise, providing a glimpse into my capabilities as a software developer. You'll find brief project descriptions, links to the code repositories, and live demos that showcase my ability to work with various technologies, effectively manage projects, and solve complex problems with ease.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {homeProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Works,'projects')