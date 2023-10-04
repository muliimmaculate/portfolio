import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";




function App() {
  const [selectedPage, setselectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);

    } 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
  <div className="app bg-deep-blue">
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage} 
    setselectedPage={setselectedPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
      <Landing setselectedPage={setselectedPage} />
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full">
      <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
      <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
      <Contact />
      </div>
  </div>


  );
}

export default App;
