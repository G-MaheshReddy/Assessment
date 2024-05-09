import React from "react";
import Union from "../assets/Union.png";
import Plus from "../assets/Plus.png";
import Minus from "../assets/Minus.png";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-layout">
        <div className="left">
          <div className="left-text">
            <div>
              {" "}
              <span className="mind-text">What’s on your mind</span>
              <br />
              <span className="ask-qns">Ask Questions</span>
            </div>
          </div>
          <div className="union-layout">
            <img src={Union} alt="Union" />
          </div>
          <div className="right">
            <div className="acc-1">
              <span className="acc-head-1">Do you offer freelancers?</span>
              <div className="plus-symbol">
                <span className="symbol">
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
            <div className="divider-line"></div>

            <div className="acc-2">
              <span className="acc-head-2">
                What’s the guarantee that I will be satisfied
                <br /> with the hired talent?
              </span>
              <div className="plus-symbol">
                <span className="symbol">
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
            <div className="divider-line"></div>

            <div className="acc-3">
              <span className="acc-head-3">
                Can I hire multiple talents at once?
              </span>
              <div className="plus-symbol">
                <span className="symbol">
                  <img src={Minus} alt="plus" />
                </span>
              </div>
            </div>

            <span className="accordion-inline-text">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and
              <br /> refer to the agreement. Escalate to platform support if
              needed, considering
              <br /> mediation. Review policies, seek collaborative solutions
              for resolution.
            </span>
            <div className="divider-line" style={{ marginTop: "24px" }}></div>

            <div className="acc-4">
              <span className="acc-head-4">
                Why should I not go to an agency directly?
              </span>
              <div className="plus-symbol">
                <span className="symbol">
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
            <div className="divider-line"></div>

            <div className="acc-5">
              <span className="acc-head-5">
                Who can help me pick a right skillset
                <br />
                and duration for me?
              </span>
              <div className="plus-symbol">
                <span className="symbol">
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
