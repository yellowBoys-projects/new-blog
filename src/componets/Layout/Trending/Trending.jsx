import React from "react";

export default function Trending() {
    return (
        <div className=" px-2 py-1 ">
            <div className="flex justify-between items-center  ">
                <h6 className="text-md text-red-500 ">trending</h6>
                <marquee behavior="" direction="" className="ml-3 text-xs ">Please note that news developments are rapidly evolving. For the most current information, consider checking reputable news sources.

</marquee>
            </div>
        </div>
    );
}
