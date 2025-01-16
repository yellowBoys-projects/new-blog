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
            <div className="flex border border-black mx-5 my-3 p-5 gap-3">
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
                <HomeSlideSmallCard img={ImgCard} alt="" para="lorem ipsum dolor sit amat consec adisplic elit" />
            </div>

            <Usefun />
        </div>
    );
}

function Usefun() {
    return (
        <>
            <section>
                <div className="border border-black mx-5 my-4 p-5 flex justify-around gap-5 items-center">
                    <div className=" relative border border-black p-5">
                        <img src={IMg} alt="...." />
                        <div className=" absolute bottom-1/4 left-7 border border-black mx-5 p-5">
                            <p className="text-slate-200"> technology / january 01/01/2025</p>
                            <h6 className="text-3xl text-slate-200">snactus amet sed amet ipum lorem . Doloret erat elitr sea sed</h6>
                        </div>
                    </div>
                    <div className="border border-black p-5">
                        <h2 className="text-2xl text-center  ">categories</h2>
                        <Categories />
                    </div>
                    {/* block */}
                </div>
                {/* features block div */}
                <div className="border border-black mx-5 p-5">
                    <h2>Features</h2>
                    <Features />
                </div>
                {/* block 03  */}
                <div className="grid grid-cols-2 border border-black my-10 ">
                    {/* business block div */}
                    <div>
                        <h2>Business</h2>
                        <Business />
                    </div>
                    {/* tecnology block div */}
                    <div>
                        <h2> technology</h2>
                        <Technology />
                    </div>
                </div>
                {/* block 04  */}
                <div className="grid grid-cols-2 mx-5 my-10  border border-black">
                    {/* entertainment block div */}
                    <div className="mx-5 my-5 p-5 border border-black">
                        <h2>Entertainment</h2>
                        <Entertianment />
                    </div>
                    {/* sports block div */}
                    <div className="border border-black p-5 mx-5 my-5">
                        <h2>sports</h2>
                        <Sports />
                    </div>
                </div>
                <div className="flex w-full border border-black">
                    <Popular />
                    <div className="flex flex-col gap-40 justify-center items-center w-1/2">
                        <FollowUs />
                        <Newslatter />
                    </div>
                </div>

                <LATEST_Showpage />

                <BIO_Showpage />
            </section>
        </>
    );
}

function HomeSlideSmallCard(props) {
    return (
        <>
            <div className="border-2 border-black my-6 flex justify-between items-center gap-5 w-fit p-3">
                <img src={props.img} alt={props.alt} className="bg-cover object-cover w-fit" />
                <p>{props.para}</p>
            </div>
            <footer>
                <p>&copy;Your Site Name. All Rights Reserved. Designed by HTML Codex</p>
            </footer>{" "}
        </>
    );
}
