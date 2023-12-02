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
          <button type="button" className="btn bg-white">
            FREE
          </button>
          <h4>$0 /month</h4>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Access to all
              basic features
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Reporting and
              analytics
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Up to 5
              individual users
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Chat and email
              support
            </span>{" "}
          </p>
          <button type="button" className="btn bg-white">
            Get started
          </button>
        </div>

        <div className="frame1">
          <button type="button" className="btn bg-white">
            BUSINESS
          </button>
          <h4>$25 /month</h4>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Access to all
              basic features
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Reporting and
              analytics
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Up to 5
              individual users
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Chat and email
              support
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>3+ integrations
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Account
              performance reporting
            </span>{" "}
          </p>
          <button type="button" className="btn bg-white">
            Get started
          </button>
        </div>

        <div className="frame1">
          <button type="button" className="btn bg-white">
          BUSINESS
          </button>
          <h4>$42/month</h4>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Access to all
              basic features
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Reporting and
              analytics
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Up to 5
              individual users
            </span>{" "}
          </p>
          <p>
            <span>
              <img src={img2} height="20px" width="20px"></img>Chat and email
              support
            </span>{" "}
          </p>
          <p><span ><img src={img2} height="20px" width="20px"></img></span>3+ integrations </p>
          <button type="button" className="btn bg-white">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container4;
