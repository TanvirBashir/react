import React, { useState } from "react";

const FuseState = ({ title }) => {
  //formula
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <React.Fragment>
      <h6>{title}</h6>
      <button
        className="btn btn-primary mr-1"
        onClick={() => setCountA(countA + 1)}
      >
        {" "}
        A : {countA}
      </button>
      <button
        className="btn btn-warning mr-1"
        onClick={() => setCountB(countB + 1)}
      >
        {" "}
        B : {countB}
      </button>
    </React.Fragment>
  );
};
export default FuseState;
