import React from "react";
import { HeaderLayout } from "./HeaderLayout.jsx";
import { FooterLayout } from "./FooterLayout.jsx";
import styled from "styled-components";

export const BaseLayout = ({ children }) => {
  return (
    <Container>
      <HeaderLayout />
      <div className="main">{children}</div>
      <FooterLayout />
    </Container>
  );
};

const Container = styled.div`
  .main {
  }
`;
