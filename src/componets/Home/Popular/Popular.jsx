import React from "react";
import Img from "../../../assets/news-500x280-2.jpg";
import Img2 from "../../../assets/news-100x100-1.jpg";

export default function Popular() {
    return (
        <div className="border border-black my-5 mx-5 w-1/2 p-5 ">
            <div className="border border-black p-5 flex gap-5 justify-around  ">
                <BigCard
                    img={Img}
                    alt="technology"
                    trend="technology"
                    date="january 01,2025"
                    title="est stet amet ipsum stet clita rebum duo"
                    para="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                />
                <BigCard
                    img={Img}
                    alt="technology"
                    trend="technology"
                    date="january 01,2025"
                    title="est stet amet ipsum stet clita rebum duo"
                    para="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                />
            </div>
            <div className="p-5 border border-black grid grid-cols-2 my-5 mx-5 w-11/12 gap-5">
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
            </div>
        </div>
    );
}

function BigCard(props) {
    return (
        <div className="">
            <img src={props.img} alt={props.alt} className="" />
            <div>
                <p>
                    <span>{props.trend}</span>
                    {props.date}
                </p>
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </div>
        </div>
    );
}

export function SmallCard(props) {
    return (
        <>
            <div className="flex items-center gap-5 w-full border border-black p-1">
                <div>
                    <img src={props.img} alt={props.alt} className="" />
                </div>
                <div>
                    <p>
                        <span>{props.trend}</span> / {props.date}
                    </p>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </>
    );
}
