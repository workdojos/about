"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Jay",
    description: "I'm from Chicago and have been building with self-hosted open-source technology for 7 years.  I love helping others DIY innovative tech solutions using all the free nuts and bolts that exist out in wild in the open-source world.",
    image: "/images/projects/j2.png",
    tag: ["All", "Founders"],
    gitUrl: "https://jay.workmates.live",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Johannes",
    description: "I'm from Vienna and your go-to guy for all things content marketing and SEO.  I love helping others drive growth and engagement.  Chat with us today and see what open-source can do for you and your business.",
    image: "/images/projects/joh2.png",
    tag: ["All", "Founders"],
    gitUrl: "mailto:support@workmates.live",
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
    <section id="team">
            <br></br>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Team
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Founders"
          isSelected={tag === "Images"}
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
