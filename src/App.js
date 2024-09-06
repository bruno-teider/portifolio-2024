import { useState } from "react";
import "./App.css";
import "./Background.css";
import MainFrame from "./frames/main/MainFrame";
import ProjectsFrame from "./frames/projects/ProjectsFrame/ProjectsFrame";
import ColorPalette from "./frames/projects/colorPalette/ColorPalette";
import WeatherForecast from "./frames/projects/weatherForecast/WeatherForecast";
import RabbitHole from "./frames/projects/RabbitHole/RabbitHole";
import Nicolabs from "./frames/projects/Nicolabs/Nicolabs";
import GoofyGlory from "./frames/projects/GoofyGlory/GoofyGlory";
import Plantae from "./frames/projects/Plantae/Plantae";
import About from "./frames/about/About";

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
        return <About getFrameId={getFrameId} />;
      case 3:
        return <ColorPalette getFrameId={getFrameId} />;
      case 4:
        return <WeatherForecast getFrameId={getFrameId} />;
      case 5:
        return <GoofyGlory getFrameId={getFrameId} />;
      case 6:
        return <RabbitHole getFrameId={getFrameId} />;
      case 7:
        return <Nicolabs getFrameId={getFrameId} />;
      case 8:
        return <Plantae getFrameId={getFrameId} />;
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
