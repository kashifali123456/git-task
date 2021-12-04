import React from "react";
import './style.css'
const Rightbar = ({data}) => {
  return (
   <>
        {data.map((data) => {
          const {title,dates,duties,company}=data;

          return(
            <>
            <div className="job-info">
              <h3> {title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              <div className="job-desc">{duties}</div>
            
            <div>
            <button className="btn">More info</button>
            </div>
            </div>
            </>
          )
        })}
     </>
  );
};

export default Rightbar;
