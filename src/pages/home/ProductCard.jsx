import React from "react";
import styled from "styled-components";

export const ProductCard = ({ product }) => {
  return (
    <Container
      backgroundCard={product.backgroundCard}
      textColor={product.textColor}
    >
      <div className="img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="description">
        <h3>{product.title}</h3>
        {product.subTitle && <h4>{product.subTitle}</h4>}
        <p>{product.description}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 20em;
  min-height: 5em;
  display: flex;
  background: ${({ backgroundCard }) => backgroundCard};
  border-radius: 20px;
  overflow: hidden;
  font-size: 2.5em;
  margin: 0.1em 0.5em;

  .img {
    width: 80%;
    height: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .description {
    width: 100%;
    font-weight: 100;
    font-size: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    padding: 0.5em 1em;
    color: ${({ textColor }) => textColor};

    h3 {
      font-weight: 500;
      font-size: 1.7em;
    }

    h4 {
      font-weight: 500;
      font-size: 1.1em;
      background-image: linear-gradient(
        to right,
        #0194f1,
        #2c8bfd,
        #5780ff,
        #806fff,
        #a858ff,
        #d142e5,
        #ed27c9,
        #ff00ab,
        #ff1881,
        #ff4859,
        #ff7133,
        #ff9400
      );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  @media (max-width: 786px) {
    max-width: 10em;
    min-height: 5em;
    display: flex;
    flex-direction: column;

    .img {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      padding: 1.5em;
      font-size: 0.4em;
      text-align: center;
    }
  }
`;
