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
            ㅤOlá! Meu nome é Bruno Teider e sou apaixonado por tecnologia,
            design, fotografia e skate. Atualmente, estou estagiando como
            Desenvolvedor Front-End Mobile na Educt, onde tenho trabalhado com
            desenvolvimento mobile utilizando React Native.
          </h3>
          <h3 className="main-text">
            ㅤMinha trajetória profissional começou de uma maneira inusitada, já
            que meu primeiro "emprego" foi como soldado no exército por pouco
            mais de um ano, uma experiência que sem dúvidas me ensinou muito e
            me mudou como pessoa. Sou formado como técnico em informática pela
            TECPUC, e no momento estou cursando Ciência da Computação na PUCPR.
          </h3>
          <h3 className="main-text">
            ㅤAlém da tecnologia, sou fã de design e sempre busco aprender mais
            sobre o assunto em meu tempo livre. Também sou fotógrafo, realizando
            freelances e participando ativamente do Clube de Fotografia da
            PUCPR, onde já tive a oportunidade de expor meu trabalho em uma
            exposição. Você pode conferir um pouco das minhas fotografias no
            Instagram: @teider_fotos.
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
