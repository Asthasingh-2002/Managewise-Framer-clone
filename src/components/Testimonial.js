import React from "react";
import img1 from "../assets/heart.png";
import img2 from "../assets/alex.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-box">
      <div>
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
        Discover why our clients love working with us. Read their testimonials
        and learn how we has helped businesses.
      </div>

      <div className="parent-frame">
        <section>
          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>

          <div className="testimonial-frame">
            <div className="font-style">
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks."
            </div>
            <div className="img-section-box">
              <div>
                <img src={img2} height="50px" width="50px"></img>
              </div>
              <div>
                <div>Alex</div>
                <div style={{ color: "#767575" }}>IT Manager</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
