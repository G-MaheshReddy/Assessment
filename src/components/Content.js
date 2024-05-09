import React from "react";

import "../components/Content.css";
import Arrow from "../assets/Arrow.png";
import { GoDotFill } from "react-icons/go";
import Sparkle from "../assets/Sparkle.png";
import Boost from "../assets/Boost.png";
import Image from "../assets/Image.png";

const Content = () => {
  return (
    <div className="content-layout">
      <div className="content-group">
        <button className="explore-more-btn">
          <span>Explore More </span>
          <span className="arrow">
            <img src={Arrow} className="right-arrow" alt="Right Arrow" />
          </span>
        </button>
        <div className="closure-layout">
          <div className="closure-dots">
            <GoDotFill className="green-dot" />
            <GoDotFill className="normal-dot" />
            <GoDotFill className="normal-dot" />
          </div>
        </div>
        <div className="enhance-text">
          <span className="enhance">
            Enhance fortune 50 company’s insights teams research capabilities
          </span>
        </div>
        <div className="top-layout">
          <div className="success-stories-text">Success stories</div>
          <div className="journey-text">
            Every success journey
            <br /> we’ve encountered.
          </div>
        </div>
      </div>
      <div className="image-group-layout">
        <div className="frameOne">
          <img src={Sparkle} className="sparkle" alt="Sparkle" />
          <div className="fourty-text">40%</div>
          <br />
          <div className="achieved-text">
            Achieved reduction in project execution time
            <br /> by optimising team
            <br /> availability
          </div>
        </div>
      </div>
      <div className="frameTwo">
        <div className="frameTwo-inner">
          <span className="million-text">$0.5</span>
          <span className="dollar-text">MILLION</span>
        </div>
        <div className="reduced-text">
          Reduced client expenses by saving on hiring and employee costs.
        </div>
      </div>
      <div className="frameThree">
        <div className="group-one">
          <div className="group-one-frame-one">
            <div className="boost-image-layout">
              <img src={Boost} className="boost-image" alt="Boost" />
            </div>
          </div>
          <div className="group-2">
            <div className="days-text">10 DAYS</div>
            <div className="emp-text">Staff Deployment</div>
          </div>
        </div>
      </div>
      <div className="mask-image-group">
        <div className="mask-image-layout">
            <img src={Image} alt="Img" className="mask-img"/>
        </div>

      </div>
    </div>
  );
};

export default Content;
