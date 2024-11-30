import React from "react";
import "../main2/Main2.css";
import Rectange from "../../imgs/Rectangle 14 (1).png";
import foot from "../../imgs/image 4 (2).png";
import mobile from "../../imgs/image 3 (2).png";

const Main2 = () => {
  return (
    <div className="container">
      <section className="main-2">
        <div className="main-2-text">
          <h1>NEW YEAR</h1>
          <h2>SALE</h2>
          <p>
            <button>See more</button>
          </p>
          <br />
          <img id="foot" src={foot} alt="" />
          <img id="mobile" src={mobile} alt="" />
        </div>
        <div className="main-2-img">
          <img src={Rectange} alt="" />
          <p>save up to <span id="span-p">50%</span> off</p>
        </div>
      </section>
    </div>
  );
};

export default Main2;
