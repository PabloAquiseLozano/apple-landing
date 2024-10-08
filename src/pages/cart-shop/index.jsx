import React from "react";
import { BrandSection } from "./BrandSection.jsx";
import { ProductSection } from "./ProductSection.jsx";
import styled from "styled-components";

export const Cart = () => {
  return (
    <Container>
      <BrandSection />
      <ProductSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
`;
