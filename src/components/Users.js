import React from "react";
import img1 from "../assets/hii.jpg";
import img2 from "../assets/faceshappyavif.avif";
import img3 from "../assets/faceshappyavif.avif";
import logo from "../assets/logo.webp";

const Users = () => {
  return (
    <div style={{ backgroundColor: "rgb(253, 242, 236)" }}>
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
        <img src={img2} height="400px" width="400px"></img>
      </div>

      <div>
        <div>
          <img src={logo} height="40px" width="40px"></img>Manage Wise
        </div>
        <div className="nav-box"> 
          <ul>
            <li>
              <a href="default.asp">Features</a>
            </li>
            <li>
              <a href="news.asp">FAQ</a>
            </li>
            <li>
              <a href="contact.asp">Pricing</a>
            </li>
            <li>
              <a href="about.asp">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
