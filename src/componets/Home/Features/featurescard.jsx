import React from "react";
import IMg03 from "../../../assets/news-300x300-1.jpg";

export default function Features() {
    return (
        <div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-5 justify-around mx-auto  ">
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
            </div>
        </div>
    );
}

function FeaturedCard(props) {
    return (
        <>
            <div className="border border-slate-300 w-fit mx-auto">
                <img src={props.img} alt={props.alt} className="w-40 m-auto   " />
                <div className="sm:text-center py-5">
                    <p className="sm:text-xs">{props.span}</p>
                    <p className="sm:text-sm"> {props.title}</p>
                </div>
            </div>
        </>
    );
}
