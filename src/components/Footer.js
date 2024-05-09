import React from "react";
import Copy from "../assets/c.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-text">
          <div style={{ width: "287px", height: "24px" }}>
            <div>
              <span className="frame">
                <img src={Copy} className="frame-img" alt="Copyright" />
              </span>{" "}
              {""}
              <span className="frame-text">
                Talup 2023. All rights reserved
              </span>
            </div>
          </div>
          <div className="terms-cond">
            <span className="terms-text">Terms & Conditions</span>
            <span className="terms-text">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
