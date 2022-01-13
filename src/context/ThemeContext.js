import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

//we’re checking if the user has set a theme preference in their browser settings.
const initialValue = window.matchMedia("(prefers-color-scheme: dark)").matches; //

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //we’re creating a stateful theme variable that is tied to localStorage and the setTheme function to update theme
  const [theme, setTheme] = useLocalStorage(
    "theme",
    initialValue ? "dark" : "light"
  );

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
