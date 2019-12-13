import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = value => {
  const [darkMode, setDarkMode] = useLocalStorage("darkmode", value);

  useEffect(() => {
    const item = window.localStorage.getItem("darkmode");
    const bodyElement = document.getElementsByTagName("body");

    if (item && darkMode) bodyElement[0].classList.add("dark-mode");
    else bodyElement[0].classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
