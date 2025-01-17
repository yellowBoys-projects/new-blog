import React from "react";
import IMg from "../../assets/news-700x435-1.jpg";
import Img03 from "../../assets/news-300x300-1.jpg";
import Layout from "../Layout/layout.jsx";
import ImgCard from "../../assets/news-100x100-1.jpg";
import Categories from "./Categories/categories";
import Features from "./Features/featurescard";
import Business from "./Business/Business";
import Sports from "./Sports/Sports";
import Technology from "./Technology/technology";
import Entertianment from "./Entertainment/Entertianment";
import FollowUs from "./FollowUs/Follow.jsx";
import Popular from "./Popular/Popular.jsx";
import Newslatter from "./Newslatter/Newslatter.jsx";

import BIO_Showpage from "../Bio/Showpage.jsx";
import LATEST_Showpage from "../Latestpage/Showpage/Showpage.jsx";

export default function Homepage() {
    return (
        <div>
            <Layout />
            <div className=" mx-4 my-3 sm:m-5 hidden">
                <div className="">
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
                                    </div>
                <div className="hidden">
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
                                    </div>
                <div className="hidden">
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
                                    </div>
            </div>

            <Usefun />
        </div>
    );
}

function Usefun() {
    return (
        <>
            <section>
                <div className="sm:container flex flex-col my-5 gap-10  sm:gap-1 sm:my-0  sm:my-7 sm:mx-2   ">
                    <div className=" relative sm:container ">
                        <img src={IMg} alt="...." className="w-auto   " />
                        <div className=" absolute bottom-10 left-5 sm:bottom-10 sm:px-1">
                            <p className="text-slate-200 sm:text-sm "> <span className="text-red-500">technology</span> / january 01/01/2025</p>
                            <h6 className="text-lg text-slate-600  leading-8 sm:text-xl  ">snactus amet sed amet ipum lorem . Doloret erat elitr sea sed</h6>
                        </div>
                    </div>
                    <div className="my-5 sm:my-2 ">
                        <h2 className="text-xl ml-5 py-5  sm:mb-0 ">categories</h2>
                        <Categories />
                    </div>
                    {/* block */}
                </div>
                {/* features block div */}
                <div className="">
                    <h2 className="ml-5 text-xl mb-5  ">Features</h2>
                    <Features />
                </div>
                {/* block 03  */}
                <div className=" my-5   ">
                    {/* business block div */}
                    <div>
                        <h2 className="ml-5 text-xl">Business</h2>
                        <Business />
                    </div>
                    {/* tecnology block div */}
                    <div >
                        <h2 className="ml-5 text-xl"> technology</h2>
                        <Technology />
                    </div>
                </div>
                {/* block 04  */}
                <div className=" hidden grid grid-cols-2 mx-5 my-10  border border-black">
                    {/* entertainment block div */}
                    <div className="mx-5 my-5 p-5 border border-black">
                        <h2 className="text-xl">Entertainment</h2>
                        <Entertianment />
                    </div>
                    {/* sports block div */}
                    <div className="border border-black p-5 mx-5 my-5">
                        <h2>sports</h2>
                        <Sports />
                    </div>
                </div>

                <div className="">
                <h2 className="text-xl ml-5 ">Popular</h2>
                    <Popular />
                    <div className="sm:flex sm:items-center ">
                    <div className="">
                    <h2 className="text-xl ml-5">Follow us</h2>
                        <FollowUs />
                        
                    </div>
                    <div className="">
                        <Newslatter />
                        
                    </div>
                    </div>
                </div>
                <div className="">
                <div>
                <h2 className="text-xl ml-5 ">Latest page</h2>
                <LATEST_Showpage />
                    
                </div>

                <div>
                <BIO_Showpage />
                    
                </div>
                    
                </div>


                 <footer>
                <p className="text-center text-xs pt-4 px-1 sm:text-sm">&copy;Your Site Name. All Rights Reserved. Designed by HTML Codex</p>
            </footer>{" "}
            </section>
        </>
    );
}

function HomeSlideSmallCard(props) {
    return (
        <>
            <div className=" ring-1 p-2 flex gap-3 items-center sm:ring-2 sm:p-3 sm:gap-5">
               <a href="#"> <img src={props.img} alt={props.alt} className="object-cover size-10 mx-auto sm:size-14" /></a>
                <p className="text-xs text-center sm:text-lg"><a href="">{props.para}</a></p>
            </div>
           
        </>
    );
}
