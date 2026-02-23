import React, { useState, useEffect } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // UseEffect to set the initial mode based on darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // Only run this when darkMode changes

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // This will toggle darkMode
  };

  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {/* Sidebar (HeaderLeft) */}
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content (Home) */}
        <Home />
      </div>
    </>
  );
}

export default App;