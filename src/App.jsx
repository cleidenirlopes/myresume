import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AdditionalExperience from "./components/AdditionalExperience";
import Credentials from "./components/Credentials";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="mt-12 flex flex-col gap-14">
          <About />
          <Skills />
          <Experience />
          <AdditionalExperience />
          <Credentials />
        </main>
        <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cledenir Souza.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
