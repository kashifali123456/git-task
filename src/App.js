import React, { useState } from "react";
import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";
import data from "./data"
import './index.css';
// import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const [Jobdesc, setJobdesc] = useState([data[0]]);
  const handleClick = (id) => {
    const filtered = data.filter((item) => {
      return item.id === id;
    });
    setJobdesc(filtered);
  };
  return (
    <>
      <div className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="layout">
        <Leftbar handleClick={handleClick} />
        <Rightbar data={Jobdesc} />
        </div>
      </div>
    </>
  );
}

export default App;
