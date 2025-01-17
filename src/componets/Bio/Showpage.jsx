import React from "react";
import Categories from "./Categories.jsx";
import Logo from "./Logo.jsx";
import Tags from "./Tags.jsx";
import Links from "./Links.jsx";



export default function BIO_Showpage() {
    return (
        <div className="grid grid-cols-2 m-5 gap-3  ">
            <Logo />
            <Categories />
            <Tags />
            <Links />
        </div>
    );
}
