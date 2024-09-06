import React from "react";
import "./About.css";
import BackButton from "../projects/components/BackButton/BackButton";

const About = ({ getFrameId }) => {
  return (
    <div className="about-frame">
      <div className="about-content">
        <div className="text-wrapper">
          <h1 className="name">Bruno Teider</h1>

          <h3 className="main-text">
            O Color Palette Generator é uma aplicação desenvolvida em React que
            permite a geração de diferentes paletas de cores. Utilizando a API
            Colormind, a aplicação gera combinações de cores harmoniosas,
            permitindo que os usuários explorem diferentes opções de paletas
            para seus projetos. A interface intuitiva e responsiva facilita a
            navegação e a seleção de cores, além de oferecer a possibilidade de
            copiar as paletas e cores diretamente para a área de transferência.
            Este projeto demonstra a integração eficiente entre React,
            Material-UI e APIs externas, destacando-se pela usabilidade simples
            e pelo design moderno.
          </h3>
        </div>
      </div>

      <img alt="my-picture" className="my-picture" src="../../assets/eu.JPG" />

      <div className="back-container-about">
        <hr />
        <h1 onClick={() => getFrameId(0)}>Back</h1>
        <hr />
      </div>
    </div>
  );
};

export default About;
