import React from "react";
import img1 from "../assets/dollar.jpg";
import img2 from "../assets/greentick.png";

const Container4 = () => {
  return (
    <div className="sub-container-1">
      <div>
        <span className=" heading-box">
          {" "}
          <img src={img1} height="20px" width="20px"></img>
          PRICING
        </span>
      </div>

      <div className="title-box2">
        Select your ideal{" "}
        <span style={{ color: "rgb(254, 129, 98)" }}>Pricing</span> plan
      </div>
      <div className="description-box">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>

      <div className="pricing-box">
        <div className="frame1">
          <div className="pricing-frame">FREE</div>
          <div>
            $0
            <span
              style={{
                fontWeight: "500",
                color: "rgb(51 51 60)",
                fontSize: "1.3rem",
              }}
            >
              /month
            </span>
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Access to all basic features
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Reporting and analytics
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Up to 5 individual users
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Chat and email support
          </div>
          <button type="button" className="btn bg-white button-deco">
            Get started
          </button>
        </div>

        <div className="frame1" style={{backgroundColor:"rgb(28, 28, 28)"}}>
          <div className="pricing-frame">STANDARD</div>
          <div className="text-white">
            $25
            <span
              style={{
                fontWeight: "500",
                fontSize: "1.3rem",
              }}
            >
              /month
            </span>
          </div>
          <div className="text-decoration" >
            <i class="fa-solid fa-check"></i>
            Access to all basic features
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Reporting and analytics
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Up to 5 individual users
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Chat and email support
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            3+ integrations
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Account performance reporting
          </div>
          <button type="button" className="btn text-white button-deco" style={{background:"rgb(130, 71, 255)"}}>
            Get started
          </button>
        </div>


        <div className="frame1">
          <div className="pricing-frame">BUSINESS</div>
          <div>
            $42
            <span
              style={{
                fontWeight: "500",
                color: "rgb(51 51 60)",
                fontSize: "1.3rem",
              }}
            >
              /month
            </span>
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Access to all basic features
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Reporting and analytics
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Up to 5 individual users
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            Chat and email support
          </div>
          <div className="text-decoration">
            <i class="fa-solid fa-check"></i>
            3+ integrations
          </div>
          <button type="button" className="btn bg-white button-deco">
            Get started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Container4;
