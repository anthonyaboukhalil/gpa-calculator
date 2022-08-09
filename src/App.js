import React from "react";

import DisplaySubjects from "./components/DisplaySubjects.js";
import AddSubject from "./components/AddSubject.js";
import DisplayGpa from "./components/DisplayGpa.js";
import bootstrap from "bootstrap";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 controls">
          <div className="container d-flex flex-column   ">
            <AddSubject />

            <DisplaySubjects />
          </div>
        </div>
        <div className="col-8 display">
          <div className="container">
            <div className="row">
              <DisplayGpa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
