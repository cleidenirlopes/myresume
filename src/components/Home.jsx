import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 bg-[#3F3C3A] text-[#DDE225] font-light">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center gap-5 relative mt-20 max-w-3xl mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-6xl font-extralight tracking-wide text-[#D64218]">
            Cledenir <span className="font-medium">Souza</span>
          </h1>
          <h3 className="text-3xl font-extralight tracking-wider text-[#A5ABAF]">
            Data Analyst
          </h3>
        </div>
      </div>

      {/* Main Section */}
      <main className="max-w-[1000px] flex flex-col gap-10 p-5 mx-auto mt-10">
        <div className="space-y-5">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl text-[#DDE225]">About Me</h2>
          <p className="text-sm text-[#A5ABAF] md:text-base max-w-3xl font-light leading-relaxed">
            Transitioning Technical Support Professional with a growing passion for data analytics and visualization...
          </p>
        </div>

        {/* Job Experience Section */}
        <div className="space-y-10">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl text-[#DDE225]">Job Experience</h2>
          <ul className="relative max-w-3xl">
            <div className="absolute left-[9px] top-0 h-full w-[1px] bg-[#605D5C]"></div>
            {[ 
              { role: "CUSTOMER SUPPORT ANALYST", company: "Entain Group ¦ Lisbon", period: "2024 - Current" },
              { role: "CONTENT MODERATION SPECIALIST", company: "Accenture ¦ Lisbon", period: "2023 - 2024" },
              { role: "DESKTOP SUPPORT TECHNICIAN", company: "Wisdom Hardware ¦ São Paulo", period: "2014 - 2017" },
              { role: "IT SUPPORT SPECIALIST", company: "Souza Cruz ¦ São Paulo", period: "2005 - 2011" }
            ].map((job, index) => (
              <li key={index} className="relative flex flex-col gap-1 pl-8 mt-6">
                <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#D64218]"></div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium tracking-wide md:text-lg text-[#DDE225]">{job.role}</span>
                  <span className="text-sm text-[#A5ABAF] font-light">{job.period}</span>
                </div>
                <span className="font-light tracking-wide text-[#DDE225]">{job.company}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div className="space-y-10">
          <h2 className="text-xl font-medium tracking-wide md:text-2xl text-[#DDE225]">Courses & Certifications</h2>
          <div className="relative max-w-3xl">
            <div className="absolute left-[9px] top-[1px] h-full w-[1px] bg-[#605D5C]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[ 
                { title: "Data Visualization", provider: "LinkedIn Learning", year: "2024 - 2025" },
                { title: "Advanced Python", provider: "LinkedIn Learning", year: "2025" },
                { title: "Financial Modeling", provider: "LinkedIn Learning", year: "2023" },
                { title: "Cloud Computing", provider: "Skillsoft", year: "2023" }
              ].map((course, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-[#D64218]"></div>
                  <h3 className="font-light tracking-wide text-base text-[#DDE225]">{course.title}</h3>
                  <p className="font-light text-[#A5ABAF]">{course.provider}</p>
                  <p className="text-sm text-[#605D5C]">{course.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
