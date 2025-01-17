import React from "react";
import AdBannerImg from "../../assets/ads-700x70.jpg";
import Trending from "./Trending/Trending";
import Navbar from "./Navbar/Navbar";

function Layout() {
    return (
        <section className="  layout-section w-full    ">
            <div className="">
                <Trending />
                <Navbar />
            </div>
        </section>
    );
}

export default Layout;
