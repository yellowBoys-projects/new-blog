import React from "react";
import AdBannerImg from "../../../assets/ads-700x70.jpg";

export default function Navbar() {
    return (
        <div className="bg-slate-300 py-3">
            <nav className="relative flex justify-between items-center px-3">
                <a href="#" className=" font-bold text-xl ">
                    <span className="text-red-500 ">news</span>Room
                </a>
                <img src={AdBannerImg} alt="..." className=" hidden "/>
                <button className=""><span><i class="fa-solid fa-bars font-bold mr-3 text-xl"></i></span></button>
                <div className="hidden absolute top-12 bg-indigo-400 right-0 ">
                    <ul className=" flex flex-col justify-center text-center px-10 ">
                        <li>
                            <a href="#" className="text-lg hover:border-b-2 border-green-700 text-white">home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:border-b-2 border-green-700 text-white">home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:border-b-2 border-green-700 text-white">home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:border-b-2 border-green-700 text-white">home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:border-b-2 border-green-700 text-white">home</a>
                        </li>
                    </ul>
                    <div className="hidden">
                        <form action="" className="">
                            <input type="text" placeholder="keyword" />
                            <span>search</span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
