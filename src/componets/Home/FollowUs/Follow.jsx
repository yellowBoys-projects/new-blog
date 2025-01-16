import React from "react";

export default function FollowUs() {
    return (
        <div className="border border-black p-5  grid grid-cols-3 justify-center mx-auto gap-5 max-h-60 ">
            <SocialCard img="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="..." user="facebook" count="100000" />
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
            <div className="flex items-center bg-red-400 w-fit p-3 gap-5">
                <img src={props.img} alt={props.alt} className="w-5" />
                <p>
                    <span>+{props.count}</span> <br />
                    {props.user}
                </p>
            </div>
        </>
    );
}

function FollowUsCard(props) {}
