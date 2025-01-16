import React from "react";

import CategoriesIMg from "../../../assets/cat-500x80-1.jpg";

export default function Categories() {
  return (
    <div className="flex flex-col gap-5 p-4 border border-black p-5">
      <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
      <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
      <CategoriesCard img={CategoriesIMg} alt="" span="lorem welcome the in " />
    </div>
  );
}

function CategoriesCard(props) {
  return (
    <>
      <div className=" relative border border-black p-5">
        <img src={props.img} alt={props.img} className="w-fit object-cover" />
        <span className=" border border-black absolute top-1/2 left-1/3 mx-auto text-slate-500 text-lg font-bold">
          {props.span}
        </span>
      </div>
    </>
  );
}
