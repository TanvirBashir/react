import React from 'react'

function FEventListner({title}) {
  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }

  return (
    <React.Fragment>
      <b>{title}</b> <br></br>
      <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </React.Fragment>
    
  );
}

export default FEventListner