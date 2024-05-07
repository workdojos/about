"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 2,
    title: "Dojos",
    description: "Check out our static site built with Hugo with 5 web apps embedded right into it.",
    image: "/images/chicago3.webp",
    tag: ["All", "Websites", "Apps"],
    gitUrl: "https://workdojos.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Blog",
    description: "Check out our Ghost blog (save $25/month by self-hosting your own for FREE).",
    image: "images/ghost2.webp",
    tag: ["All", "Websites"],
    gitUrl: "https://blog.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Chat",
    description: "Private encrypted and self-hosted chat hub.  Please reach out!",
    image: "/images/rc2.webp",
    tag: ["All", "Chat", "Apps"],
    gitUrl: "https://chat.workmates.live",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Youtube",
    description: "Check out Youtube channel built with AI and a cast of 16 AI characters.",
    image: "images/dojofans3.webp",
    tag: ["All", "AI", "Automation"],
    gitUrl: "https://youtube.com/@dojofans",
    
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Dashboards",
    description: "Check out our showroom of self-hosted dashboards for over 50 professions.",
    image: "/images/dashdash4.webp",
    tag: ["All", "Apps"],
    gitUrl: "https://dashboards.workdojos.com",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Custom GPT for Job-Seekers",
    description: "Demo of one of our coolest custom GPTs featured in the GPT Store.",
    image: "/images/gpt3.webp",
    tag: ["All", "AI", "Chat", "Automation"],
    gitUrl: "https://1drv.ms/v/s!ArZMycleG714g6NzEktn34KsO01eYw?e=XruuzS",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Automation with AirTable",
    description: "See a demo of one of our coolest ways to automate AI.",
    image: "/images/air.webp",
    tag: ["All", "AI", "Apps", "Automation"],
    gitUrl: "https://1drv.ms/v/s!ArZMycleG714g6N0_p15_lTiGUlAvA?e=IO8tbj",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Self-Hosted Image Generation",
    description: "See some of the amazing things you can do with Stable Diffusion",
    image: "/images/stable.webp",
    tag: ["All", "AI", "Apps", "Automation"],
    gitUrl: "https://1drv.ms/v/s!ArZMycleG714g6N0_p15_lTiGUlAvA?e=IO8tbj",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Deck on Innovation",
    description: "See some of our recent ideas for innovation for Dave and Busters. ",
    image: "/images/twitch.webp",
    tag: ["All"],
    gitUrl: "https://1drv.ms/p/s!ArZMycleG714g6Mq52X_BwE4LXFfOg?e=cCdU4A",
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
          name="Apps"
          isSelected={tag === "Apps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Automation"
          isSelected={tag === "Automation"}
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
