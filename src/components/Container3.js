import React from "react";
import img1 from "../assets/girl.png"

const Container3 = () => {
  return (
    <div className="faq-box">
      <div>
          <span className=" heading-box">
            {" "}
            <img src={img1} height="20px" width="20px"></img>
            FAQ
          </span>
        </div>
        <div className="title-box">
         Need{" "}
          <span style={{ color: "rgb(254, 129, 98)" }}>Answers?</span> 
        </div>
        <div className="description-box">
        Check out our most commonly asked questions below to find the information you need.
        </div>
      <div>
        <div>
          <button type="button" className="collapsible1">
            Watch Demo
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div>
          <button type="button" className="collapsible1">
            Watch Demo
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div>
          <button type="button" className="collapsible1">
            Watch Demo
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div>
          <button type="button" className="collapsible1">
            Watch Demo
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div>
          <button type="button" className="collapsible1">
            Watch Demo
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
