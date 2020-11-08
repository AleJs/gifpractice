import React from "react";
import "./GifGriditems.css";
const GifGriditems = ({ img, title, id }) => {
  return (
    <div className="container">
      <ol>
        <li className="card animate__fadeIn-5s 5s ">
          <h1 className="title">{title}</h1>
          <img className="img" src={img} alt="" />
        </li>
      </ol>
    </div>
  );
};

export default GifGriditems;
