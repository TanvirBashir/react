import React, { Component } from 'react'

class CConditional extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
      buttonText:'Logout'
    }
  }
  makeLogout = () => {
    this.setState({
      isLoggedIn: false,
      buttonText:'Login'
    })
  }
  makeLogin = () =>{
    this.setState({
      isLoggedIn: true,
      buttonText:'Logout'
    })
  }
  // #if-else approach
  render() {
    if (this.state.isLoggedIn) {
      return (
        <React.Fragment>
          <div>Welcome Tanvir</div>
          <button className="btn btn-primary" onClick={this.makeLogout}>{this.state.buttonText}</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div>Please Login</div>
          <button className="btn btn-primary" onClick={this.makeLogin}>{this.state.buttonText}</button>
        </React.Fragment>
      )
    }
  }

  // #element-variables approach
  // render() {
  //   let message
  //   if (this.state.isLoggedIn) {
  //     message = <div>Welcome Vishwas</div>
  //   } else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return <div>{message}</div>
  // }

  // #ternary-operator-approach
  // render() {
  //   return this.state.isLoggedIn ? (
  //     <div>Welcome Vishwas</div>
  //   ) : (
  //     <div>Welcome Guest</div>
  //   )
  // }

  // #short-circuit-operator-approach
  // render() {
  //     return this.state.isLoggedIn ? (   
  //       <div>Welcome Vishwas</div>
      
  //     ) : (
  //       <div>Welcome Guest</div>
  //     )
  // }

  // #short-circuit-operator-approach
  // render() {
  //   return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  // }
}

export default CConditional
