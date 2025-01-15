import React from 'react'

export default function Popular() {
	return (
		<div>
			
		</div>
	)
}

function BigCard(props){
	return(
		<div>
	<img src={props.img} alt={props.alt}/>
	<div>
		<p><span>{props.trend}</span> 
		{props.date}</p>
		<h2>{props.title}</h2>
		<p>{props.para}</p>
	</div>		
		</div>
		)
}

function SmallCard(props){
return(
<>
<div>
	<div>
		<img src="" alt=""/>

	</div>
	<div>
		<p><span>{props.trend}</span> / {props.date}</p>
		<h4>{props.title}</h4>
		<p>{props.para}</p>
	</div>
</div>
</>
	)
}