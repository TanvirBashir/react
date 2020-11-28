import React, { useState, useEffect } from 'react'

function FHuseEffectOnce({title}) {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {

		setX(e.clientX)
		setY(e.clientY)

	}
	useEffect(() => {
		console.log('Mounted/rendered')
		window.addEventListener('mousemove', logMousePosition)
			return () =>{
			console.log('cleaned up')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])


	return (
		<React.Fragment>
      		<h6>{title}</h6>
			<button className="btn btn-primary mr-1" onClick={()=> {setX(0); setY(0)}}>X : {x} - Y : {y}</button>
		</React.Fragment>
	)
}



export default FHuseEffectOnce
