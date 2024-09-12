import React from "react";
import "./About.css";

const About = ({ getFrameId }) => {
  return (
    <div className="about-frame">
      <div className="about-content">
        <div className="text-wrapper">
          <h1 className="name">Bruno Teider</h1>

          <h3 className="main-text">
            ㅤOlá! Meu nome é Bruno Teider e sou apaixonado por tecnologia,
            design, fotografia e skate. Sou formado como técnico em informática
            pela TECPUC, e no momento estou cursando Ciência da Computação na
            PUCPR.
          </h3>
          <h3 className="main-text">
            ㅤMinha trajetória profissional começou de uma maneira inusitada, já
            que meu primeiro "emprego" foi como soldado no exército, onde fiquei
            pouco mais de um ano. Foi uma experiência que me ensinou bastante e
            me fez crescer muito como pessoa. Atualmente, estou estagiando como
            Desenvolvedor Front-End Mobile na startup Educt, utilizando React
            Native e Typescript.
          </h3>
          <h3 className="main-text">
            ㅤTambém sou fotógrafo, realizando freelances e participando
            ativamente do Clube de Fotografia da PUCPR, onde já tive a
            oportunidade de expor meu trabalho em uma exposição. Você pode
            conferir um pouco das minhas fotografias no Instagram:
            @teider_fotos.
          </h3>
        </div>
      </div>

      <div className="image-wrapper">
        <img
          className="second-star"
          src="../../assets/star.png"
          alt="first-star"
        />
        <img
          alt="my-picture"
          className="my-picture"
          src="../../assets/eu2.JPG"
        />
        <img
          className="first-star"
          src="../../assets/star.png"
          alt="second-star"
        />
      </div>

      <div className="back-container-about">
        <hr />
        <h1 onClick={() => getFrameId(0)}>Back</h1>
        <hr />
      </div>
    </div>
  );
};

export default About;
