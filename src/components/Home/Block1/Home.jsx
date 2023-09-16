import React from "react";
import Frame from "../../../assets/Frame 42906.svg";
import Person from "../../../assets/pexels-andrea-piacquadio-3978564 1.svg";
import "../../../style/Home.css";
import HomeMiddle from "../Block2/HomeMiddle";
import MiddleBlock from "../block3/MiddleBlock";
const Home = () => {
  return (
    <div className="home">
      <div className="home-prop">
        <p>Proven strategies backed by science for success.</p>
        <b>
          Live lefi at the
          <br /> full potential
        </b>
        <span>
          I help people to discover their true potential and live a fulfilling
          <br />
          life... Discover the simple 3 steps that I discovered to hack
          <br />
          productivity. It just works and it is begin using backed by science.
          <br />
          Wanna transform your life?
        </span>

        <div className="home-img1">
          <img src={Frame} alt="" />
          <div className="home-img2">
            <img src={Person} alt="" />
            <div className="home-free-button">
              <button>
                <a href="../../Free/Free.jsx">Get your free guide now</a>
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <HomeMiddle />
      <MiddleBlock />
    </div>
  );
};

export default Home;
