"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./styleButtonTheme.css";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const switchToLight = () => {
    setTheme("light");
  };

  const switchToDark = () => {
    setTheme("dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="theme d-flex justify-content-center align-items-center">
      {theme === "dark" ? (
        <i class="fa-solid fa-sun" onClick={switchToLight}></i>
      ) : (
        <i class="fa-solid fa-moon" onClick={switchToDark}></i>
      )}
    </div>
  );
}
