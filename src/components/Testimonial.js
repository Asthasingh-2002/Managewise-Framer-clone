import React from 'react'
import img1 from "../assets/heart.png"

const Testimonial = () => {
  return (
    <div className="testimonial-box">
      <div >
        <span className=" heading-box">
          {" "}
          <img src={img1} height="20px" width="20px"></img>
          TESTIMONIALS
        </span>
      </div>
      <div
        className="title-box"
        style={{ textAlign: "left", fontSize: "40px" }}
      >
       Here from our{" "}
        <span style={{ color: "rgb(254, 129, 98)" }}>Satisfied</span> clients{" "}
      </div>
      <div className="description-box">
      Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
      </div>
    
     
    </div>
  )
}

export default Testimonial
