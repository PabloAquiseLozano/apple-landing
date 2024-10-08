import React from "react";
import styled from "styled-components";
import { CardItem } from "./CardItem.jsx";
import { phones } from "../../data-list/index.js";

export const BrandSection = () => {
  return (
    <Container>
      <div className="title-brands">
        <h1>Our Products</h1>
      </div>
      <div className="band-brands">
        {phones.map((phone, index) => (
          <CardItem index={index} phone={phone} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: black;
  .title-brands {
    padding: 5em 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .band-brands {
    padding: 2em;
    background: white;
    display: flex;
    gap: 1em;
  }
`;
