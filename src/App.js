import { useState } from "react";
import "./App.css";
import MainFrame from "./frames/main/MainFrame";
import "./Background.css";

function App() {
  const bubbles = [1, 2, 3, 4, 5];
  const [currentFrame, setCurrentFrame] = useState(0);

  const mainToParent = (frameId) => {
    setCurrentFrame(frameId);
  };

  const renderFrame = () => {
    switch (currentFrame) {
      case 0:
        return <MainFrame mainToParent={mainToParent} />;
      case 1:
        return <h1>Projects</h1>;
      case 2:
        return <h1>About</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="gradient-bg">
        {/* The Background bubbles */}
        <div className="gradients-container">
          {bubbles.map((index) => (
            <div class={`g${index} key={index}`} />
          ))}
        </div>

        {renderFrame()}
      </div>
    </div>
  );
}

export default App;
