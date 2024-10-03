import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppleLogo } from "../../images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const HeaderLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 44);
    setIsVisible(window.scrollY <= 44);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className={isSticky ? "sticky" : ""}>
      <div className="wrapper">
        <ul
          style={{
            display: isVisible ? "flex" : "none",
            padding: isVisible ? "0.5em 0" : "0",
          }}
        >
          <li>
            <a href="#">
              <img src={AppleLogo} alt="web logo" className="logo" />
            </a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">Vision</a>
          </li>
          <li>
            <a href="#">AirPods</a>
          </li>
          <li>
            <a href="#">TV & Home</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBasketShopping} className="icon" />
            </a>
          </li>
        </ul>
        <div className="title">
          <p>Apple Events</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  color: rgb(175, 175, 175);
  position: absolute;
  top: 0;
  z-index: 500;

  &.sticky {
    position: fixed;
    transition: background 0.3s;
  }

  .wrapper {
    width: 69%;
    margin: 0 auto;

    ul {
      margin: 0;
      list-style: none;
      padding: 0.5em 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        padding: 0.3em 0.5em;
        font-size: 0.7em;
        font-weight: 300;

        a {
          text-decoration: none;
          color: rgb(175, 175, 175);
        }

        .logo {
          width: auto;
          height: 1.2em;
        }

        .icon {
          font-size: 1em;
        }
      }
    }

    .title {
      margin: 0.8em 0;
      font-size: 1.3em;
      color: white;
      border-bottom: 0.5px solid rgb(175, 175, 175);

      p {
        padding: 0.5em 0;
      }
    }
  }
`;
