import React from "react";
import Popular from "../../Home/Popular/Popular.jsx";
import { SmallCard } from "../../Home/Popular/Popular.jsx";
import Taglines from "../Tags/Tag.jsx";

export default function LATEST_Showpage() {
    return (
        <div className=" ">
            <div>
                <Popular />
            </div>
            <div className="sm:flex  ">
                <div className="sm:w-3/4">
                    <h2 className="text-xl ml-5">Trending</h2>
                    <div className="m-5 flex flex-col gap-3">
                        
                    <SmallCard
                        img="https://www.free-css.com/assets/files/free-css-templates/preview/page278/newsroom/assets/img/news-100x100-1.jpg"
                        alt="...."
                        trend="technology"
                        date="january 01,2025"
                        title="clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                    />
                    <SmallCard
                        img="https://www.free-css.com/assets/files/free-css-templates/preview/page278/newsroom/assets/img/news-100x100-1.jpg"
                        alt="...."
                        trend="technology"
                        date="january 01,2025"
                        title="clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                    />
                    <SmallCard
                        img="https://www.free-css.com/assets/files/free-css-templates/preview/page278/newsroom/assets/img/news-100x100-1.jpg"
                        alt="...."
                        trend="technology"
                        date="january 01,2025"
                        title="clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                    />
                    <SmallCard
                        img="https://www.free-css.com/assets/files/free-css-templates/preview/page278/newsroom/assets/img/news-100x100-1.jpg"
                        alt="...."
                        trend="technology"
                        date="january 01,2025"
                        title="clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit"
                    />
                    </div>

                </div>
                <div className="sm:mr-5 ">
                    <h2 className="text-xl ml-5">Tags</h2>
                    <div className="sm:mt-5">
                    <Taglines />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
