import React from 'react'
import AdBannerImg from '../../../assets/ads-700x70.jpg'
export default function Navbar() {
  return (
    <div>
         <nav className="grid  grid-cols-2  ">
            <a href="#" className="order-1 pl-5">
              <span>news</span>Room
            </a>
            <img src={AdBannerImg} alt="..." className="order-2" />
            <button className="hidden"></button>
            <div className=" flex  justify-between order-3 col-span-2  ">
              <ul className="flex gap-3 ">
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
                <input type="text" placeholder="keyword" />
                <span>ss</span>
              </div>
            </div>
          </nav>
    </div>
  )
}
