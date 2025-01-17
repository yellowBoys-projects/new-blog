import React from "react";
import Img from "../../../assets/news-500x280-2.jpg";
import Img2 from "../../../assets/news-100x100-1.jpg";

export default function Popular() {
    return (
        <div className=" ">
            <div className="mx-5 grid grid-cols-1 gap-3 my-5">
               
                <BigCard
                    img={Img}
                    alt="technology"
                    trend="technology"
                    date="january 01,2025"
                    title="est stet amet ipsum stet clita rebum duo"
                    para="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                />
               <div className="hidden">
                   
                <BigCard
                    img={Img}
                    alt="technology"
                    trend="technology"
                    date="january 01,2025"
                    title="est stet amet ipsum stet clita rebum duo"
                    para="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                />
               </div>

            </div>
            <div className="m-5">
            <div>
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                
            </div>
            <div className="hidden">
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                
            </div>
            <div className="hidden">
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                
            </div>
            <div className="hidden">
                <SmallCard img={Img2} alt="techology" trend="technology" date="january 01,2025" title="lorem ispum dolor sit amet consec adipis elit" />
                
            </div>
            </div>
        </div>
    );
}

function BigCard(props) {
    return (
        <div className="ring-2 ">
            <img src={props.img} alt={props.alt} className="" />
            <div className="p-3">
                <p className="text-xs py-3">
                    <span>{props.trend}</span>
                    {props.date}
                </p>
                <h2 className="text-md">{props.title}</h2>
                <p className="text-sm">{props.para}</p>
            </div>
        </div>
    );
}

export function SmallCard(props) {
    return (
        <>
            <div className="flex items-center gap-5 w-full ring-2 p-2">
                <div>
                    <img src={props.img} alt={props.alt} className="" />
                </div>
                <div>
                    <p className="text-xs">
                        <span>{props.trend}</span> / {props.date}
                    </p>
                    <h4 className="text-md">{props.title}</h4>
                </div>
            </div>
        </>
    );
}
