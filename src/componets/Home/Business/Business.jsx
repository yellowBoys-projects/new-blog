import React from "react";
import IMg from "../../../assets/news-500x280-1.jpg";

export default function Business() {
    return (
        <div className="flex gap-3  my-5 mx-5 ">
            <BusinessCard img={IMg} alt="..." title="technology" date="january 01/01/2025" heading="santucs amet sed ispum lorem " />
            <BusinessCard img={IMg} alt="..." title="technology" date="january 01/01/2025" heading="santucs amet sed ispum lorem " />
        </div>
    );
}
function BusinessCard(props) {
    return (
        <>
            <div>
                <div className="ring-2  p-3 ">
                    <img src={props.img} alt={props.img} />
                    <p className="text-xs py-2">
                        <span>{props.title}</span> <br/> 
                        {props.date}
                    </p>
                    <h3 className="text-md">{props.heading}</h3>
                </div>
            </div>
        </>
    );
}
