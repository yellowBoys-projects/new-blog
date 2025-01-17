import React from "react";

export default function FollowUs() {
    return (
        <div className=" grid grid-cols-3 gap-1 ring-2 m-5  ">
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />

            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
        </div>
    );
}

function SocialCard(props) {
    return (
        <>
            <div className=" px-1 flex items-center gap-1">
                <img src={props.img} alt={props.alt} className="size-4 mx-auto" />
                <p className="text-xs py-3"> 
                    <span>+{props.count}</span> <br />
                    {props.user}
                </p>
            </div>
        </>
    );
}

function FollowUsCard(props) {}
