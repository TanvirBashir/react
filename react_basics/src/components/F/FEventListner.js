import React from 'react'

function FEventListner(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <React.Fragment>
      <b>Topic: {props.title}</b> <br></br>
      <a href="#" onClick={handleClick}>Click me</a>
    </React.Fragment>
    
  );
}

export default FEventListner