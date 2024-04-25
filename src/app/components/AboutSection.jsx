"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "History",
    id: "history",
    content: (
      <ul className="list-disc pl-2">
        <li>2021</li>
        <li>Deployed a prototype for the web&apos;s largest instant expert network</li>
        <li>Launched Workmates chat server with a room for every profession</li>
        <li>Added a new server for a Ghost blog with payments and newsletters built in</li>
        <li>Spun up dashboards for over 200+ professions</li>
        <li>Grew our subscriber base into triple digits for the first time</li>
        <li>2022</li>
        <li>Began calling OpenAI&apos;s GPT 3.5 via API (now using 4 Turbo!) for content</li>
        <li>Launched a private Matrix Synapse chat server for Admins</li>
        <li>2023</li>
        <li>Created our private template library to subscribers (Next.js, React, Hugo, and more)</li>
        <li>Expanded our library of one-click installs to over 50 open-source apps</li>
        <li>Expanded AI offerings to include text-to-speech, image generation, and animation</li>
        <li>2024</li>        
        <li>Launched our second Youtube channel for AI animation: @Dojofans</li>

      
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        
        
        <li>AI automation</li>
        <li>Self-hosting apps and micro-services</li>
        <li>Enabling businesses to run a single server for less than 15 bucks a month for 100s of users</li>
        <li>Training</li>
        <li>Learning & Development</li>
        <li>Technical support</li>
        <li>AI image creation, text-to-speech, and animation</li>
        <li>DevOps</li>
        <li>Web-hosting</li>
        <li>Conversational AI</li>
        <li>Programmatic SMS</li>
        <li>UI/UX Design</li>
        <li>Team-building</li>
        <li>Community empowerment</li>
        <li></li>


      </ul>
    ),
  
    
  
  },
  {
    title: "Apps",
    id: "apps",
    content: (
      <ul className="list-disc pl-2">
        <li>Wordpress</li>
        <li>Rocket.chat</li>
        <li>Ghost</li>
        <li>Organizr</li>
        <li>Databag</li>
        <li>Moodle</li>
        <li>Nextcloud</li>
        <li>Immich</li>
        <li>Matrix Synapse</li>
        <li>5 different flavors of dashboards</li>
        <li>ChatGPT integrations</li>
        <li>100&apos;s more</li>
      </ul>
    ),
  },

    {
      title: "Values",
      id: "values",
      content: (
        <ul className="list-disc pl-2">
          <li>Data privacy</li>
          <li>Technological self-sufficiency</li>
          <li>Ultimate sandboxing</li>
          <li>Maximum value</li>
          <li>Open-source</li>
          <li>Affordable</li>
          <li>Approachable</li>
        </ul>
      ),
    },

];

const AboutSection = () => {
  const [tab, setTab] = useState("history");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image style={{ borderRadius: 16}}src="/images/cool.jpg" width={1350} height={900}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Hire Us</h2>



          <p className="text-base lg:text-lg">
            We soldier through some of the hardest tech challenges in the open-source landscape.  Learn more: 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("history")}
              active={tab === "hisotry"}
            >
              {" "}
              History{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("apps")}
              active={tab === "apps"}
            >
              {" "}
              Apps{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("values")}
              active={tab === "values"}
            >
              {" "}
              Values{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
