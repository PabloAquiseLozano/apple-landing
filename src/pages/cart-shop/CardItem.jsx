import React from "react";
import styled from "styled-components";

export const CardItem = ({ phone }) => {
  return (
    <Container>
      <div className="content">
        <div className="img">
          <img src={phone.img} alt="" />
        </div>
        <div className="details">
          <h3>{phone.name}</h3>
          <p>{phone.price}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 30em;
  background: yellow;
  border-radius: 20px;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img {
      object-fit: cover;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .details {
      width: 100%;
    }
  }
`;
