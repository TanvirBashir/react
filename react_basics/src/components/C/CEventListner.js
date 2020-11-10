import React, { Component } from 'react'

class CEventListner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hey'
    }

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      message:'Hello'
    });
  }

  render() {
    return (
      <React.Fragment> 
        <b>Topic: {this.props.title}</b> <br/>
        
        <button onClick={this.handleClick}> {this.state.message}</button>
      </React.Fragment>
    );
  }
}

export default CEventListner
