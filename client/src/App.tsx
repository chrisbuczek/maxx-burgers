import "./App.css";
import { ThreeButtons } from "./components/ThreeButtons/ThreeButtons";

function App() {
  // useEffect(() => {
  //   const data = await fetch("http://localhost:8080")
  // }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="video relative">
          <video src={"/video0.mp4"} autoPlay loop />
        </div>
        <div className="">
          <ThreeButtons className="relative top-[-6rem]" />
        </div>
      </div>
    </>
  );
}

export default App;
