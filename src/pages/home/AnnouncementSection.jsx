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
  background: #f5f5f7;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cards {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 2.5em;
    margin: 1.5em auto;
  }

  .products-wrapper {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    gap: 0.6em;
    margin: 1.5em auto;
  }

  @media (max-width: 786px) {
    .cards {
      font-size: 1.8em;
    }
  }
`;
