import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 bg-[#ffffff] text-[#151a1e] dark:bg-[#151a1e] dark:text-[#ffffff] font-light">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center gap-5 relative mt-20 mr-20 max-w-3xl">
        <div className="space-y-2 text-center">
          <h1 className="text-6xl font-extralight tracking-wide">
            <span className="text-black dark:text-white">
              Cledenir
            </span>
            <span className="font-medium text-[#2b88c6]">
              Souza
            </span>
          </h1>
          <h3 className="text-3xl font-extralight tracking-wider text-[#151a1e] dark:text-[#d8dcde]">
            Data Operations Analyst
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
            Impact-driven <strong>Data Analyst</strong> with extensive experience in <strong>consulting support</strong>, <strong>customer-facing roles</strong>, and <strong>data visualization</strong>. Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and <strong>Excel</strong>, with a proven track record of analysing complex datasets, delivering actionable insights, and creating high-quality reports. Experienced in <strong>technical support</strong> and <strong>quality assurance</strong>, ensuring accuracy, compliance, and effective communication across diverse teams. Recognized for strong <strong>problem-solving abilities</strong>, meticulous <strong>attention to detail</strong>, and fostering collaborative relationships that drive <strong>operational efficiency</strong> and <strong>data-driven decision-making</strong>.<br /><br />
            <strong>Linguistic Expertise:</strong> Native Portuguese (BR/PT), Fluent English (C2), Bilingual Documentation
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl">Projects</h2>
          <div className="flex flex-col lg:flex-row lg:gap-20 max-w-3xl">
          </div>
        </div>

        {/* Projects Section */}

        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto relative">
          {/* Project 1 */}
          <div className="relative px-3">
            {/* Timeline-style vertical line */}
            <div className="absolute left-[-2px] top-[1px] h-full w-[1px] bg-gray-300 dark:bg-gray-700 z-0"></div>
            {/* Blue dot */}
            <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-[#2b88c6] z-10"></div>

            <h3 className="font-medium text-lg">The Guardians of the Voiceless</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Personal Project • April - 2025</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Connected abandoned dogs with shelters using real data and APIs.
            </p>
            <span className="text-sm font-medium">Built using:</span>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Python • SQL • Streamlit</li>
              <li>Petfinder API • Google Maps API</li>
              <p className="mt-1 text-sm">📌https://cledenir-portifolio.netlify.app/.</p>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="relative px-3">

            {/* Timeline-style vertical line */}
            <div className="absolute left-[-2px] top-[1px] h-full w-[1px] bg-gray-300 dark:bg-gray-700 z-0"></div>
            <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-[#2b88c6]"></div>

            <h3 className="font-medium text-lg">The Escape Room</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Game Building • Dezember - 2024</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A fast-paced, immersive game focused on logic and creativity.
            </p>
            <span className="text-sm font-medium">Built using:</span>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Critical thinking under pressure</li>
              <li>Teamwork and puzzle-solving</li>
              <p className="mt-1 text-sm">📌https://cledenir-portifolio.netlify.app/.</p>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="relative px-3">
            {/* Timeline-style vertical line */}
            <div className="absolute left-[-2px] top-[1px] h-full w-[1px] bg-gray-300 dark:bg-gray-700 z-0"></div>
            <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-[#2b88c6]"></div>
            <h3 className="font-medium text-lg">Migration Data Visualization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Data Visualization Project • May - 2025.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Explored global migration trends by origin and destination.
            </p>
            <span className="text-sm font-medium">Built using:</span>
            <ul className="list-disc list-inside text-sm ml-4 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Analyzed data with Python.</li>
              <li>Built Power BI dashboards for migration insights.</li>
            </ul>

            <p className="mt-1 text-sm">📌https://cledenir-portifolio.netlify.app/.</p>
          </div>
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
            <li className="relative flex flex-col gap-1 pl-8 mt-6">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">DATA OPERATIONS - CUSTOMER SUPPORT ANALYST</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">Nov 2024 - May 2025</span>
              </div>
              <span className="font-light tracking-wide mb-4">Entain Group ¦ Lisbon</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Provided <strong>customer support</strong> for technical, product, and account-related issues while assisting internal teams with <strong>data collection</strong> and <strong>operational dataset handling</strong>.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Supported a global gaming platform and adapted communication for diverse gaming audiences.</li>
                <li>Provided <strong>technical troubleshooting</strong> and product support for app-based issues and payment systems.</li>
                <li>Maintained <strong>high CSAT</strong> through timely resolutions and empathetic communication.</li>
                <li>Collaborated with product and technical teams to <strong>validate operational data</strong> during issue escalations.</li>
              </ul>
            </li>


            {/* Accenture */}
            <li className="relative flex flex-col gap-1 pl-8 mt-6">
              <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
              <div className="flex justify-between items-center w-full gap-32">
                <span className="font-medium tracking-wide md:text-lg">DATA STEWARD ASSISTANT / DATA OPERATIONS SUPPORT</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">Feb 2019 - Oct 2023</span>
              </div>
              <span className="font-light tracking-wide mb-4">Accenture ¦ Lisbon</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Requested and collected datasets from various business units (Sales, HR, Finance), ensuring <strong>complete and timely data delivery</strong>.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Performed <strong>dataset mapping</strong>, identifying data owners, creators, and storage locations.</li>
                <li>Verified dataset structure, completeness, and integrity using <strong>Excel and SQL</strong>.</li>
                <li>Used <strong>SSIS</strong> to support small ETL workflows, including ingestion, basic cleaning, and transformations.</li>
                <li>Documented all dataset sources, rules, and validation procedures in <strong>Confluence</strong> for governance and transparency.</li>
              </ul>
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
                Technical support operations for a major hardware retailer, managing <strong>system diagnostics</strong> and <strong>performance optimization</strong>.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Reduced average resolution time <strong></strong> through detailed <strong>technical documentation</strong>.</li>
                <li>Implemented hardware/software tracking to support <strong>data-driven maintenance decisions</strong>.</li>
                <li>Collaborated with vendors to improve <strong>hardware lifecycle management</strong>.</li>
              </ul>
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
                  <h3 className="font-light tracking-wide text-base">Data Visualization:</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Linkedin Learning</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2024 - 2025</p>
                </div>
              </div>

              {/* Course 2 */}
              <div className="relative pl-8">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">SQL for Data Science</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Linkedin Learning</p>
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
                  <h3 className="font-light tracking-wide text-base">Practical GCP for DevOps: Google Cloud Platform Basics
                  </h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">SkillSoft</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;