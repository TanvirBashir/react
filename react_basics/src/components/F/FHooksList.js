import React from "react";
import FuseStateCounter from "./FHooks/FuseState/FuseStateCounter";
import FUseStateObject from "./FHooks/FuseState/FuseStateObject";
import FUseStateArray from "./FHooks/FuseState/FuseStateArray";
import FuseEffect from "./FHooks/FuseEffect/FuseEffect";
import FuseEffectConditional from "./FHooks/FuseEffect/FuseEffectConditional";
import FuseEffectOnce from "./FHooks/FuseEffect/FuseEffectOnce";
import FUseEffectUnmount from "./FHooks/FuseEffect/FUseEffectUnmount";
function FHooks() {
  return (
    <React.Fragment>
      <FuseStateCounter title="Hook: useState counter" /> <br />
      <br />
      <FUseStateObject title="Hook: useState with object" /> <br />
      <br />
      <FUseStateArray title="Hook: useState with Array" /> <br />
      <FuseEffect title="Hook: useEffect after Render" /> <br />
      <br />
      <FuseEffectConditional title="Hook: useEffect Conditional" /> <br />
      <br />
      <FuseEffectOnce title="Hook: useEffect Once" /> <br />
      <br />
      <FUseEffectUnmount title="Hook: useEffect Unmount" /> <br />
      <br />
    </React.Fragment>
  );
}

export default FHooks;
