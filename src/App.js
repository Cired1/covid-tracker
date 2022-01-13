import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
