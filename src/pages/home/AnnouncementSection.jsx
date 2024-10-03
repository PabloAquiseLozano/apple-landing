import React from "react";
import styled from "styled-components";

export const AnnouncementSection = () => {
  return (
    <Container>
      <div className="cards">
        <p>Here's what we announced</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: white;
  font-size: 2.1em;
  font-weight: bold;

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em 5em;
  }
`;
