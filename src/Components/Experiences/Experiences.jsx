import React from "react";

export function Experiences() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Experiences
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Contractual Developer
                  </h4>
                  <span className="text-gray-600">2023 - Present</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Full Stack Developer at <strong>H2O.Inc</strong>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Internship
                  </h4>
                  <span className="text-gray-600">2023</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Completed a <strong>4-month internship</strong> at{" "}
                  <strong>
                    <a
                      href="https://www.fastechsystem.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      Fastech Systems
                    </a>
                  </strong>{" "}
                  in <strong>MERN Stack Web Development</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Freelancer
                  </h4>
                  <span className="text-gray-600">2020 - Present</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Providing services as a <strong>programmer</strong> and{" "}
                  <strong>Full Stack web developer</strong> on{" "}
                  <strong>Fiverr</strong> and <strong>Upwork</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Loan Officer
                  </h4>
                  <span className="text-gray-600">2016 - 2019</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Worked at <strong>Fairmoney Loan Company</strong> making large
                  numbers of calls to defaulting loan clients, updating and
                  monitoring loan information, and collaborating with other
                  units.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Consultant
                  </h4>
                  <span className="text-gray-600">2020 - Present</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Working at <strong>Developer Directory Company</strong>{" "}
                  explaining company functions to clients, providing technology
                  advice, and linking clients with developers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Sales Agent
                  </h4>
                  <span className="text-gray-600">2024 - Present</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Working at <strong>Renmoney Microfinance Bank</strong> in
                  sales and marketing, utilizing social media for advertising,
                  and collaborating across departments to achieve targets.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Education
            </h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    BSC in Marketing
                  </h4>
                  <span className="text-gray-600">Enrolled</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Enrolled in BSC Marketing at{" "}
                  <strong>National open University of Nigeria</strong>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    High School
                  </h4>
                  {/* <span className="text-gray-600">2006</span> */}
                </div>
                <p className="mt-2 text-gray-700">
                  Passed O'Level from <strong>Kings College, Lagos</strong>.
                </p>
              </div>
              {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    Matriculation
                  </h4>
                  <span className="text-gray-600">2016</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Passed Matriculation from{" "}
                  <strong>
                    Ubedullah Sindhi Higher Secondary School Mahesro, Ghotki
                  </strong>{" "}
                  with an <strong>A</strong> Grade.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
