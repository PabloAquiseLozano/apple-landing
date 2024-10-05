import React from "react";
import styled from "styled-components";
import { products } from "../../data-list/index.js";
import { ProductCard } from "./ProductCard.jsx";

export const AnnouncementSection = () => {
  return (
    <Container>
      <div className="cards">
        <p>Here's what we announced</p>
      </div>
      <div className="products-wrapper">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: #f5f5f7;
  font-size: 2.5em;
  font-weight: 590;
  display: grid;
  gap: 1em;
  padding: 1.5em;

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1.5em auto;
  }

  .products-wrapper {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    gap: 0.6em;
  }
`;
