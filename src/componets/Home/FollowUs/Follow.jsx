import React from "react";

export default function FollowUs() {
    return (
        <div className=" grid grid-cols-3 gap-1 ring-2 m-5 sm:grid-cols-2 sm:gap-2 sm:pr-3 sm:p-3  sm:w-max ">
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
            <div className=" px-2 flex items-center gap-1 w-fit  sm:ring-2 sm:w-max">
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
