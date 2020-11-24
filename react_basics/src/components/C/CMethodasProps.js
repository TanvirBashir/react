import React, { Component } from 'react'

// PARENT component*****************

class CMethodasProps extends Component {
  constructor(props) {
    super(props)

    // this.greetParent = this.greetParent.bind(this)
  }

  greetParent = (valueFromChildComp) => {

    alert(`Hello to PARENT from ${valueFromChildComp}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

// CHILD component*****************

const ChildComponent = (props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => props.greetHandler('CHILD')}>Greet Parent Component</button>
    </div>
  )
}

export default CMethodasProps

