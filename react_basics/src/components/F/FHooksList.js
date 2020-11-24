import React from 'react'
import FUseStateObject from './FHooks/FUseStateObject'
import FUseStateArray from './FHooks/FUseStateArray'
import FUseEffectAfterRender from './FHooks/FUseEffectAfterRender'
function FHooks() {
  return(
    <React.Fragment>
      <FUseStateObject title="Hook: useState with object"/> <br/><br/>
      <FUseStateArray title="Hook: useState with Array"/> <br/>
      <FUseEffectAfterRender title="Hook: useEffect after Render"/> <br/>
    </React.Fragment>
  ) 
}

export default FHooks