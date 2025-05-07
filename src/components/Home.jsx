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
         Aspiring Data Analyst with a strong background in Technical Support, recently graduated from an intensive Data Analytics Bootcamp at IronHack. Skilled in Python, SQL, and data visualization tools such as Power BI and Tableau.
         Known for sharp problem-solving abilities, attention to detail, and a talent for interpreting complex datasets to uncover trends and actionable insights. Passionate about turning data into clear, data-driven decisions that support continuous improvement.
         Bringing over 5 years of experience in customer-facing roles, combining technical aptitude with excellent communication skills. Eager to contribute to impactful data projects while continuously evolving as a data professional.
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Personal Project • 2025</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Connected abandoned dogs with shelters using real data and APIs.
          </p>
          <span className="text-sm font-medium">Built using:</span>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-gray-400 space-y-1">
            <li>Python • SQL • Streamlit</li>
            <li>Petfinder API • Google Maps API</li>
            <p className="mt-1 text-sm">📌 More details available in my portfolio.</p>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="relative px-3">

          {/* Timeline-style vertical line */}
          <div className="absolute left-[-2px] top-[1px] h-full w-[1px] bg-gray-300 dark:bg-gray-700 z-0"></div>
          <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-[#2b88c6]"></div>           

          <h3 className="font-medium text-lg">The Escape Room</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Game Design • 2025</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A fast-paced, immersive game focused on logic and creativity.
          </p>
          <span className="text-sm font-medium">Built using:</span>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-gray-400 space-y-1">
            <li>Critical thinking under pressure</li>
            <li>Teamwork and puzzle-solving mechanics</li>
            <p className="mt-1 text-sm">📌 More details available in my portfolio.</p>
          </ul>
        </div>

        {/* Project 3 */}
      <div className="relative px-3">
         {/* Timeline-style vertical line */}
         <div className="absolute left-[-2px] top-[1px] h-full w-[1px] bg-gray-300 dark:bg-gray-700 z-0"></div>
        <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-[#2b88c6]"></div>
        <h3 className="font-medium text-lg">Immigration Data Visualization</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Data Visualization Project • 2025</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Explored global migration trends by origin and destination.
        </p>
        <span className="text-sm font-medium">Built using:</span>
        <ul className="list-disc list-inside text-sm ml-4 text-gray-600 dark:text-gray-400 space-y-1">
        <li>Analyzed data with Python.</li>
        <li>Built Power BI dashboards for migration insights.</li>
        </ul>

        <p className="mt-1 text-sm">📌 More details available in my portfolio.</p>
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
                <span className="font-medium tracking-wide md:text-lg">CUSTOMER SUPPORT ANALYST</span>
                <span className="text-sm text-gray-800 dark:text-gray-300 font-light">2024 - 2025</span>
              </div>
              <span className="font-light tracking-wide mb-4">Entain Group ¦ Lisbon</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base font-light leading-relaxed">
                Delivered frontline support for a global gaming platform, balancing user satisfaction with operational efficiency.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Resolved complex inquiries to maintain a <strong>high customer satisfaction rate</strong>.</li>
                <li>Detected support trends through <strong>issue pattern analysis</strong>.</li>
                <li>Improved user experience using <strong>data-driven feedback loops</strong>.</li>
                <li>Streamlined operations by <strong>collaborating with cross-border teams</strong>.</li>
              </ul>
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
                Oversaw moderation workflows for a leading digital platform, ensuring compliance and safety through policy enforcement and real-time issue management.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Enhanced platform integrity using <strong>data-driven content review strategies</strong>.</li>
                <li>Boosted response efficiency by <strong>30%</strong> through CRM analysis and reporting.</li>
                <li>Identified trends via <strong>systematic data collection</strong> for proactive issue mitigation.</li>
                <li>Co-developed <strong>KPI dashboards</strong> with analytics teams for performance monitoring.</li>
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
            Technical support operations for a major hardware retailer, managing system diagnostics and performance optimization.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
            <li>Reduced average resolution time by <strong>25%</strong> through detailed technical documentation.</li>
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
                <div  className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
                <div className="space-y-1">
                  <h3 className="font-light tracking-wide text-base">Financial Modeling Foundations</h3>
                  <p className="font-light text-base text-gray-600 dark:text-gray-400">Linkedin Learning</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">2023</p>
                </div>
              </div>

              {/* Course 4 */}
              <div className="relative pl-8">
                <div  className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#2b88c6]"></div>
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
}

export default Home;