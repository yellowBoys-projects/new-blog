import React from "react";
import Popular from "../../Home/Popular/Popular.jsx";
import { SmallCard } from "../../Home/Popular/Popular.jsx";
import Taglines from "../Tags/Tag.jsx";

export default function LATEST_Showpage() {
    return (
        <div className="flex ">
            <div>
                <Popular />
            </div>
            <div>
                <div>
                    Trending
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
                <div>
                    <h2>Tags</h2>
                    <Taglines />
                </div>
            </div>
        </div>
    );
}
