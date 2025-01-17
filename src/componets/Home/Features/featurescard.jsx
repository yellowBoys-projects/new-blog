import React from "react";
import IMg03 from "../../../assets/news-300x300-1.jpg";

export default function Features() {
    return (
        <div>
            <div className="  ">
                <div className="flex mx-5 gap-3">
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                    
                </div>
                <div className="hidden">
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                <FeaturedCard img={IMg03} alt="..." span="technology / january 01, 2025" title="santus amet sed ipsum lorem" />
                    
                </div>
            </div>
        </div>
    );
}

function FeaturedCard(props) {
    return (
        <>
            <div className="ring-1 w-fit mx-auto">
                <img src={props.img} alt={props.alt} className="w-40 m-auto   " />
                <div className="text-center py-5">
                    <p className="text-xs">{props.span}</p>
                    <p className="text-sm"> {props.title}</p>
                </div>
            </div>
        </>
    );
}
