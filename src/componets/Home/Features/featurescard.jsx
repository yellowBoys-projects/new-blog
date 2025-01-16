import React from "react";
import IMg03 from "../../../assets/news-300x300-1.jpg";

export default function Features() {
    return (
        <div>
            <div className="border border-black grid grid-cols-4 content-center gap-3 justify-around mx-auto w-11/12 px-6 py-4 ">
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
            <div className="border border-black p5 relative shadow-2xl shadow-slate-50 max-w-60">
                <img src={props.img} alt={props.alt} className="w-full  " />
                <div className=" border border-black  absolute top-2/4">
                    <p>{props.span}</p>
                    <p>{props.title}</p>
                </div>
            </div>
        </>
    );
}
