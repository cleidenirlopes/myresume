import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 bg-[#ffffff] text-[#151a1e] dark:bg-[#151a1e] dark:text-[#ffffff] font-light">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center gap-5 relative mt-20 mr-20 max-w-3xl">
        <div className="space-y-2 text-center">
          <h1 className="text-6xl font-extralight tracking-wide">
            <span className="text-black dark:text-white">Cledenir</span>
            <span className="font-medium text-[#2b88c6]"> Souza</span>
          </h1>
          <h3 className="text-3xl font-extralight tracking-wider text-[#151a1e] dark:text-[#d8dcde]">
            Data Analyst
          </h3>
        </div>
      </div>

      {/* Main Section */}
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:py-14 mr-20">
        <div className="space-y-5">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl">
            About Me
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base max-w-3xl font-light leading-relaxed">
            Transitioning Technical Support Professional with a growing passion for data analytics and visualization...
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl">Job Experience</h2>
          <div className="flex flex-col lg:flex-row lg:gap-20 max-w-3xl">
          </div>
        </div>

        {/* Job Experience Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b border-gray-300 dark:border-gray-700 p-5 max-w-3xl">
          <ul className="relative">
            <div className="absolute left-[9px] top-0 h-full w-[1px] bg-gray-300 dark:bg-gray-700"></div>

            {/* Entain Group */}
            <li className="relative flex flex-col gap-1 pl-8">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">CUSTOMER SUPPORT ANALYST</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">2024 - Current</span>
              </div>
              <span className="font-light tracking-wide mb-4">Entain Group ¦ Lisbon</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Demonstrated expertise in providing exceptional customer support...
              </p>
            </li>

            {/* Accenture */}
            <li className="relative flex flex-col gap-1 pl-8 mt-6">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">CONTENT MODERATION SPECIALIST</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">2023 - 2024</span>
              </div>
              <span className="font-light tracking-wide mb-4">Accenture ¦ Lisbon</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Managed content moderation operations using data-driven approaches...
              </p>
            </li>

            {/* Wisdom */}
            <li className="relative flex flex-col gap-1 pl-8 mt-6">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">DESKTOP SUPPORT TECHNICIAN</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">2014 - 2017</span>
              </div>
              <span className="font-light tracking-wide mb-4">Wisdom Hardware ¦ São Paulo</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Technical support operations for a major hardware retailer...
              </p>
            </li>

            {/* Souza Cruz */}
            <li className="relative flex flex-col gap-1 pl-8 mt-6">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">IT SUPPORT SPECIALIST</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">2005 - 2011</span>
              </div>
              <span className="font-light tracking-wide mb-4">Souza Cruz ¦ São Paulo</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Provided comprehensive IT support for regional office operations...
              </p>
            </li>
          </ul>
        </div>
      </main>

      {/* Courses Section */}
      <div className="flex max-w-[1000px] flex-col gap-3 px-10 -mt-5 mr-20">
        <div className="space-y-10">
          <h2 className="text-xl font-light tracking-wide md:text-2xl">Courses & Certifications</h2>
          <div className="relative max-w-3xl mt-6">
            <div className="absolute left-[9px] top-[1px] h-[calc(100%-8px)] w-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <div className="absolute md:left-[calc(50%+25px)] left-[9px] top-[1px] h-[calc(100%-8px)] w-[1px] bg-gray-300 dark:bg-gray-700"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Course 1 */}
              <div className="relative pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">Data Visualization: A Lesson and Listen Series</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Linkedin Learning</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2024 - 2025</p>
                </div>
              </div>

              {/* Course 2 */}
              <div className="relative pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">SQL for Data Science</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Coursera</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2024</p>
                </div>
              </div>

              {/* Course 3 */}
              <div className="relative pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">Financial Modeling Foundations</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Linkedin Learning</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2023</p>
                </div>
              </div>

              {/* Course 4 */}
              <div className="relative pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">Google Data Analytics Professional Certificate</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Coursera</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
