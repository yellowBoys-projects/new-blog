import React from "react";

export default function Taglines() {
    return (
        <>
            <div>
                <ul className="grid-cols-3 gap-3 m-5 p-5 grid border border-black ">
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
            <li className="border border-black p-2 w-fit">
                <a href="">{props.link}</a>
            </li>
        </>
    );
}
