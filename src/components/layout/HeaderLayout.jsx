import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppleLogo } from "../../images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
            transition: isVisible ? "0.3s" : "",
          }}
        >
          <li>
            <Link to="/">
              <img src={AppleLogo} alt="web logo" className="logo" />
            </Link>
          </li>
          <li>
            <a href="#" className="button">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Mac
            </a>
          </li>
          <li>
            <a href="#" className="button">
              iPad
            </a>
          </li>
          <li>
            <a href="#" className="button">
              iPhone
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Watch
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Vision
            </a>
          </li>
          <li>
            <a href="#" className="button">
              AirPods
            </a>
          </li>
          <li>
            <a href="#" className="button">
              TV & Home
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Entertainment
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Accessories
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Support
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </a>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faBasketShopping} className="icon" />
            </Link>
          </li>
        </ul>
        {window.location.pathname === "/" && (
          <div className="title">
            <p>Apple Events</p>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: transparent;
  color: rgb(175, 175, 175);
  position: absolute;
  top: 0;
  z-index: 500;
  margin: 0;
  padding: 0;

  &.sticky {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    color: rgba(0, 0, 0, 0.81);
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #3d3d3d;

    .wrapper {
      .title {
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  .wrapper {
    width: 80%;
    margin: 0 auto;

    ul {
      margin: 0;
      list-style: none;
      padding: 0.5em 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

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

      p {
        padding: 0.3em 0;
      }
    }
  }

  @media (max-width: 781px) {
    .wrapper {
      ul {
        font-size: 1.8em;
        .button {
          display: none;
        }
      }
    }
  }
`;
