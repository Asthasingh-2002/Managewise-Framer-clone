import React from "react";
import img1 from "../assets/img1.webp";
// import  '../index.css'
import img2 from "../assets/hii_icon.webp";

const Container = () => {
  return (
    <div className="container-1">
      <div className="sub-container-1">
        <div>
          <span className=" heading-box">
            {" "}
            <img src={img2} height="20px" width="20px"></img>
            WELCOME TO MANAGE WISE!
          </span>
        </div>
        <div className="title-box">
          Empower your business with{" "}
          <span style={{ color: "rgb(254, 129, 98)" }}>Strategic</span> insights
        </div>
        <div className="description-box">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </div>
        <div className="action-box">
          <button type="button" className="btn btn-purple ">
            Get Started
          </button>
          <button type="button" className="btn bg-white">
            Watch Demo
          </button>
        </div>
        <img src={img1} style={{maxWidth:"70%"}} height="250px"></img>
      </div>

      <div>
        <div>hii astha</div>
        <div>
          Mohandas Karamchand Gandhi (2 October 1869 – 30 January 1948) was an
          Indian lawyer, anti-colonial nationalist{" "}
        </div>
        <div>
          hii dev lorem36 Empower your business with Strategic insights Powerful
          management platform designed to streamline your business operations,
          boost productivity, and drive success
        </div>
        <div>
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </div>
        <div>
          <img src={img1} width="200px" height="200px"></img>
          <p>
            Smart Task Management Say goodbye to chaos with our smart task
            management syste
          </p>
        </div>
        <div>
          <img src={img1} width="200px" height="200px"></img>
          <p>
            Smart Task Management Say goodbye to chaos with our smart task
            management syste
          </p>
        </div>
        <div>
          <img src={img1} width="200px" height="200px"></img>
          <p>
            Smart Task Management Say goodbye to chaos with our smart task
            management syste
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
