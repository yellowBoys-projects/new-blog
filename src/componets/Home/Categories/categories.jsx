import React from "react";

import CategoriesIMg from "../../../assets/cat-500x80-1.jpg";

export default function Categories() {
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-3 ">
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
            <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
        </div>
    );
}

function CategoriesCard(props) {
    return (
        <>
            <div className="sm:static relative border border-slate-300 p-5">
                <img src={props.img} alt={props.img} className="sm:w-fit object-cover sm:h-10" />
                <span className="sm:static sm:text-md sm:text-center font-bold">{props.span}</span>
            </div>
        </>
    );
}
