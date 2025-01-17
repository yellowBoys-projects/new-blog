import React from "react";

import CategoriesIMg from "../../../assets/cat-500x80-1.jpg";

export default function Categories() {
    return (
        <div className="grid grid-cols-1 gap-3 mx-3 sm:container sm:mx-0 sm:grid-cols-3 ">
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
        </div>
    );
}

function CategoriesCard(props) {
    return (
        <>
            <div className="ring-1 p-3  ">
                <img src={props.img} alt={props.img} className="sm:w-fit object-cover sm:h-10" />
                <span className="text-md ">{props.span}</span>
            </div>
        </>
    );
}
