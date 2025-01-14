import React from 'react'
import IMg from '../../assets/news-700x435-1.jpg'
import Img02 from '../../assets/cat-500x80-3.jpg'


export default function Homepage() {
  return (
    <div><Usefun/></div>
  )
}

function Usefun(){
    return(
        <>
        <section>
            <div className='flex justify-around items-center'>
                <div className=' relative'>
<img src={IMg} alt="...." />
     <div className=' absolute bottom-1/4 left-7'>
        <p className='text-slate-200'> technology / january 01/01/2025</p>
        <h6 className='text-3xl text-slate-200'>snactus amet sed amet ipum lorem . Doloret erat elitr sea sed</h6>
     </div>
                </div>
                <div className='border border-black'>
                    <h2 className='text-2xl text-center '>categories</h2>
                    <div className='flex flex-col gap-5 p-4'>
                        <CatagoriesCArd img={Img02} alt="" span="lorem welcome the in "/>
                        <CatagoriesCArd img={Img02} alt="" span="lorem welcome the in "/>
                        <CatagoriesCArd img={Img02} alt="" span="lorem welcome the in "/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

function CatagoriesCArd(props){
    return(
        <div className=' relative'>
        <img src={props.img} alt={props.img} className='w-fit object-cover' />
        <span className=' absolute top-1/2 left-1/3 mx-auto text-slate-500 text-lg font-bold'>{props.span}</span>
        </div>
    )
}