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
  width: 100%;
  max-width: 30em;
  font-size: 1em;
  font-weight: 300;
  border-radius: 20px;
  background: #f5f5f7;
  overflow: hidden;
  margin: 0 1em;

  .img {
    object-fit: contain;
    width: 100%;
    height: auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .description {
    width: 100%;
    padding: 1em;
  }

  @media (max-width: 786px) {
    display: flex;

    .img {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
