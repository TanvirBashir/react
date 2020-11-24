import React, { useState } from 'react';

const FuseState = ({title}) => {
  //formula
  // useState with arrays
  const [arr , setArr] = useState([])
  const arrSetting = () => {
  
    setArr([
      ...arr, 
      {
        id : arr.length,
    }])
  }
  return (
    <React.Fragment>
      <h6>{title}</h6>
      <button className="btn btn-secondary mr-1" onClick={arrSetting}> Array : Push</button>
      <div className="d-flex">{arr.map(item => (<div className="card mr-1 mt-1 pl-1 pr-1" key={item.id}>{item.id}</div>))}</div>
    </React.Fragment>
  );
}
export default FuseState