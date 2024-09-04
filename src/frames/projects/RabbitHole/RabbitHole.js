import React from "react";
import "./RabbitHole.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";
import TopText from "../components/TopText/TopText";

const RabbitHole = ({ getFrameId }) => {
  return (
    <div className="project-frame">
      <Marquee content="Rabbit Hole" />

      <div className="project-content">
        <div className="text-container">
          <TopText
            date={"02.2023"}
            link={"https://github.com/bruno-teider/Rabbit_Hole"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              Rabbit Hole é um jogo desenvolvido em equipe durante a Global Game
              Jam de 2023, onde eu atuei principalmente na parte visual. Com o
              desafio de criar um jogo em apenas 48 horas com o tema "Raízes" e
              desenvolvemos um Infinite Scrolling Game. O objetivo do jogo é
              levar o jogador a percorrer o máximo de distância possível,
              enfrentando obstáculos e coletando power-ups ao longo do caminho.
              A experiência tem uma jogabilidade desafiadora, viciante e
              divertida.
            </h3>
            <div className="image-container">
              <video
                className="video"
                src="../../assets/video_rabbit_hole.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Seu navegador não suporta o video :/
              </video>

              <div style={{ marginLeft: "5%" }}>
                <img
                  alt="rabbit_hole_gameover"
                  className="image"
                  src={"../../assets/rabbit_hole_gameover.jpg"}
                />
                <img
                  alt="rabbit_hole_jogar"
                  className="image"
                  src={"../../assets/rabbit_hole_jogar.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton getFrameId={getFrameId} />
    </div>
  );
};

export default RabbitHole;
