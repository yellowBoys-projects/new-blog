import React from "react";
import IMg from "../../../assets/news-500x280-1.jpg";

export default function Business() {
    return (
        <div className="flex gap-3 px-4 my-5">
            <BusinessCard img={IMg} alt="..." title="technology" date="january 01/01/2025" heading="santucs amet sed ispum lorem " />
            <BusinessCard img={IMg} alt="..." title="technology" date="january 01/01/2025" heading="santucs amet sed ispum lorem " />
        </div>
    );
}
function BusinessCard(props) {
    return (
        <>
            <div>
                <div className="border border-black p-5">
                    <img src={props.img} alt={props.img} />
                    <p>
                        <span>{props.title}</span>
                        {props.date}
                    </p>
                    <h3>{props.heading}</h3>
                </div>
            </div>
        </>
    );
}
