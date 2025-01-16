import React from "react";

export default function Trending() {
    return (
        <div className="border border-black mx-2 my-3">
            <div className="   xl:flex justify-between xl:py-3 xl:px-5 ">
                <h6 className="text-xl text-red-500 border border-black ">trending</h6>
                <div className="border border-black">
                    <button className="btn">
                        <i class="fi fi-rr-angle-small-right"></i>
                    </button>
                    <button className="btn"></button>
                </div>
                <p className="border border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sit!</p>
                <p className="border border-black">Lorem ipsum dolor sit.</p>
            </div>
        </div>
    );
}
