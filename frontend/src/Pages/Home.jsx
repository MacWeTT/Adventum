// import react from "react";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import logo from "../Assets/adventum_logo.svg"
import loader from "../Assets/loader.gif"
import "../Components/CSS/Home.css";
const Home = () => {
  return (
    <>
      <section className="hero-section bg-primary h-screen flex flex-col justify-center items-center gap-12 md:gap-12">
        <h1 className="hero-header font-secondary text-center pt-12 font-[700] md:text-6xl   text-4xl">the adventure awaits you</h1>
        <p className="hero-subheader font-secondary text-center font-[400] md:text-4xl text-xl  md:w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          iste corrupti culpa.
        </p>
        <img src={logo} alt="adventum logo" className="adventum-logo" />
      </section>



      <div className="gradient-90deg"></div>

      <section className="about-section bg-primary flex flex-col justify-center items-center gap-12">
      </section>

      {/* <article className="introduction-section font-secondary">
        <div id="section-1">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
        </div>
        <div id="section-2">
          <h2 className="introduction-header">
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
          <div className="newbox-1">
            <img
              src={loader}
              alt="loading animation"
              className="loader"
            />
          </div>
          <div className="newbox-2">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>
      </article> */}

      <div className="gradient-0deg"></div>

      <section className="hint-section bg-primary flex flex-col justify-center items-center gap-12">
      </section>
    </>
  );
};

export default Home;
