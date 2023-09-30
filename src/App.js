import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
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
  <div className="app bg-black">
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage} 
    setselectedPage={setselectedPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        <DotGroup
        selectedPage={selectedPage} 
        setselectedPage={setselectedPage}
        />
      )}
      <Landing setselectedPage={setselectedPage} />
    </div>
  </div>


  );
}

export default App;
