import React, { useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Use prevMode to ensure toggling correctly
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
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

