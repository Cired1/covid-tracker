import styles from "./Header.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Header = () => {
  const { theme, handleTheme } = useThemeContext();

  return (
    <header className={styles.wrapper}>
      <div className={styles.center}>
        <h2 className={styles.title}>Casos de Covid-19</h2>
        <button className={styles.toggle} onClick={handleTheme}>
          {theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
        </button>
      </div>
    </header>
  );
};

export default Header;
