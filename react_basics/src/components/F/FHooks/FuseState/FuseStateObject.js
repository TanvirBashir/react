import React, { useState } from "react";

const FuseState = ({ title }) => {
  // useState with object
  const [obj, setObj] = useState({
    message: "Banana",
    status: true,
  });

  const objSetting = () => {
    obj.status
      ? setObj({
          message: "Kacha Morich",
          status: false,
        })
      : setObj({
          message: "Morich",
          status: true,
        });
  };

  return (
    <React.Fragment>
      <h6>{title}</h6>

      <button className="btn btn-success mr-1" onClick={objSetting}>
        Object : {obj.message}
      </button>
    </React.Fragment>
  );
};
export default FuseState;
