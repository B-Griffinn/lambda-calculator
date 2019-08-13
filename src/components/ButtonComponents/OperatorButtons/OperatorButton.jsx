import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  return (
    <>
      <button className="btn btn-light">{props.character}</button>
    </>
  );
};

export default OperatorButton;