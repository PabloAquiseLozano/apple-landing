import React from "react";
import styled from "styled-components";
import { Rita } from "../../images/index.js";

export const RitaCard = () => {
  return (
    <Container>
      <div className="card">
        <div className="img">
          <img src={Rita} alt="" />
        </div>
        <div className="text">
          <p>
            "Las flores más hermosas del jardín son las que llevan la luz de su
            sonrisa."
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  position: relative;

  .card {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    position: relative;
    justify-content: center;

    .img {
      box-shadow: 0px 0px 32px 18px rgba(245, 245, 10, 1);
      overflow: hidden;
      border-radius: 20px;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #ffcc00,
        0 0 30px #ffe018,
        0 0 40px #e1c826,
        0 0 55px #f8d974,
        0 0 75px #b9922e,
        0px 0px 4px rgba(255, 220, 0, 0.75);
      padding: 0.5em;
      position: absolute;
      text-align: center;
      font-weight: 600;
      font-size: 2em;
    }
  }
`;
