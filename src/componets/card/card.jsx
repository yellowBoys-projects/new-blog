import React from 'react'
import Img01 from '../../assets/news-100x100-1.jpg'

export default function Card() {
  return (
    <div className='flex gap-5 mx-5'>
<SmallCard img={Img01} alt="" para="lorem ipsum dolor sit amat consec adisplic elit"/>
<SmallCard img={Img01} alt="" para="lorem ipsum dolor sit amat consec adisplic elit"/>
<SmallCard img={Img01} alt="" para="lorem ipsum dolor sit amat consec adisplic elit"/>

    </div>
  )
}


function SmallCard(props){
    return(
        <>
        <div className='border-2 border-black my-6 flex justify-between items-center gap-5 w-fit p-3'>
            <img src={props.img} alt={props.alt} className='bg-cover object-cover w-fit' />
            <p>{props.para}</p>
        </div>
        </>
    )
}