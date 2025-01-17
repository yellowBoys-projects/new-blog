import React from "react";

export default function Taglines() {
    return (
        <>
            <div>
                <ul className="grid-cols-4 gap-3 m-5 p-5 grid ring-2 sm:grid-cols-2 sm:p-0 sm:m-0   ">
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="Home" />
                    <Tag link="about" />
                </ul>
            </div>
        </>
    );
}

function Tag(props) {
    return (
        <>
            <li className="  p-2 w-fit sm:w-28">
                <a href="#" className="hover:border-b-2 border-blue-500 ">{props.link}</a>
            </li>
        </>
    );
}
