import { useState } from "react";
import DarkMode from "./DarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "./../assets/logo.png";

export default function Navbar() {
  const [colorTheme, setTheme] = DarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <nav className="flex justify-between items-center mr-2 ml-2 mt-[-40px]">
      <img src={logo} alt="logo" className="w-32 ml-[-25px]" />
      <ul className="flex gap-12 text-lg cursor-pointer dark:hover:caret-yellow-300">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li></li>
      </ul>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={16} />
    </nav>
  );
}
