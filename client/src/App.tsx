import "./App.css";
import ChooseCup from "./components/ChooseCup/ChooseCup";
import { ThreeButtons } from "./components/ThreeButtons/ThreeButtons";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const data = await fetch("http://localhost:8080")
  // }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="absolute w-full mx-auto">
          <video src={"/video0.mp4"} autoPlay loop />
          <div
            className="bg-maxbeige absolute bottom-0  w-full h-[500px] z-2 flex flex-col items-center transition-all"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <ThreeButtons className="absolute top-[-50px]" />
            <div className="mt-20">
              <ChooseCup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
