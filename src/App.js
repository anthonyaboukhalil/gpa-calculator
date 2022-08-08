import React from "react";
import { Container } from "react-bootstrap";
import { Slider } from "./Slider.js";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 controls">
          <div className="container d-flex flex-column   ">
            <div>
              <Slider label="Math" />
            </div>
            <div>
              {" "}
              <Slider label="Science" />
            </div>
            <div>
              {" "}
              <Slider label="Languages" />
            </div>
          </div>
        </div>
        <div className="col-8 display">
          <div className="container">
            <div className="row justify-content-center">Center</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
