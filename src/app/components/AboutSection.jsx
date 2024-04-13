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
        <li>Q2 2021 The Grand Experiment (200+ Wordpress sites deployed the largest .Live Network on the Web</li>
        <li>Q3 2021 Deployed Workmates Rocket.chat server with a room for every profession</li>
        <li>Q4 2021 Deployed Ghost blog with payments and newsletters built in</li>
        <li>Q1 2022 Deployed dashboards for over 200+ professions</li>
        <li>Q2 2022 Grew our subscriber base into triple digits for the first time</li>
        <li>Q4 2022 Started to dabble with AI (GPT 3.5) </li>
        <li>Q1 2023 Brought the Grand Experiment to an end (it did not work!)</li>
        <li>Q1 2023 Introduced a private Matrix server into the mix</li>
        <li>Q2 2023 Introduced conversational AI into the mix</li>
        <li>Q3 2023 Created our private template library (Next.js, React, Hugo, and more)</li>
        <li>Q3 2023 Expanded our library of one-click installs to over 50 open-source apps</li>
        <li>Q4 2023 Expanded our AI repertoire to include self-hosted text-to-speech, image generation, and animation</li>
        <li>Q1 2024 Launched our second Youtube channel for AI animation: @Dojofans</li>
        <li>Q1 2024 Scaled back operations, consolidated servers but still growing slowly.</li>
      
      </ul>
    ),
  },
  {
    title: "Capabilities",
    id: "capabilities",
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
        <li>Web-conferencing</li>
        <li>Team-building</li>
        <li>Community empowerment</li>
        <li>Building businesses and getting startups off the ground</li>
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
        <li>Dashboards galore</li>
        <li>ChatGPT integrations</li>
        <li>100&apos;s more</li>
      </ul>
    ),
  },
  {
    title: "Team",
    id: "team",
    content: (
      <ul className="list-disc pl-2">
        <li>Jay Clark - Founder</li>
        <li>Johannes Heinrich - CoFounder</li>
        <li>Josh Browne - Director of Business Development</li>
      </ul>
      ),
  },  
    {
      title: "Vision",
      id: "vision",
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
        <Image style={{ borderRadius: 16}}src="/images/neon2.webp" width={500} height={500}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A Digital Home Away From Home</h2>



          <p className="text-base lg:text-lg">
            Get maximum value from your own personal cloud.  Dojos is &quot;your place, your way&quot;, and it costs less than 25 cents a day.
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
              selectTab={() => handleTabChange("capabilities")}
              active={tab === "capabilities"}
            >
              {" "}
              Capabilities{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("team")}
              active={tab === "team"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Vision{" "}
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
