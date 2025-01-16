import React from "react";
import AdBannerImg from "../../../assets/ads-700x70.jpg";
export default function Navbar() {
    return (
        <div className="">
            <nav className=" sm:grid sm:grid-cols-2 sm:justify-between items-center bg-red-500 sm:py-5 sm:px-3">
                <a href="#" className="sm:text-2xl ml-5 font-bold  ">
                    <span className="xs:bg-black    md:bg-red-500 lg:bg-sky-500 xl:bg-amber-500 2xl:bg-cyan-500 font-bold ">news</span>Room
                </a>
                <img src={AdBannerImg} alt="..." className="order-2 sm:hidden  "/>
                <button className="">button</button>
                <div className="sm:flex sm:flex-col  col-span-2 sm:hidden ">
                    <ul className="sm:flex sm:flex-col gap-3   ">
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
                            <span>search</span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
