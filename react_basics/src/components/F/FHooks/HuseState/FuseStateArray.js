import React, { useState } from 'react';

const FuseState = ({title}) => {
  //formula
  // useState with arrays
  const [arr , setArr] = useState([])
  const arrSetting = () => {
    if (arr.length >= 10){
      console.log(arr.length)
      return
    }
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
      <div className="d-flex">
        {arr.map(item => (<div className="" key={item.id}>{item.id}</div>))}
      </div>
    </React.Fragment>
  );
}
export default FuseState