import React from "react";
import "./WeatherForecast.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";
import TopText from "../components/TopText/TopText";

const WeatherForecast = ({ getFrameId }) => {
  return (
    <div className="project-frame">
      <Marquee content="Weather Forecast" />

      <div className="project-content">
        <div className="text-container">
          <TopText
            date={"06.2024"}
            link={"https://github.com/bruno-teider/Weather-Forecast"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              O Weather Forecast é uma aplicação web desenvolvida em React que
              exibe previsões meteorológicas detalhadas para diversas
              localidades. Integrando a API do OpenWeatherMap, o projeto permite
              que os usuários obtenham informações precisas sobre a previsão do
              tempo, incluindo temperatura, umidade, velocidade do vento, e
              condições climáticas para os próximos dias. Ela também possui
              componentes da Material-UI para realizar alertas sobre possíveis
              erros. Apresenta um background dinâmico que varia de acordo com a
              condição climática na cidade pesquisada, proporcionando uma
              experiência visual imersiva e interativa.
            </h3>
            <div className="image-container">
              <img
                alt="weather-forecast-2"
                className="image-1"
                src={"../../assets/weather-forecast-2.png"}
              />
              <img
                alt="weather-forecast-3"
                className="image-2"
                src={"../../assets/weather-forecast-3.png"}
              />
            </div>
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default WeatherForecast;
