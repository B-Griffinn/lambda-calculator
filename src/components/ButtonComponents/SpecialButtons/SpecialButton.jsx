import React from "react";
import "../../../App.css";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btn special-btn">{props.character}</button>
    </>
  );
};

export default SpecialButton;