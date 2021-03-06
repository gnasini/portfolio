import React from "react";
import styled from "styled-components/macro";
import { GoMarkGithub } from "react-icons/go";
import { IoMdOpen } from "react-icons/io";
import FiveTales from "../../assets/5tales.jpg";

const Tales: React.FC = () => {
  return (
    <MainWrapper>
      <div className="container-content">
        <div className="container-left">
          <a
            href="https://productivia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div></div>
              <img src={FiveTales} alt="500Tales background" />
            </div>
          </a>
        </div>
        <div className="container-right">
          <h2>500Tales - In Progress</h2>
          <div className="higher-text">
            500Tales is a social media app dedicated to the art of short
            fiction. Users can share tales up to 500 words long, follow other
            authors, comment on the stories of others and much more. It's the
            largest project I've worked on and it will be deployed as soon as I
            finish it making it responsive.
          </div>
          <div className="button-div">
            <button className="button-1">GraphQL</button>
            <button className="button-1">Next.js</button>
            <button className="button-1">MongoDB</button>
          </div>
          <div className="icons-div">
            {/* <a
              href="https://productivia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdOpen />
            </a> */}
            <a
              href="https://github.com/nasgui/social-media-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
            </a>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Tales;

const MainWrapper = styled.div<{ bg?: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem 7rem 2rem 7rem;

  @media screen and (max-width: 768px) {
    margin: 0 2rem 2rem 2rem;
  }

  .container-content {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
      position: relative;
    }
  }

  .container-left {
    display: flex;

    flex: 0.55;
    width: 100%;
    height: 440px;

    @media screen and (max-width: 768px) {
      flex: 1;
      height: 300px;
      width: 400px;
      box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.18);
    }

    div {
      position: relative;
      width: 100%;
      height: 100%;
      box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.18);

      @media screen and (max-width: 768px) {
        box-shadow: none;
      }

      img {
        object-fit: cover;
        object-position: center center;
        @media screen and (max-width: 768px) {
          width: 100%;
          overflow: hidden;
          height: 100%;
          object-fit: cover;
        }
      }

      div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(241, 241, 241, 0.71);
        z-index: 1;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          background-color: transparent;
          transition: 0.5s;
        }
        @media screen and (max-width: 768px) {
          z-index: 0;
          background-color: rgba(241, 241, 241, 0.71);
        }
      }
    }
  }

  .container-right {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 0.45;
    flex-direction: column;
    width: 100%;
    height: 350px;

    @media screen and (max-width: 768px) {
      position: absolute;
      flex: 0;
      height: 100%;
    }

    h2 {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 2rem;
      color: #047469;
      width: 100%;

      @media screen and (max-width: 768px) {
        justify-content: center;
        margin-top: 0.5rem;
      }
    }
  }

  .higher-text {
    display: flex;
    box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.25);
    width: 140%;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    padding: 0.5rem;
    font-family: "Calibri";
    font-weight: 300;
    color: #242424;
    font-size: 1.1rem;
    background-color: #fff;
    z-index: 3;

    @media screen and (max-width: 768px) {
      width: 95%;
      box-shadow: -7px 11px 10px rgba(0, 0, 0, 0.15);
      font-size: 1rem;
      background-color: rgba(241, 241, 241, 0.91);
      font-family: "Calibri";
      font-weight: 600;
      color: #000;
      top: 20%;
    }

    @media screen and (max-width: 360px) {
      width: 95%;
      box-shadow: -7px 11px 10px rgba(0, 0, 0, 0.15);
      font-size: 0.8rem;
      background-color: rgba(241, 241, 241, 0.91);
      font-family: "Calibri";
      font-weight: 600;
      color: #000;
      top: 25%;
    }
  }

  .button-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 6rem;
    width: 100%;
  }

  .button-1 {
    display: flex;
    outline: none;
    border: none;
    width: 110px;
    background-color: #047469;
    height: 30px;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Neutra";
    box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.25);
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
      margin-left: 1rem;
      font-size: 0.9rem;
      box-shadow: none;
    }

    @media screen and (max-width: 768px) {
      margin-left: 0.5rem;
      font-size: 0.8rem;
      box-shadow: none;
    }
  }

  .icons-div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    svg {
      display: flex;
      justify-content: flex-start;
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right: 1.5rem;
      text-decoration: none;
      fill: #000;
      transition: 0.5s;

      @media screen and (max-width: 768px) {
        margin-right: 1rem;
        margin-left: 1rem;
        margin-top: -3rem;
      }

      &:hover {
        fill: #047469;
        transform: rotate(360deg);
        transition: 0.5s;
      }
    }
  }
`;
