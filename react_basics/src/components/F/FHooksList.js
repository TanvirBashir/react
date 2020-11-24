import React from 'react'
import FUseStateObject from './FHooks/HuseState/FuseStateObject'
import FUseStateArray from './FHooks/HuseState/FuseStateArray'
import FuseEffect from './FHooks/HuseEffect/FuseEffect'
import FuseEffectConditional from './FHooks/HuseEffect/FuseEffectConditional'
import FuseEffectOnce from './FHooks/HuseEffect/FuseEffectOnce'
function FHooks() {
  return(
    <React.Fragment>
      <FUseStateObject title="Hook: useState with object"/> <br/><br/>
      <FUseStateArray title="Hook: useState with Array"/> <br/>
      <FuseEffect title="Hook: useEffect after Render"/> <br/><br/>
      <FuseEffectConditional title="Hook: useEffect Conditional"/> <br/><br/>
      <FuseEffectOnce title="Hook: useEffect Once"/> <br/>

    </React.Fragment>
  ) 
}

export default FHooks