import React from "react";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 controls">
          <div className="container d-flex flex-column   ">
            <div>Math</div>
            <div>Science</div>
            <div>English</div>
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
