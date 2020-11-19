import React from 'react'

function FEventListner(props) {
  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }

  return (
    <React.Fragment>
      <b>Topic: {props.title}</b> <br></br>
      <button onClick={handleClick}>Click me</button>
    </React.Fragment>
    
  );
}

export default FEventListner