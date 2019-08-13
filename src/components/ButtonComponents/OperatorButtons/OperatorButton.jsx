import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  return (
    <>
      <button className="btn btn-lite">{props.character}</button>
    </>
  );
};

export default OperatorButton;