import React from "react";
import aboutpic from "../images/about.png";
import Footer from "./Footer";
function About() {
  return (
    <>
      <section id="about">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row mt-100">
              <div className="col-md-8 d-flex justify-content-center">
                <div className="about-content">
                  <h3 className="tab-center">About Dahaltech</h3>
                  <p className="mt-5">
                    DahalTech is a fast growing software technology that culture
                    and creativity at the heart of everything we do..our mission
                    is to help customers unlock their creativity and build
                    exceptional content using our uniquely powerful design
                    platform and tirelessly helpful support and educational
                    resources.
                  </p>
                </div>
              </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="about-image">
                    <img
                      src={aboutpic}
                      alt="about pic"
                      className="img-fluid image-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>
      <Footer />
    </>
  );
}

export default About;
