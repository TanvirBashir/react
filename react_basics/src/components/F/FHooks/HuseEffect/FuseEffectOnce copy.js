import React, { useState, useEffect } from 'react'

function HuseEffectOnce({title}) {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log(`event logged`)
		setX(e.clientX)
		setY(e.clientY)

	}
	useEffect(() => {
		console.log('Mounted/rendered')
		window.addEventListener('mousemove', logMousePosition)
		return () => {
			console.log(`Unmounted/cleaned up`)
		window.addEventListener('mousemove', logMousePosition)
		}
	}, [])


	return (
		<React.Fragment>
      		<h6>{title}</h6>
			{displayer && <div>X - {x} Y - {y}</div>}
			
			
			
		</React.Fragment>
	)
}

const makeCleanUp = () => {
	const [displayer, setDisplayer] = useState(true)
	return(
		<button onClick={()=> {setDisplayer(false)}}>Unmount</button>
	)
}

export default HuseEffectOnce
