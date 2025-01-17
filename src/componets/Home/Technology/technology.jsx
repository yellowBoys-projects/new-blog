import React from "react";
import Img from "../../../assets/news-500x280-4.jpg";

export default function Technology() {
    return (
        <div className="flex gap-3 m-5  ">
            <TechnologyCard img={Img} alt="" title="technology" date="january 01/01/2025" heading="santucs amet sed ipsum lorem" />
            <TechnologyCard img={Img} alt="" title="technology" date="january 01/01/2025" heading="santucs amet sed ipsum lorem" />
        </div>
    );
}

function TechnologyCard(props) {
    return (
        <>
            <div className="ring-2 p-3">
                <img src={props.img} alt={props.img} />
                <p className="text-xs py-3">
                    <span>{props.title}</span> <br/> 
                    {props.date}
                </p>
                <h3 className="text-md">{props.heading}</h3>
            </div>
        </>
    );
}
