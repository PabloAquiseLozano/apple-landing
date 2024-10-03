import React from "react";
import styled from "styled-components";

export const FooterLayout = () => {
  return (
    <Container>
      <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
      <ul>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Sales and Refunds</a>
        </li>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Site Map</a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #eee;
  color: #444;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
  align-items: center;
  p {
    color: #444;
    font-size: 0.7em;
    margin: 0;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0.2em 0;
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;

    li {
      font-size: 0.7em;
      font-weight: 400;

      a {
        text-decoration: none;
        color: #444;
      }
    }
  }
`;
