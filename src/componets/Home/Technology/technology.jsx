import React from "react";
import Img from "../../../assets/news-500x280-4.jpg";

export default function Technology() {
    return (
        <div className="flex gap-3 px-4 my-5w ">
            <TechnologyCard img={Img} alt="" title="technology" date="january 01/01/2025" heading="santucs amet sed ipsum lorem" />
            <TechnologyCard img={Img} alt="" title="technology" date="january 01/01/2025" heading="santucs amet sed ipsum lorem" />
        </div>
    );
}

function TechnologyCard(props) {
    return (
        <>
            <div className="border border-black p-5">
                <img src={props.img} alt={props.img} />
                <p>
                    <span>{props.title}</span>
                    {props.date}
                </p>
                <h3>{props.heading}</h3>
            </div>
        </>
    );
}
