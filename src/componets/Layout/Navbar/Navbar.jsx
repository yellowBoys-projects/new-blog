import React from 'react'
import AdBannerImg from '../../../assets/ads-700x70.jpg'
export default function Navbar() {
  return (
    <div className="my-5 mx-5 border border-black p-3 ">
         <nav className="grid  grid-cols-2  items-center  ">
            <a href="#" className="order-1 pl-5 border border-black w-fit">
              <span>news</span>Room
            </a>
            <img src={AdBannerImg} alt="..." className="order-2" />
            <button className="hidden"></button>
            <div className=" border border-black p-4 my-3 flex  justify-between order-3 col-span-2  ">
              <ul className="flex gap-3  border border-black ">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
              </ul>
              <div>
              <form action="" className="border border-black">
                
                <input type="text" placeholder="keyword" />
                <span>ss</span>
              </form>

              </div>
            </div>
          </nav>
    </div>
  )
}
