import React from "react";
// import Button from "../../units/button";
import data from "../../data";
import './style.css'
const Leftbar = ({ handleClick }) => {
    return (
      <>
        <>
          <div className="jobs-center">
            <div className="btn-container">
              {data.map(({ company, id }) => {
                return (
                  <button className="job-btn" onClick={() => handleClick(id)}>
                    {company}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      </>
    );
  };

export default Leftbar;
