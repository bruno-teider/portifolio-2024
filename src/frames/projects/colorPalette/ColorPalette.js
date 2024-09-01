import React from "react";
import "./ColorPalette.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";
import TopText from "../components/TopText/TopText";

const ColorPalette = ({ getFrameId }) => {
  return (
    <div className="project-frame">
      <Marquee content="Color Palette Generator" />

      <div className="project-content">
        <div className="text-container">
          <TopText
            date={"08.2024"}
            link={"https://github.com/bruno-teider/Color-Palette-Generator"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              O Color Palette Generator é uma aplicação desenvolvida em React
              que permite a geração de diferentes paletas de cores. Utilizando a
              API Colormind, a aplicação gera combinações de cores harmoniosas,
              permitindo que os usuários explorem diferentes opções de paletas
              para seus projetos. A interface intuitiva e responsiva facilita a
              navegação e a seleção de cores, além de oferecer a possibilidade
              de copiar as paletas e cores diretamente para a área de
              transferência. Este projeto demonstra a integração eficiente entre
              React, Material-UI e APIs externas, destacando-se pela usabilidade
              simples e pelo design moderno.
            </h3>
            <img
              alt="image-container"
              className="image-container"
              src="../../assets/color-palette.gif"
            />
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default ColorPalette;
