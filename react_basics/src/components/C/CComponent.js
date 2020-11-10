import React, { Component } from 'react'

class ClassComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <b>Topic: {this.props.title}</b> <br></br>
        This is a Class Component. 
      </React.Fragment>
    )
  }
}

export default ClassComponent
