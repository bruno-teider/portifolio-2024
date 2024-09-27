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
            date={"07.2024"}
            link={"https://github.com/bruno-teider/Color-Palette-Generator"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              ㅤO Color Palette Generator é um site desenvolvido em React que
              permite a geração de diferentes paletas de cores. Utilizando a API
              Colormind, ele gera combinações de cores, permitindo que os
              usuários encontrem diferentes opções de paletas para seus
              projetos.
              <br />
              <br />
              ㅤO Projeto oferece a possibilidade de copiar as paletas e cores
              diretamente para a área de transferência. Tem a integração de
              React, Material-UI e APIs externas, além de um design simples
              neubrutalista.
            </h3>
            <img
              alt="color-palette-image"
              className="color-palette-image"
              src={`${process.env.PUBLIC_URL}/assets/color-palette.gif`}
            />
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default ColorPalette;
