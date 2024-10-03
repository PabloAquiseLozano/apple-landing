import React from "react";
import styled from "styled-components";
import { AppleWatchUltra } from "../../../images/index.js";

export const Card4Integration = () => {
  return (
    <Container>
      <div className="img">
        <img src={AppleWatchUltra} alt="iphonePro" />
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
    </Container>
  );
};

const Container = styled.div`
  width: 25em;
  height: 10em;
  display: flex;
  background: black;
  border-radius: 20px;
  overflow: hidden;

  .img {
    width: 80%;
    height: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .description {
    font-weight: 100;
    width: 100%;
    font-size: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    padding: 0.5em 1em;
    color: white;

    h3 {
      font-weight: 500;
      font-size: 1.7em;
    }
  }
`;
