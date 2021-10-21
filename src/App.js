import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  const [DarkTheme, setDarkTheme] = useState();

  return (
    <div className={DarkTheme && "dark"}>
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={DarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
