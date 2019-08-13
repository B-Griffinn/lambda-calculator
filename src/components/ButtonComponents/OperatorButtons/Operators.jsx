import React, {useState} from "react";
import "../../../App.css";

//import any components needed
import OperatorButton from "../OperatorButtons/OperatorButton";
//Import your array data to from the provided data file
import data from "../../../../src/data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [oper, setOper] = useState(data.operators);

  return (
    <div>
      {oper.map(operator => <OperatorButton key={operator.id} character={operator.char}/>)}
    </div>
  );
};

export default Operators;