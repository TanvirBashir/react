import React, { useState, useEffect } from 'react'

const FUseEffectUnmount = ({title}) => {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<h6>{title}</h6>
			<button className="btn btn-primary mr-1" onClick={() => setDisplay(false)}>Cleanup</button>
			{display && <ObjectToUnmount />}
		</div>
	)
}



const ObjectToUnmount = () => {

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('clean up to stop rendering')
		setX(e.clientX)
		setY(e.clientY)

	}
	useEffect(() => {
		// console.log('Mounted/rendered')
		window.addEventListener('mousemove', logMousePosition)
		return () =>{
			window.removeEventListener('mousemove', logMousePosition)
		}	
	} , [x,y])


	return (
		<React.Fragment>
			<button className="btn btn-primary mr-1" onClick={()=> {setX(0); setY(0)}}>X : {x} - Y : {y}</button>
		</React.Fragment>
	)


}

export default FUseEffectUnmount
