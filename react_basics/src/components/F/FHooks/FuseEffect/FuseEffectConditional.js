import React, { useState, useEffect } from 'react'

function HuseeffectConditional({title}) {
	const [countA, setCountA] = useState(0)
	const [countB, setCountB] = useState(0)
  // const [name, setName] = useState('')
  
	useEffect(() => {
		document.title = `Count A ${countA}`
  },[countA])

	useEffect(() => {
		document.title = `Count B ${countB}`
  },[countB])

	return (
		<React.Fragment>
      <h6>{title}</h6>
			<button className="btn btn-primary mr-1" onClick={() => setCountA(countA + 1)}>
				useEffect - Click {countA} times
			</button>
      <button className="btn btn-primary mr-1"  onMouseDown={() => setCountB(countB + 1)}>
				useEffect - Click {countB} times
			</button>
      
		</React.Fragment>
	)
}

export default HuseeffectConditional
