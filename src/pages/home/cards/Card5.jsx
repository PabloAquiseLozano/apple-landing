import React from "react";
import styled from "styled-components";
import { AirPods4 } from "../../../images/index.js";

export const Card5Integration = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <div className="img">
          <img src={AirPods4} alt="iphonePro" />
        </div>
        <div className="description">
          <h3>iPhone 16 Pro</h3>
          <p>
            Hello, Apple Intelligence Built for Apple Intelligence — personal,
            private, powerful. Camera Control, an easier way to quickly access
            camera tools. Stunning 4K 120 fps Dolby Vision video. A18 Pro chip.
            And a huge leap in battery life.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .content-wrapper {
    width: 70%;
    display: flex;
    background: black;
    border-radius: 20px;
    overflow: hidden;

    .img {
      width: 40%;
    }

    .description {
      width: 60%;
      padding: 0.2em 1em;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1em;

      h3 {
        font-size: 1em;
        font-weight: normal;
      }
      p {
        font-size: 0.55em;
        font-weight: 50;
        line-height: 1.4em;
      }
    }
  }
`;
