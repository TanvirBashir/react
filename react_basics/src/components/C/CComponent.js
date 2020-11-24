import React, { Component } from 'react'

class ClassComponent extends Component {
  render() {
    const {title} = this.props
    return (
      <React.Fragment>
        <b>Topic: {title}</b> <br></br>
        This is a Class Component. 
      </React.Fragment>
    )
  }
}

export default ClassComponent
