import React from "react";
import styled from "styled-components";
import { Video } from "../../../public/videos/index.js";

export const PresentationSection = () => {
  return (
    <Container>
      <div className="wrapper-video">
        <video className="video" autoPlay loop controls={false} muted>
          <source src={Video} />
        </video>
        <div className="description">
          <div className="content">
            <h1>Apple Event</h1>
            <p>
              Esta es una landing de ejemplo para la Empresa Apple Inc. <br />
              Lo que se busca es mejorar las técnicas de diseño web y usar el
              framework para Front-End: React
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: auto;
  background: black;
  .wrapper-video {
    width: 100vw;
    height: 100svh;
    position: relative;

    .video {
      width: 100%;
      height: 100%;
    }

    .description {
      color: white;
      font-weight: 500;
      font-size: 1.2em;
      text-align: center;
      position: absolute;
      bottom: 5%;
      width: 100%;

      .content {
        width: 50%;
        margin: auto;
        display: grid;
        gap: 2em;
      }
    }
  }
`;
