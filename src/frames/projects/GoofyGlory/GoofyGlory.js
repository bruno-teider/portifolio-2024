import React from "react";
import "./GoofyGlory.css";
import Marquee from "../components/Marquee/Marquee";
import BackButton from "../components/BackButton/BackButton";
import TopText from "../components/TopText/TopText";

const GoofyGlory = ({ getFrameId }) => {
  return (
    <div className="goofy-glory">
      <Marquee content="Goofy Glory" />

      <div className="project-content">
        <div className="text-container">
          <TopText
            date={"01.2024"}
            link={"https://github.com/bruno-teider/Goofy-Glory"}
          />

          <div className="text-image-wrapper">
            <h3 className="main-text">
              ㅤGoofy Glory é um jogo desenvolvido em equipe durante a Global
              Game Jam de 2024, onde precisávamos criar um jogo em apenas 48
              horas com o tema "Risada".
              <br />
              <br />
              ㅤEu atuei principalmente na parte visual do projeto. O jogo é um
              couch coop em que dois jogadores assumem o papel de bobos da corte
              e precisam fazer o rei e a plateia rirem. Para isso, eles batalham
              entre si usando armas cômicas, como patinhos de borracha, em um
              ambiente com uma atmosfera bem cômica.
              <br />
              <br />
              ㅤO jogo é perfeito para jogar com amigos e em festas,
              proporcionando momentos de bastante risadas e diversão!
            </h3>
            <div className="image-container">
              <video
                className="video"
                src={`${process.env.PUBLIC_URL}/assets/goofyGlory/goofy_video.mp4`}
                autoPlay
                loop
                muted
                playsInline
              >
                Seu navegador não suporta o video :/
              </video>

              <div style={{ marginLeft: "5%" }}>
                <img
                  alt="goofy_glory_1"
                  className="image"
                  src={`${process.env.PUBLIC_URL}/assets/goofyGlory/goofy_glory.jpg`}
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

export default GoofyGlory;
