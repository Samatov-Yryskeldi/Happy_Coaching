import React from "react";
import "../../../style/HomeMiddle.css";
import Book from "../../../assets/book.svg";
import Massege from "../../../assets/message.svg";
import People from "../../../assets/people.svg";
const HomeMiddle = () => {
  return (
    <div className="middle">
      <div className="middle-main-text">
        <p>
          I can help you in these
          <br /> particular areas
        </p>
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          <br /> do eiusmod tempor incididunt ut labore et dolore magna
          <br /> aliqua minim veniam.
        </b>
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit
          <br /> voluptatem accusantium doloremque laudantium, totam
          <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          <br />
          quasi architecto beatae vitae dicta sunt explicabo.{" "}
        </span>
        <div className="first-block-book">
          <div className="book-text-main">
            <img src={Book} alt="" />
            <p>1:1 Coaching</p>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna
              <br /> aliqua minim veniam.
            </span>
          </div>
        </div>
        <div className="second-block-massege">
          <div className="massege-text-main">
            <img src={Massege} alt="" />
            <p>Consultation</p>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna
              <br /> aliqua minim veniam.
            </span>
          </div>
        </div>
        <div className="thirth-block-people">
          <div className="people-text-main">
            <img src={People} alt="" />
            <p>Group Coaching Sessions</p>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna
              <br /> aliqua minim veniam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
