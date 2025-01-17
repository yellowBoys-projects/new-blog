import React from "react";

export default function Trending() {
    return (
        <div className=" px-2 py-1 sm:py-2 sm:px-3 ">
            <div className="flex justify-between items-center  ">
                <h6 className="text-md text-red-500 sm:text-blue-900 md:text-red-600 lg:text-green-900 xl:text-red-5000 2xl:text-green-900 sm:text-xl  ">trending</h6>
                <marquee behavior="" direction="" className="ml-3 text-xs sm:text-sm ">Please note that news developments are rapidly evolving. For the most current information, consider checking reputable news sources.

</marquee>
            </div>
        </div>
    );
}
