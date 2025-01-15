import React from "react";
import IMg from "../../assets/news-700x435-1.jpg";
import Img03 from "../../assets/news-300x300-1.jpg";
import Layout from '../Layout/layout.jsx'
import ImgCard from "../../assets/news-100x100-1.jpg";
import Categories from "./Categories/categories";
import Features from "./Features/featurescard";
import Business from "./Business/Business";
import Sports from "./Sports/Sports";
import Technology from "./Technology/technology";
import Entertianment from "./Entertainment/Entertianment";

export default function Homepage() {
  return (
    <div>
    <Layout/>
      <div className="flex">
        <HomeSlideSmallCard
          img={ImgCard}
          alt=""
          para="lorem ipsum dolor sit amat consec adisplic elit"
        />
        <HomeSlideSmallCard
          img={ImgCard}
          alt=""
          para="lorem ipsum dolor sit amat consec adisplic elit"
        />
        <HomeSlideSmallCard
          img={ImgCard}
          alt=""
          para="lorem ipsum dolor sit amat consec adisplic elit"
        />
      </div>

      <Usefun />
    </div>
  );
}

function Usefun() {
  return (
    <>
      <section>
        <div className="flex justify-around items-center">
          <div className=" relative">
            <img src={IMg} alt="...." />
            <div className=" absolute bottom-1/4 left-7">
              <p className="text-slate-200"> technology / january 01/01/2025</p>
              <h6 className="text-3xl text-slate-200">
                snactus amet sed amet ipum lorem . Doloret erat elitr sea sed
              </h6>
            </div>
          </div>
          <div className="border border-black">
            <h2 className="text-2xl text-center  ">categories</h2>
            <Categories />
          </div>
          {/* block */}
        </div>
        {/* features block div */}
        <div>
          features
          <Features />
        </div>
{/* block 03  */}
        <div className="grid grid-cols-2 border border-black my-10 mx-5">
            {/* business block div */}
          <div>
            Business
            <Business />
          </div>
          {/* tecnology block div */}
          <div>
            technology
            <Technology />
          </div>
        </div>
        {/* block 04  */}
        <div className="grid grid-cols-2 mx-5 my-10  border border-black">
            {/* entertainment block div */}
            <div>

            Entertainment
            <Entertianment/>
            </div>
            {/* sports block div */}
            <div>
                sports
                <Sports/>
            </div>
        </div>
      </section>
    </>
  );
}

function HomeSlideSmallCard(props) {
  return (
    <>
      <div className="border-2 border-black my-6 flex justify-between items-center gap-5 w-fit p-3">
        <img
          src={props.img}
          alt={props.alt}
          className="bg-cover object-cover w-fit"
        />
        <p>{props.para}</p>
      </div>
    </>
  );
}
