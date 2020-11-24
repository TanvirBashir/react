import React, { useState, useEffect } from 'react';

const FuseState = ({title}) => {
  //formula
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // useState with object
  const [obj , setObj] = useState({
    message: 'Banana',
    status: true
  })

  const objSetting = () => {
    obj.status ?
      setObj({
        message: 'Kacha Morich',
        status: false
      })
    : setObj({
        message: 'Morich',
        status: true
    })
  }

  return (
    <React.Fragment>
      <h6>{title}</h6>
      <button className="btn btn-primary mr-1" onClick={() => setCountA(countA + 1)}> A : {countA}</button>  
      <button className="btn btn-warning mr-1" onClick={() => setCountB(countB + 1)}> B : {countB}</button>
      <button className="btn btn-success mr-1" onClick={objSetting}> Object : {obj.message}</button>
    </React.Fragment>
  );
}
export default FuseState