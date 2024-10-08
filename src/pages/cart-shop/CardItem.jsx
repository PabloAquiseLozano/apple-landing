import React from "react";
import styled from "styled-components";
import { Button } from "antd";

export const CardItem = ({ phone }) => {
  return (
    <Container>
      <div className="img">
        <img src={phone.img} alt="" />
      </div>
      <div className="details">
        <h3>{phone.name}</h3>
        <p>{`${phone.ram} / ${phone.rom}`}</p>
        <p>{phone.price}</p>
        <Button type="primary">Comprar</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 25em;
  min-height: 40em;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  background: #eeeeee;
  flex-direction: column;

  .img {
    width: 100%;
    height: 80%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    color: black;
    width: 100%;
    height: 20%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4em;
    text-align: center;
  }
`;
