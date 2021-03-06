import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Hexagon } from "../../assets/hexagons.svg";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <MainWrapper>
      <div>
        <LinkButton to="home" offset={-80} smooth={true} duration={500}>
          Back to Top
        </LinkButton>
        <div></div>
        <h1>GN</h1>
      </div>
      <Hexagon className="first-hex" />
      <Hexagon className="second-hex" />
    </MainWrapper>
  );
};

export default Footer;

const LinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  font-size: 1.5rem;
  border: 3px solid #047469;
  padding: 2rem;
  margin-bottom: 3rem;
  color: #047469;
  transition: 0.4s;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    transition: 0.4s;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
      display: flex;
      color: #047469;
      font-size: 2.5rem;
      border: 6px solid #047469;
      padding: 0.3rem;
      text-decoration: none;
      margin-top: 3rem;
      cursor: pointer;
      margin-bottom: 4rem;

      @media screen and (max-width: 768px) {
        border: none;
      }
    }

    div {
      display: flex;
      width: 200px;
      height: 3px;
      background-color: #047469;
    }
  }

  .first-hex {
    position: absolute;
    right: 10%;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .second-hex {
    position: absolute;
    transform: scale(-1, 1);
    left: 10%;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
