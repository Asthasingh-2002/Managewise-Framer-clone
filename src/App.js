import React from "react";
import Navbar from "./components/Navbar";

import Container from "./components/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container/>
      <button type="button" className="btn bg-white btn-fixed">Made in Framer</button>
      
    </>
  );
}

export default App;
