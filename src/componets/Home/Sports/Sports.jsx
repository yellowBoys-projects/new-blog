import React from "react";
import Img from "../../../assets/news-500x280-2.jpg";

export default function Sports() {
    return (
        <div className="flex gap-3 px-4 my-5">
            <SportsCard img={Img} alt="" title="" date="" heading="" />
            <SportsCard img={Img} alt="" title="" date="" heading="" />
        </div>
    );
}

function SportsCard(props) {
    return (
        <>
            <div className="p-5  border border-black">
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
