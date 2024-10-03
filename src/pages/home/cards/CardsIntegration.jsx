import React from "react";
import styled from "styled-components";
import { Card1Integration } from "./Card1.jsx";
import { Card2Integration } from "./Card2.jsx";
import { Card3Integration } from "./Card3.jsx";
import { Card4Integration } from "./Card4.jsx";
import { Card5Integration } from "./Card5.jsx";
import { Card6Integration } from "./Card6.jsx";
import { Card7Integration } from "./Card7.jsx";

export const CardsIntegration = () => {
  return (
    <Container>
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
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  gap: 1em;
`;
