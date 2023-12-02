import React from "react";
import img1 from "../assets/starEmoji.jpg";
import img2 from "../assets/hammer.png";
import img3 from "../assets/connect.webp";
import img4 from "../assets/mobilepng.png";
import img5 from "../assets/bell.png";
import img6 from "../assets/fire.png";

const Container2 = () => {
  return (
    <div className="sub-container-2">
      <div>
        <span className=" heading-box">
          {" "}
          <img src={img1} height="20px" width="20px"></img>
          AND MORE...
        </span>
      </div>
      <div
        className="title-box"
        style={{ textAlign: "left", fontSize: "40px" }}
      >
        Explore an array of features that elevate your{" "}
        <span style={{ color: "rgb(254, 129, 98)" }}>Productivity</span> to new
        heights{" "}
      </div>
      <div className="description-box">
        Discover the tools that will revolutionize the way you manage and
        optimize your operations
      </div>

      <div className="section-box">
        {/* <div className="sub-section"> */}
        <div className="icon-box">
          <img src={img4} height="20px" width="20px"></img>
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
          {" "}
          Cross-Platform Compatibility
        </div>
        <p style={{ color: "rgb(118, 117, 117) " }}>
          Enjoy the flexibility of cross-platform compatibility. Our product
          works seamlessly across desktop, web, and mobile devices, allowing you
          to work from your preferred device.
        </p>
      </div>
      <div className="section-box">
        <div className="icon-box">
          <img src={img5} height="20px" width="20px"></img>
        </div>

        <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
          {" "}
          Stay Informed with Essential Notifications
        </div>
        <p style={{ color: "rgb(118, 117, 117) " }}>
          Automate support from first customer contact to closing the ticket.
          Drastically improve time to resolution.Automate support from first
          customer contact to closing the ticket.
        </p>
      </div>
      <div className="section-box">
        <div className="icon-box">
          <img src={img6} height="20px" width="20px"></img>
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
          {" "}
          Secure Data Encryption at all times
        </div>
        <p style={{ color: "rgb(118, 117, 117) " }}>
          Trust in our robust data encryption to keep your sensitive information
          safe and secure. Rest easy knowing your data is protected at all
          times.
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div className="sub-section2">
        <div>
          <span className=" heading-box">
            {" "}
            <img src={img2} height="20px" width="20px"></img>
            INTEGRATIONS
          </span>
        </div>
        <div className="title-box">
          Enable{" "}
          <span style={{ color: "rgb(254, 129, 98)" }}> integration</span> with
          other popular tools and platforms{" "}
        </div>
        <div className="description-box">
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </div>
        </div>
      </div>
      <img src={img3}></img>
    </div>
  );
};

export default Container2;
