"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Affiliate site",
    description: "Check out an easy way to save money on tours and learn about open-source tech around the world.",
    image: "/images/projects/travel.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://TravelAgent.Live",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "WorkDojos",
    description: "Check out our site built with Hugo with over 10k+ pasges of content, all hosted for free!",
    image: "/images/projects/workdojos.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://workdojos.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Blog",
    description: "Check out our Ghost blog (and save a whopping $25/mo by self-hosting it for FREE).",
    image: "images/projects/blog.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://blog.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Rocket.chat",
    description: "The amound of money you can save by self-hosting your own tech stack is amazing, chat with us!",
    image: "/images/projects/rc.webp",
    tag: ["All", "Chat"],
    gitUrl: "https://chat.workmates.live",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Youtube",
    description: "Check out Youtube channgel built with AI.",
    image: "images/projects/blog.webp",
    tag: ["All", "AI"],
    gitUrl: "https://youtube.com/@dojofans",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "",
    description: "Check out over 60+ self-hosted dashboards (get yours for free by signing up!.",
    image: "/images/projects/dash.jpg",
    tag: ["All", "Dashboards"],
    gitUrl: "https://admins.workdojos.com",
    previewUrl: "/",
  },
  
];

const DojosSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = dojosData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="about">

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        About Us
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Websites"
          isSelected={tag === "Websites"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Chat"
          isSelected={tag === "Chat"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Dashboards"
          isSelected={tag === "Dashboards"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        </div>

        
  
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );
};

export default DojosSection;
