import React, {useState} from "react";
import "../../../App.css";

//import any components needed
import SpecialButton from "../SpecialButtons/SpecialButton";

//Import your array data to from the provided data file
import data from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(data.specials);

  return (
    <div className="special-buttons">
      {specials.map(special => <SpecialButton key={special} character={special} />)}
    </div>
  );
};

export default Specials;