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
  background: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-brands {
    padding: 5em;
  }

  .band-brands {
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 1em;
    flex-wrap: wrap;
  }
`;
