import React from "react";
import img1 from "../assets/hii.jpg";
import img2 from "../assets/faceshappyavif.avif";
import img3 from "../assets/faceshappyavif.avif";
import logo from "../assets/logo.webp";

const Users = () => {
  return (
    <div style={{ backgroundColor: "rgb(253, 242, 236)", paddingTop: "50px" }}>
      <div className="user-box">
        <div>
          <span className=" heading-box">
            {" "}
            <img src={img1} height="20px" width="20px"></img>
            DON'T MISS OUT
          </span>
        </div>
        <div className="title-box">
          Unleash your{" "}
          <span style={{ color: "rgb(254, 129, 98)" }}> Potential </span> with
          us
        </div>
        <div className="description-box">
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </div>
        <div className="action-box">
          <button type="button" className="btn btn-purple ">
            Try out now
          </button>
        </div>
        <img src={img2} height="300px" width="400px"></img>
      </div>
      
      <div className="d-flex" >
        <div  className="logo-box" >
          <img src={logo} height="40px" width="40px"></img>Manage Wise
        </div>
        <div className="nav-box"> 
          <ul>
            <li>
              <a href="#" style={{  textDecoration: "none"}}>Features</a>
            </li>
            <li>
              <a href="#" style={{  textDecoration: "none"}}>FAQ</a>
            </li>
            <li>
              <a href="#" style={{  textDecoration: "none"}}>Pricing</a>
            </li>
            <li>
              <a href="#" style={{  textDecoration: "none"}}>Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
       
      <hr/>
      <div className="footer">
      © 2022 ManageWise, Inc.
      </div>

    </div>
  );
};

export default Users;
