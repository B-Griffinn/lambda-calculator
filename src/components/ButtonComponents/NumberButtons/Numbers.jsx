import React, {useState} from "react";

//import any components needed
import "../../../App.css";
//Import your array data to from the provided data file
import data from "../../../../src/data";


const Numbers = () => {
  // STEP 2 - add the imported data to state
  console.log(data.numbers);
  const [numbers, setNumbers] = useState(0);
  console.log(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;