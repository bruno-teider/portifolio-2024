import React from "react";
import "./Nicolabs.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";
import TopText from "../components/TopText/TopText";

const Nicolabs = ({ getFrameId }) => {
  return (
    <div className="nicolabs">
      <Marquee content="Nicolabs" />

      <div className="project-content">
        <div className="text-container">
          <TopText
            date={"05.2024"}
            link={"https://github.com/bruno-teider/Nicolabs"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              O projeto NicoLabs é uma aplicação web full-stack desenvolvida com
              Python e Flask, utilizando uma arquitetura MVC. Ele integra
              dispositivos IoT, como Esp32, para monitoramento e controle de
              sensores e atuadores através de um dashboard interativo. As
              funcionalidades incluem autenticação de usuários, exibição de
              dados em tempo real, controle de atuadores, e armazenamento de
              dados em banco de dados. A interface é responsiva, incorporando
              CSS, JavaScript e outros recursos estáticos. O projeto foi feito
              em equipe como para a matéria de Soluções Computacionais.
            </h3>
            <div className="image-container">
              <img
                alt="nicolabs-1"
                className="image"
                src={"../../assets/nicolabs/nicolabs-1.png"}
              />
              <img
                alt="nicolabs-2"
                className="image"
                src={"../../assets/nicolabs/nicolabs-2.png"}
              />
              <img
                alt="nicolabs-3"
                className="image"
                src={"../../assets/nicolabs/nicolabs-3.png"}
              />
              <img
                alt="nicolabs-4"
                className="image"
                src={"../../assets/nicolabs/nicolabs-4.png"}
              />
            </div>
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default Nicolabs;
