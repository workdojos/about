import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import DojosSection from "./components/DojosSection";
import DojosSection2 from "./components/DojosSection2";
import DojosSection3 from "./components/DojosSection3";
import DojosSection4 from "./components/DojosSection4";
import Challenge from "./components/Challenge";
import Join from "./components/Join";
import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";


export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="n-9BPKvRBwg?si=Ozl3fuRZc6BptKfe" />
    </div>
  );
}







