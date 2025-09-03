import "./App.css";
import ChooseCup from "./components/ChooseCup/ChooseCup";
import { ThreeButtons } from "./components/ThreeButtons/ThreeButtons";
import { useEffect, useState } from "react";
import { useQuery } from "./hooks/useQuery";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const { data, isLoading, isSuccess, isError } = useQuery();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="absolute w-full mx-auto">
          <video src={"/video0.mp4"} autoPlay loop />
          {/* bottom beige */}
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
            <div>
              {data &&
                data?.categories.map((category) => <div>{category.name}</div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
