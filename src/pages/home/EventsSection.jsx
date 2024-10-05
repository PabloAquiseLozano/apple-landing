import React from "react";
import styled from "styled-components";
import { events } from "../../data-list/index.js";
import { EventsCard } from "./EventsCard.jsx";

export const EventsSection = () => {
  return (
    <Container>
      <div className="title">
        <p>View Recent Apple Events</p>
      </div>
      <div className="events-wrapper">
        {events.map((event, index) => (
          <EventsCard key={index} event={event} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: white;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2.3em;
    font-weight: 550;
    text-align: center;
    margin: 2em auto;
  }
  .events-wrapper {
    width: 80%;
    display: flex;
    gap: 2em;
  }
`;
