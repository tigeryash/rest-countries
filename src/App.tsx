import { useState, useEffect } from "react";
import "@fontsource-variable/nunito-sans";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      return savedTheme;
    }
    // If no theme in localStorage, check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // Default to light
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="text-text bg-background transition-all duration-300 min-h-screen">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Outlet />
    </main>
  );
}

export default App;
