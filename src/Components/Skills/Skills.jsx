import React from "react";

export function Skills() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Skills
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-700">
              Creating user-friendly interfaces and enhancing user experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Graphics Design
            </h3>
            <p className="text-gray-700">
              Designing visually appealing graphics and layouts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              JavaScript
            </h3>
            <p className="text-gray-700">
              Proficient in JavaScript for dynamic and interactive web
              development.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">HTML</h3>
            <p className="text-gray-700">
              Skilled in using HTML for structuring web content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              3D Animation
            </h3>
            <p className="text-gray-700">
              Creating and animating 3D models for various applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
