import React from "react";

export default function Newslatter() {
    return (
        <div className="ring-2 p-3 m-5 sm:m-2 sm:py-1">
            <h2 className="text-md">Newslatter</h2>
            <p className="text-sm py-2 sm:text-xs">Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
            <form action="" className="ring-2  p-2">
                <input type="text" placeholder="Your Email" className="ring-1" />
                <button className="text-md ring-2 bg-red-400 sm:px-2 sm:text-md">Sign up</button>
                <p className="text-xs py-2">please contact for form  filed </p>
            </form>

            <div>
                <img src="https://www.free-css.com/assets/files/free-css-templates/preview/page278/newsroom/assets/img/news-500x280-4.jpg" alt="...." />
            </div>
        </div>
    );
}
