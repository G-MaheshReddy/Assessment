import React from "react";

import Brunel from "../assets/Vector.png";

import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Accordion from "./Accordion";
import Content from "./Content";

const Navbar = () => {

  const navigate=useNavigate();

  return (
    <>
    <section className="navSection">
      <header className="header">
        <div className="logo">
          <img src={Brunel} alt="Brunel" className="nav-logo"/>
        </div>
        <div className="navLinks">
          <button className="btn" onClick={()=>navigate("/register")}>Get Started</button>
          <button className="onboard-btn">Onboard Talent</button>
        </div>
      </header>
    </section>
    <Content/>
    <Accordion/>
    <Footer/>
   
    </>
  );
};

export default Navbar;
