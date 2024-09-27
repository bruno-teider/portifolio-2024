import React from "react";
import "./Plantae.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";

const Plantae = ({ getFrameId }) => {
  return (
    <div className="plantae">
      <Marquee content="Plantae" />

      <div className="project-content">
        <div className="text-container">
          <div className="top-text">
            <h1 className="date-text">2021</h1>
          </div>

          <div className="text-image-wrapper">
            <h3 className="main-text">
              ㅤO Plantae foi meu projeto de conclusão de curso para o Tecpuc
              (ensino médio técnico) e um dos primeiros grandes projetos em
              equipe que participei, onde atuei principalmente no design e no
              desenvolvimento web. No Plantae, desenvolvemos uma mini estufa
              automatizada para plantas, projetada para simplificar e facilitar
              o cultivo delas para quem tem pouco espaço.
              <br />
              <br />
              ㅤO usuário precisa apenas reabastecer o reservatório de água;
              todo o restante é controlado automaticamente. O sistema utiliza
              sensores para monitorar a umidade do solo, a temperatura e o nível
              de água no reservatório, todos conectados a um Arduino. As
              informações coletadas são apresentadas em tempo real em uma
              dashboard.
            </h3>
            <div className="image-container">
              <img
                alt="plantae-1"
                className="image"
                src={`${process.env.PUBLIC_URL}/assets/plantae/plantae_inicial_gif.gif`}
              />
              <img
                alt="plantae-2"
                className="image"
                src={`${process.env.PUBLIC_URL}/assets/plantae/plantae_login.png`}
              />
              <img
                alt="plantae-3"
                className="image"
                src={`${process.env.PUBLIC_URL}/assets/plantae/plantae_status_funcionando.png`}
              />
              <img
                alt="plantae-4"
                className="image"
                src={`${process.env.PUBLIC_URL}/assets/plantae/plantae_gif.gif`}
              />
            </div>
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default Plantae;
