import React, { useState, useEffect } from 'react';

const FuseState = ({title}) => {

  //formula
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(count)
  })

  return (
    <React.Fragment>
      <h6>{title}</h6>
      <button className="btn btn-primary mr-1" onClick={() => setCount(count + 1)}> Update doc title {count}</button>  
    </React.Fragment>
  );
}

export default FuseState