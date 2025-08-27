import "./App.css";
import { ThreeButtons } from "./components/ThreeButtons/ThreeButtons";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <video src={"/video0.mp4"} autoPlay loop />
        <ThreeButtons />
      </div>
    </>
  );
}

export default App;
