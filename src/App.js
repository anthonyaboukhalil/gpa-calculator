import React from "react";

import DisplaySubjects from "./components/DisplaySubjects.js";
import AddSubject from "./components/AddSubject.js";
import DisplayGpa from "./components/DisplayGpa.js";
import MyChart from "./components/MyChart.js";
import bootstrap from "bootstrap";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 controls overflow-auto">
          <div className="container d-flex flex-column   ">
            <AddSubject />

            <DisplaySubjects />
          </div>
        </div>
        <div className="col-8 display">
          <div className="container">
            <div className="row">
              <DisplayGpa />
              <div id="chart">
                <MyChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
