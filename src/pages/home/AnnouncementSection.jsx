import React from "react";
import styled from "styled-components";
import {
  Card1Integration,
  Card3Integration,
  Card4Integration,
  Card5Integration,
  Card6Integration,
  Card7Integration,
} from "./cards/index.js";
import { Card2Integration } from "./cards/Card2.jsx";

export const AnnouncementSection = () => {
  return (
    <Container>
      <div className="cards">
        <p>Here's what we announced</p>
      </div>
      <Card1Integration />
      <Card2Integration />
      <Card3Integration />
      <Card4Integration />
      <Card5Integration />
      <Card6Integration />
      <Card7Integration />
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
