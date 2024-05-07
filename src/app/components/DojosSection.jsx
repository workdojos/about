"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 2,
    title: "Dojos",
    description: "Check out our static site built with Hugo.  It has over 10k+ pages of content and 5 web apps embedded into it.",
    image: "/images/chicago.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://workdojos.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Blog",
    description: "Check out our Ghost blog (save $25/month by self-hosting your own for FREE).",
    image: "images/ghost.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://blog.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Chat",
    description: "Private encrypted and self-hosted chat hub.  Please reach out!",
    image: "/images/rc.webp",
    tag: ["All", "Chat"],
    gitUrl: "https://chat.workmates.live",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Youtube",
    description: "Check out Youtube channel built with AI and a cast of 16 AI characters.",
    image: "images/dojofans.webp",
    tag: ["All", "AI"],
    gitUrl: "https://youtube.com/@dojofans",
    
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Dashboards",
    description: "Check out over 60+ self-hosted dashboards (get yours for free by signing up!.",
    image: "/images/dashdash.webp",
    tag: ["All", "Dashboards"],
    gitUrl: "https://dashboards.workdojos.com",
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
