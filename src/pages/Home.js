import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
