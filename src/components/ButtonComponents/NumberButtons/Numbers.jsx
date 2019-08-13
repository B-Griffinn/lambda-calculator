import React, {useState} from "react";

//import any components needed
import "../../../App.css";
import NumberButtons from "./NumberButton";
//Import your array data to from the provided data file
import data from "../../../../src/data";


const Numbers = () => {
  // STEP 2 - add the imported data to state
  console.log(data.numbers);
  const [numbers, setNumbers] = useState(data.numbers);
  console.log(numbers);

  return (
    <div>
      {numbers.map(number => <NumberButtons key={number} number={number}/>)}
    </div>
  );
};

export default Numbers;