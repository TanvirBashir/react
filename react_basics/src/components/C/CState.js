import React, { Component } from 'react'

class CState extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       brand: "Ford",
       model: "Mustang",
       color: "red",
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <b>Topic: {this.props.title}</b> <br></br>
        My {this.state.brand} is a {this.state.color} {this.state.model}
        
      </React.Fragment>
    )
  }
}

export default CState
