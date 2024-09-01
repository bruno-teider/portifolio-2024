import { useState } from "react";
import "./App.css";
import MainFrame from "./frames/main/MainFrame";
import ProjectsFrame from "./frames/projects/ProjectsFrame/ProjectsFrame";
import ColorPalette from "./frames/projects/colorPalette/ColorPalette";
import WeatherForecast from "./frames/projects/weatherForecast/WeatherForecast";
import "./Background.css";

function App() {
  const bubbles = [1, 2, 3, 4, 5];
  const [currentFrame, setCurrentFrame] = useState(0);

  const getFrameId = (frameId) => {
    setCurrentFrame(frameId);
  };

  const renderFrame = () => {
    switch (currentFrame) {
      case 0:
        return <MainFrame getFrameId={getFrameId} />;
      case 1:
        return <ProjectsFrame getFrameId={getFrameId} />;
      case 2:
        return <h1>About</h1>;
      case 3:
        return <ColorPalette getFrameId={getFrameId} />;
      case 4:
        return <WeatherForecast getFrameId={getFrameId} />;
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
