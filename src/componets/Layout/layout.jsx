import React from "react";
import AdBanner from "../../assets/ads-700x70.jpg";

function Layout() {
  return (
    <section className="layout-section w-100 border-2 border-black ">
      <div className="">
        <div className="xl:flex justify-between xl:py-3 xl:px-5 ">
          <h6 className="text-xl text-red-500 ">trending</h6>
          <div>
            <button className="btn">
              <i class="fi fi-rr-angle-small-right"></i>
            </button>
            <button className="btn"></button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sit!
          </p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <nav className="grid  grid-cols-2  ">
            <a href="#" className="order-1 pl-5">
              <span>news</span>Room
            </a>
            <img src={AdBanner} alt="..." className="order-2" />
            <button className="hidden"></button>
            <div className=" flex  justify-between order-3 col-span-2  ">
              <ul className="flex gap-3">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">home</a>
                </li>
              </ul>
              <div>
                <input type="text" placeholder="keyword" />
                <span>ss</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Layout;
