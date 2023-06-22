import React from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import logo from "../Assets/adventum_logo.svg";
import loader from "../Assets/loader.gif";
import "../Components/CSS/Home.css";
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-header font-secondary">the adventure awaits you</h1>
        <p className="hero-subheader font-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          iste corrupti culpa.
        </p>
        <img src={logo} alt="adventum logo" className="adventum-logo" />
      </section>
      <div className="gradient-90deg"></div>

      <article className="introduction-section">
        <div id="section-1">
          <div className="box-1"></div>
          <div className="box-2">
            <div className="square-decor square-2"></div>
            <div className="square-decor square-1"></div>
          </div>
          <div className="box-3"></div>
        </div>
        <div id="section-2">
          <h2 className="introduction-header font-secondary">
            a little introduction about us
          </h2>
          <p className="introduction-content font-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, aperiam? Dolorum delectus assumenda quia error illum
            dolorem ut repudiandae, quis corrupti quibusdam doloremque alias,
            libero asperiores ducimus harum nam autem beatae qui voluptate
          </p>
        </div>
        <div id="section-3">
          <div className="loader-section">
            <img src={loader} alt="loading animation" className="loader" />
            <div className="square-decor square-3"></div>
            <div className="square-decor square-4"></div>
          </div>
          <div className="circle-section">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
          </div>
        </div>
      </article>

      <div className="gradient-0deg"></div>

      <article className="introduction-section hint">
        <div id="section-1">
          <div className="box-1"></div>
          <div className="box-2">
            <div className="square-decor square-2"></div>
            <div className="square-decor square-1"></div>
          </div>
          <div className="box-3"></div>
        </div>
        <div id="section-2">
          <h2 className="introduction-header font-secondary crossword-header">
            what do we have more?
          </h2>
          <div className="crossword">insert crossword here</div>
        </div>
        <div id="hint-carousel">
          <h2 className=" introduction-header crossword-hint-header font-secondary">
            hint
          </h2>
          <p className="introduction-content font-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            itaque praesentium recusandae?
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </article>
    </>
  );
};

export default Home;
