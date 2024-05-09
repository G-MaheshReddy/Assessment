import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Brunel from "../assets/Vector.png";
import "../pages/RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LiaExclamationCircleSolid } from "react-icons/lia";



const RegisterPage = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.user)
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [buttonColor, setButtonColor] = useState("#C9C9C9");
  const[showInvaliEmail,setShowInvalidEmail]=useState(false);

  const btnColor=email.trim() !== "" && name.trim() !=="" ? "#000000" : "#C9C9C9"

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 

  const handleNameChange = (e) => {
    setName(e.target.value);
    setButtonColor(btnColor);
  };

  const handleEmailChange = (e) => {
    const mail=e.target.value
    setEmail(mail);
    setButtonColor(btnColor);
    setShowInvalidEmail(!isValidEmail(mail))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN",payload:{
      name: name,
      email:email,
      isLogined:true
    }})
    setEmail("");
    setName("");    
  };

  useEffect(() => {
    console.log("userdata", data);
    if(data && data.isLogined){
      navigate("/success")
    }
  }, [data,navigate]); 

  const isValidForm = email.trim() !== "" && name.trim() !== "" && isValidEmail(email);

  return (
    <div className="register-form">
      <div className="register-page">
        <div className="logo-name">
          <img src={Brunel} alt="Brunel" className="logo-image" />
        </div>
        <button className="cancel-button" onClick={()=>navigate("/")}>
          <HiMiniXMark style={{ width: "32px", height: "32px" }} size={24} />
        </button>
      </div>

      <div className="layout">
        <div className="inner-layout">
          <div className="text-layout">
            <p className="text">Registration Form</p>
          </div>
          <div>
            <p className="success-text">Start your success Journey here!</p>
          </div>
        </div>
        <div className="form-layout">
          <div className="inner-form-layout">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
              />
              {showInvaliEmail && (
                <div className="valid-email">
                  <span>
                  <LiaExclamationCircleSolid className="badge"/>
                  </span>
                  <span className="invalid-text">Enter a valid email address</span>
                
                </div>
              )}
              <button
                type="submit"
                className="login"
                disabled={!isValidForm}
                style={{ backgroundColor: buttonColor }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
