import React from "react";
import styled from "styled-components";
import { CardsIntegration } from "./cards/index.js";

export const AnnouncementSection = () => {
  return (
    <Container>
      <div className="cards">
        <p>Here's what we announced</p>
      </div>
      <CardsIntegration />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: white;
  font-size: 2.5em;
  font-weight: 590;
  display: grid;
  gap: 1em;

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2em auto;
  }
`;
