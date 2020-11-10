import React from 'react'
import CComponent from './components/C/CComponent'
import CState from './components/C/CState'
import CEventListner from './components/C/CEventListner'
import FComponent from './components/F/FComponent'
import FEventListner from './components/F/FEventListner'
import CConditional from './components/C/CConditional'

function App() {
  return (
    <React.Fragment>
      <FComponent title='Functional Component'/><br/>
      <FEventListner title='Functional Event Listner'/><br/>
      <CComponent title='Class Component'/><br/>
      <CEventListner title='Class Event Listner'/><br/>
      <CState title='Class State'/><br/>
      <h4>Topic: Class Conditional Rendering</h4>
      <CConditional title='Class Conditional Rendering'/><br/>
    </React.Fragment>

  );
}

export default App;
