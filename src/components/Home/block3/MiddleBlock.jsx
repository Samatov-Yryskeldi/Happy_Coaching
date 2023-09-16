import React from "react";
import Jane from "../../../assets/image 68.svg";
import FullStars from "../../../assets/Stars (2).svg";
import Katya from "../../../assets/image 68 (1).svg";
import NotStars from "../../../assets/Stars (3).svg";
import Jan from "../../../assets/image 68 (2).svg";
import NSt from "../../../assets/Stars (3).svg";
import "../../../style/MiddleBlockH.css";
const MiddleBlock = () => {
  return (
    <div className="middle-block">
      <div className="middle-main-text-block">
        <p>
          Hear out what my
          <br /> clients say about me.
        </p>
        <div className="first-mid-block">
          <div className="text-op">
            <p>
              "I gained so much <br />
              confidence in my ability to
              <br /> connect and deepen my
              <br /> relationships with people. "
            </p>
            <div className="mid-name">
              <p>Jane</p>
              <img src={Jane} alt="" />
            </div>
            <div className="mid-stars">
              <img src={FullStars} alt="" />
            </div>
          </div>
        </div>
        <div className="second-mid-block">
          <div className="mid-op">
            <p>
              "I gained so much <br /> confidence in my ability to
              <br /> connect and deepen my
              <br /> relationships with people. "
            </p>
            <div className="mid-name2">
              <p>Catherine</p>
              <img src={Katya} alt="" />
            </div>
            <div className="mid-img">
              <img src={NotStars} alt="" />
            </div>
          </div>
        </div>
        <div className="third-block-mid">
          <div className="mid-op2">
            <p>
              {" "}
              "I gained so much
              <br /> confidence in my ability to
              <br /> connect and deepen my
              <br /> relationships with people. "
            </p>
            <div className="mid-name3">
              <p>Jane</p>
              <img src={Jan} alt="" />
            </div>
            <div className="mid-image-stars">
              <img src={NSt} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBlock;
