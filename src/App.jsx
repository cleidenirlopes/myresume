import React, { useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${
          darkMode ? "bg-black" : "bg-white"
        }`}
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
