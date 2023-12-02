import React from "react";
import img1 from "../assets/img1.webp";
// import  '../index.css'
import img2 from "../assets/hii_icon.webp";
import img3 from "../assets/fireImg.webp";
import img4 from "../assets/star.webp";
import img5 from "../assets/smartTask.webp";
import img6 from "../assets/flexible.webp";
import img7 from "../assets/communication.webp";
import img8 from "../assets/running.webp";

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
        <img src={img1} style={{ width: "100%", height: " min-content" }}></img>
      </div>

      <div className="bg-white " style={{ padding: "10% 0" }}>
        <div className="sub-container-1">
          <div>
            <span className=" heading-box">
              {" "}
              <img src={img3} height="20px" width="20px"></img>
              PREMIER FEATURES
            </span>
          </div>

          <div className="title-box2">
            Discover our product's{" "}
            <span style={{ color: "rgb(254, 129, 98)" }}>Capabilities</span>
          </div>
          <div className="description-box">
            Don't settle for mediocrity - embrace the future of management with
            Manage Wise.
          </div>

          <div className="frame1">
            <div className="star-box">
              <img src={img4} height="40px" width="40px"></img>
            </div>
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </div>

          <div className="frame2">
            <img src={img5}></img>
            <div style={{ padding: "0 5%" }}>
              <h4> Smart Task Management </h4>
              <p style={{ color: "rgb(118, 117, 117)" }}>
                {" "}
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </div>
          <div className="frame2">
            <img src={img6}></img>
            <div style={{ padding: "0 5%" }}>
              <h4>Flexible Scheduling</h4>
              <p style={{ color: "rgb(118, 117, 117)" }}>
                Stay productive with our flexible scheduling system
              </p>
            </div>
          </div>
          <div className="frame2">
            <div style={{ padding: "0 5%" }}>
              <img src={img7}></img>
              <h4>Easy Communication</h4>
              <p style={{ color: "rgb(118, 117, 117)" }}>
                Collaborate seamlessly with your team in real-time
              </p>
            </div>
          </div>
          <div className="frame2">
            <img src={img8}></img>
            <div style={{ padding: "0 5%" }}>
              <h4>Analytics</h4>
              <p style={{ color: "rgb(118, 117, 117)" }}>
                Gain valuable insights with our advanced analytics feature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
