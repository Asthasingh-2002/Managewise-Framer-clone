import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Testimonial from "./components/Testimonial";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Container/>
      <button type="button" className="btn bg-white btn-fixed">Made in Framer</button>
      <Container2/>
      <Container3/>
      <Container4/>
      <Testimonial/>
      <Users/>

      </>

  );
}

export default App;
