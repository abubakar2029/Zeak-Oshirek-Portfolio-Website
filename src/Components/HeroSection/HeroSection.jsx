import React from "react";
import Abubakar from "./Abubakar.pdf";

export function HeroSection() {
  return (
    <section
      className="min-h-fit px-6 py-16 sm:p-8 flex justify-center items-center bg-zinc-100"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-7/12 text-center lg:text-left">
            <small className="text-xs sm:text-lg text-gray-500">
              Welcome to
              <span className="block md:inline"> my portfolio website!</span>
            </small>
            <h1 className="animated animated-text text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              <span className="mr-2">Hello, I'm</span>
              <span className="text-cyan-500"> Isaac Zeak Oshireku </span>
            </h1>
            <p className="mt-6 max-sm:text-sm text-xl text-gray-700">
              <strong>Undergraduate student</strong> at National Open University
              of Nigeria, specializing in <strong>Marketing</strong>. Proficient
              in <strong>UI/UX Design</strong>, <strong>Graphics Design</strong>
              , <strong>JavaScript</strong>, <strong>HTML</strong>, and{" "}
              <strong>3D Animation</strong>.
            </p>
            <p className="mt-4 text-xs sm:text-base text-gray-600">
              Email:{" "}
              <a
                href="mailto:zikk4real@gmail.com"
                className="text-cyan-500 underline"
              >
                zikk4real@gmail.com
              </a>
            </p>
            <p className="text-xs sm:text-base text-gray-600">
              Phone:{" "}
              <a href="tel:+2348109478917" className="text-cyan-500 underline">
                +2348109478917
              </a>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
              <a
                href="Abubakar"
                className="bg-cyan-500 text-white py-3 px-7 rounded-3xl mb-4 sm:mb-0 sm:mr-4 hover:bg-cyan-600 transition duration-300"
                download
              >
                Download Resume
              </a>
              <a
                href="#contact-me"
                className="bg-zinc-200 hover:bg-zinc-300 py-3 px-7 rounded-3xl transition duration-300"
              >
                Get a free quote
              </a>
            </div>
          </div>
          <div className="lg:w-5/12 mt-10 lg:mt-0">
            <div className="about-image">
              <img
                src="https://sajidbhatti786.github.io/SajidBhatti786/images/undraw/undraw_software_engineer_lvl5.svg"
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
