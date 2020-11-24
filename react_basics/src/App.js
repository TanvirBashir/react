import React from 'react'
import CComponent from './components/C/CComponent'
import CState from './components/C/CState'
import CEventListner from './components/C/CEventListner'
import FComponent from './components/F/FComponent'
import FEventListner from './components/F/FEventListner'
import FHooks from './components/F/FHooksList'
import CConditional from './components/C/CConditional'
import CMethodasProps from './components/C/CMethodasProps'
import CLists from './components/C/CLists'

function App() {
  return (
    <React.Fragment>
      <div className="ml-3 mt-3">
        <h4  className="text-danger">Functional Components</h4>
        <FComponent title='Funtional Component'/><br/><br/>
        <FEventListner title='Event Listner'/><br/><br/>

        <h4 className="text-danger">Hooks</h4>
        <FHooks/><br/><br/>

        <h4 className="text-danger">Class Components</h4>
        <CComponent title='Component'/><br/><br/>
        <CEventListner title='Event Listner'/><br/><br/>
        <CState title='State'/><br/><br/>
        <h6>Topic: Conditional Rendering</h6>
        <CConditional/><br/><br/>
        <h6>Topic: Method as props with parameters</h6>
        <CMethodasProps/><br/><br/>
        <h6>Topic: List Component</h6>
        <CLists/><br/><br/>
        
      </div>
      
    </React.Fragment>

  );
}

export default App;
