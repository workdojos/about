"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              We are{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Passionate",
                1000,
                "Driven",
                1000,
                "Easy",
                1000,
                "Agile",
                1000,
                "Creative",
                1000,
                "Data-driven",
                1000,
                "Fun",
                1000,                               
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Helping others unlock the open-source world.
          </p>
          <div>
            <Link
              a href="https://blog.workdojos.com/#/portal/signup" target="_blank" rel="noopener noreferrer"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Join for Free
            </Link>


          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="lg:w-[786px] lg:h-[443px] relative ">
            <Image
              style={{borderRadius: 20}}
              src="/images/openopen2.webp"
              className=".img-container"
              width={500}
              height={500}
              unoptimized={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
