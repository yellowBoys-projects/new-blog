import React from 'react'
import Categories from './Categories.jsx'
import Logo from './Logo.jsx'
import Tags from './Tags.jsx'
import Links from './Links.jsx'



export default function BIO_Showpage() {
	return (
		<div className="flex justify-around">
			<Logo/>
			<Categories/>
			<Tags/>
			<Links/>

		</div>
	)
}
