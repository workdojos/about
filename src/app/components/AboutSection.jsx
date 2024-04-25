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
        <li>Deployed prototype for the largest instant expert network</li>
        <li>Launched chat with a room for every profession</li>
        <li>Added a Ghost blog with payments and newsletters built in</li>
        <li>Spun up dashboards for over 200+ professions</li>
        <li>Grew our subscriber base into triple digits</li>
        <li>2022</li>
        <li>Integrated OpenAI and self-hosted Llama for content</li>
        <li>Launched private Matrix Synapse server for Admins</li>
        <li>2023</li>
        <li>Created private template library for subscribers</li>
        <li>Augmented AI with text-to-speech, images, and animation</li>
        <li>2024</li>        
        <li>Launched a Youtube channel for AI animations: @Dojofans</li>

      
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


      </ul>
    ),
  
    
  
  },
  {
    title: "Apps",
    id: "apps",
    content: (
      <ul className="list-disc pl-2">
        <li>Plex</li>
        <li>Rocket.chat</li>
        <li>Ghost</li>
        <li>Organizr</li>
        <li>Databag</li>
        <li>Moodle</li>
        <li>Nextcloud</li>
        <li>Matrix Synapse</li>
        <li>Dashboards (Home Assistant, Flame, Dashy)</li>
        <li>ChatGPT integration</li>
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
        <Image style={{ borderRadius: 16}}src="/images/opensource6.png" width={500} height={649}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Open-Source Cool</h2>



          <p className="text-base lg:text-lg">
            We soldier through some of the hardest tech challenges in the open-source landscape.  
            <br></br>
            Learn more: 
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
