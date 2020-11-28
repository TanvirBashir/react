import React, { useState, useEffect } from 'react';

const FuseEffect = ({title}) => {

  const [count, setCount] = useState(0);
  
  const setTheCount = () => {
    setCount(count + 1)
  }
  
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <React.Fragment>
      <h6>{title}</h6>
      <button className="btn btn-primary mr-1" onClick={setTheCount}> Update doc title {count}</button>  
    </React.Fragment>
  );
}

export default FuseEffect