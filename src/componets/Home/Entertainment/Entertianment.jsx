import React from 'react'
import Img from '../../../assets/news-500x280-6.jpg'

export default function Entertianment() {
  return (
    <div className='flex gap-3 px-4'>
<EntertianmentCard img={Img} alt="" title="sd" date="" heading=""/>
<EntertianmentCard img={Img} alt="" title="sd" date="" heading=""/>

    </div>
  )
}

function EntertianmentCard(props){
    return(
        <>
          <div>
                <img src={props.img} alt={props.img} />
                <p><span>{props.title}</span>{props.date}</p>
                <h3>{props.heading}</h3>
            </div>
        </>
    )
}
