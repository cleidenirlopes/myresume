import React from 'react';
import {
  BiSun,
  BiMoon,
  BiCurrentLocation,
  BiPhone,
  BiEnvelope,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiBriefcase,
} from "react-icons/bi";

function HeaderLeft({ darkMode, toggleDarkMode }) {
  return (
    <aside className="w-3/10 min-h-screen p-5 dark:bg-[#151a1e] dark:text-white font-light">
      <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-[#151a1e] dark:text-white sm:border-r dark:border-gray-900">
        <div className="flex flex-col gap-5">
          {/* Profile Section */}
          <div className="flex flex-col items-center justify-center gap-5 relative">
            <img 
              src="/peaches.jpg" 
              alt="Profile" 
              className="w-64 rounded-full"
            />
            <button
              className="absolute right-0 -top-12 p-2 rounded-full bg-gray-700 text-white"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <BiSun className="text-2xl text-yellow-400" /> : <BiMoon className="text-2xl" />}
            </button>
          </div>

          {/* Contact Section */}
          <section className="flex flex-col items-start gap-5 border-b border-gray-700 p-5">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BiCurrentLocation className="text-xl" />
                <span className="font-light tracking-wide">Lisbon, Portugal </span>
              </li>
              <li className="flex items-center gap-2">
                <BiEnvelope className="text-xl" />
                <span className="font-light tracking-wide">cleidenirlopes@outlook.com</span>
              </li>
              <li className="flex items-center gap-2">
                <BiPhone className="text-xl" />
                <span className="font-light tracking-wide">+351 914 569 328</span>
              </li>
            </ul>
          </section>

          {/* Social Section */}
          <section className="flex flex-col gap-5 border-b border-gray-700 p-5">
            <h1 className="text-base font-medium tracking-wide md:text-2xl text-left">SOCIAL</h1>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BiLogoGithub className="text-xl" />
                <a href="https://github.com/cleidenirlopes" target="_blank" rel="noopener noreferrer" className="font-light tracking-wide hover:underline">Github</a>
              </li>
              <li className="flex items-center gap-2">
                <BiLogoTwitter className="text-xl" />
                <a href="https://x.com/DCledenir" target="_blank" rel="noopener noreferrer" className="font-light tracking-wide hover:underline">Twitter - X</a>
              </li>
              <li className="flex items-center gap-2">
                <BiLogoLinkedin className="text-xl" />
                <a href="https://www.linkedin.com/in/decledenir/" target="_blank" rel="noopener noreferrer" className="font-light tracking-wide hover:underline">Linkedin</a>
              </li>
            </ul>
          </section>

          {/* Portfolio Section */}
          <div className="flex flex-col items-start justify-start gap-5 border-b border-gray-700 p-5">
            <h1 className="section-title">
              <span className="text-black dark:text-white">
                PORTFOLIO
              </span>
            </h1>
            <li className="flex items-center gap-2">
              <BiBriefcase className="text-xl" />
              <a href="https://cledenir-portifolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline">My Portfolio</a>
            </li>
          </div>

         

          {/* Education Section */}
          <div className="flex flex-col items-start justify-start gap-5 p-5">
            <h1 className="text-base font-semibold md:text-2xl text-left">EDUCATION</h1>
            <ul className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[9px] top-0 h-full w-[1px] bg-gray-700"></div>

              {/* First Education Entry */}
              <li className="relative flex flex-col gap-1 pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="flex justify-between items-center w-full gap-8">
                  <span className="font-semibold md:text-lg">Computer Science</span>
                  <span className="text-sm text-gray-400">1998 - 2003</span>
                </div>
                <span className="font-light">University Unicamp</span>
              </li>

              {/* Second Education Entry */}
              <li className="relative flex flex-col gap-1 pl-8 mt-6">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="flex justify-between items-center w-full gap-8">
                  <span className="font-semibold md:text-lg">Data Analytics</span>
                  <span className="text-sm text-gray-400">2024 - 2025</span>
                </div>
                <span className="font-light">IronHack</span>
              </li>
            </ul>
          </div>

          {/* Personality Section */}
          <section className="flex flex-col gap-5 border-b border-gray-700 p-5">
            <h1 className="text-base font-semibold md:text-2xl text-left">PERSONALITY</h1>
            <ul className="space-y-2">
              <li>Communicative</li>
              <li>Decision-Making</li>
              <li>Problem Solve</li>
              <li>Active / Listening</li>
            </ul>
          </section>

          {/* Skills Section */}
          <div className="flex flex-col gap-5 border-b border-gray-700 p-5">
            <h1 className="text-base font-semibold md:text-2xl text-left">SKILLS</h1>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-gray-700 text-white p-2 text-center">Data Analysis</span>
              <span className="rounded-xl bg-gray-700 text-white p-2 text-center">Data Visualization</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-gray-700 text-white p-2 text-center">SQL & Databases</span>
              <span className="rounded-xl bg-gray-700 text-white p-2 text-center">Python</span>
              <span className="rounded-xl bg-gray-700 text-white p-2 text-center">Excel</span>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="flex flex-col gap-5 border-b border-gray-700 p-5">
            <h1 className="text-base font-semibold md:text-2xl text-left">HOBBIES</h1>
            <ul className="space-y-3">
              <div className="flex flex-wrap gap-16 p-3">
                <ul className="flex list-disc flex-col gap-3">
                  <li>Photography</li>
                  <li>Cycling</li>
                  <li>Digital Creation</li>
                </ul>
                <ul className="flex list-disc flex-col gap-3">
                  <li>Reading</li>
                  <li>Running</li>
                  <li>Dance</li>
                </ul>
              </div>
            </ul>
          </div>

           {/* Language Section */}
           <section className="flex flex-col gap-5 border-b border-gray-700 p-5">
            <h1 className="text-base font-semibold md:text-2xl text-left">LANGUAGE</h1>
            <ul className="space-y-3">
              <li>English (Fluent)</li>
              <li>Portuguese (Native)</li>
              <li>Spanish (Intermediate)</li>
            </ul>
          </section>
          
          
        {/* Download Resume Info Link (Text with Icon) */}
        <div className="flex justify-center p-5 mt-5">
          <a
            href="/CV-Cledenir-Data.pdf"
            download="CV-Cledenir-Data.pdf"
            className="text-center text-black dark:text-white text-lg md:text-xl font-medium tracking-wide flex items-center gap-2 hover:underline hover:text-blue-500 transition"
            onClick={(e) => e.stopPropagation()} // Prevent any theme change
          >
            <span className="text-blue-400 text-2xl">⬇️</span>
            Get the CV in PDF
          </a>
        </div>

       </div>
      </div>
    </aside>
  );
}


export default HeaderLeft;
