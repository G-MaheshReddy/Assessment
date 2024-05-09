import React, { useEffect } from "react";
import "../pages/SuccessPage.css"
import Brunel from "../assets/Vector.png";
import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/");
    }, 5000);
    return ()=>clearTimeout(time);
  }, [navigate]);
  return (
    <div className="success-page">
      <div className="logo-name">
        <img src={Brunel} alt="Brunel" className="logo-image" />
      </div>
      <div className="success-page-layout">
        <div className="icon-layout">
          <MdCheck className="checkmark-icon" size={5} />
        </div>
        <p className="success-text-submit">Success Submitted</p>
        <div className="succes">
          <p className="congts-text">Congratulations</p>
          <p className="long-text">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
        <div className="redirect-page">
          <span className="whitespace">
            Redirecting you to Homepage in{""}{" "}
            <span className="seconds">5 Seconds</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
