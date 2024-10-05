import React from "react";
import styled from "styled-components";

export const EventsCard = ({ event }) => {
  return (
    <Container>
      <div className="img">
        <img src={event.img} alt="apple1" />
      </div>
      <div className="description">
        <p>
          <strong>{event.title}</strong>
        </p>
        <p>{event.date}</p>
        <br />
        <p>{event.description}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 55em;
  height: auto;
  font-size: 1em;
  font-weight: 300;
  border-radius: 20px;
  overflow: hidden;
  background: #f5f5f7;

  .img {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    padding: 1em;
    height: auto;
  }
`;
