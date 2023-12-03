import React, { useState } from "react";
import img1 from "../assets/girl.png";

const Container3 = () => {
  const [collapse1, setCollase1] = useState(false);
  const [collapse2, setCollase2] = useState(false);
  const [collapse3, setCollase3] = useState(false);
  const [collapse4, setCollase4] = useState(false);
  const [collapse5, setCollase5] = useState(false);


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
        Need <span style={{ color: "rgb(254, 129, 98)" }}>Answers?</span>
      </div>
      <div className="description-box">
        Check out our most commonly asked questions below to find the
        information you need.
      </div>
      <div className="w-100">
        <div className="collapse-box">
          <button
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={collapse1?{color:"#8247FF"}:{}}
            onClick={()=>{setCollase1(!collapse1)}}
          >
            What is Manage Wise and what does it offer?
            <i className="fa-regular fa-plus" style={ collapse1?{ display: "none" }:{display:"block"}}></i>
            <i className="fa-regular fa-xmark" style={ collapse1?{ display: "block" }:{display:"none"}}></i>
          </button>

          <div className="collapse" id="collapse1">
            {/* <div className="card card-body"> */}
            Manage Wise is a comprehensive management platform designed to
            streamline your business operations, enhance productivity, and drive
            success. It offers a range of features including task management,
            scheduling, communication tools, analytics, and more.
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="w-100">
        <div className="collapse-box">
          <button
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={collapse2?{color:"#8247FF"}:{}}
            onClick={()=>{setCollase2(!collapse2)}}
          >
            Is Manage Wise suitable for small businesses and larger enterprises
            alike?
             <i className="fa-regular fa-plus" style={ collapse2?{ display: "none" }:{display:"block"}}></i>
            <i className="fa-regular fa-xmark" style={ collapse2?{ display: "block" }:{display:"none"}}></i>

          </button>

          <div className="collapse" id="collapse2">
            {/* <div className="card card-body"> */}
            Yes, Manage Wise is designed to cater to the needs of both small
            businesses and larger enterprises. Its scalable features and
            customizable options make it versatile for various business sizes.
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="w-100">
        <div className="collapse-box">
          <button
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={collapse3?{color:"#8247FF"}:{}}
            onClick={()=>{setCollase3(!collapse3)}}
          >
            Can I access Manage Wise from different devices and platforms?
            <i className="fa-regular fa-plus" style={ collapse3?{ display: "none" }:{display:"block"}}></i>
            <i className="fa-regular fa-xmark" style={ collapse3?{ display: "block" }:{display:"none"}}></i>
          </button>

          <div className="collapse" id="collapse3">
            {/* <div className="card card-body"> */}
            We provide responsive customer support vía chat and email to assist
            you with any inquiries, issues, or guidance you may need while using
            Manage Wise.
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="w-100">
        <div className="collapse-box">
          <button
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={collapse4?{color:"#8247FF"}:{}}
            onClick={()=>{setCollase4(!collapse4)}}
          >
            What kind of support options do you offer to users?
            <i className="fa-regular fa-plus" style={ collapse4?{ display: "none" }:{display:"block"}}></i>
            <i className="fa-regular fa-xmark" style={ collapse4?{ display: "block" }:{display:"none"}}></i>
          </button>

          <div className="collapse" id="collapse4">
            {/* <div className="card card-body"> */}
            We provide responsive customer support vía chat and email to assist
            you with any inquiries, issues, or guidance you may need while using
            Manage Wise.
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="w-100">
        <div className="collapse-box">
          <button
            // class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={collapse5?{color:"#8247FF"}:{}}
            onClick={()=>{setCollase5(!collapse5)}}
          >
            How secure is the data stored within Manage Wise?
            <i className="fa-regular fa-plus" style={ collapse5?{ display: "none" }:{display:"block"}}></i>
            <i className="fa-regular fa-xmark" style={ collapse5?{ display: "block" }:{display:"none"}}></i>
          </button>

          <div className="collapse" id="collapse5">
            {/* <div className="card card-body"> */}
            Your data's security is a top priority. Manage Wise employs robust
            data encryption and follows industry best practices to ensure your
            sensitive information is safe and protected.
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
