import React from "react";
import web from "../images/pic1.png";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <section id="home" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row">
                <div className="col-md-8 pt-5 mx-auto d-flex flex-column justify-content-center  mt-100">
                  <h2>
                    <strong className="brand-name">DahalTech</strong> helps 
                    to flourish  your business
                  </h2>
                  <h2 className="my-3"> with best it solutions</h2>
                  <button className="btn btn-outline-warning mt-5 ">Get started <span className="mx-4">&#8594;</span></button>
                 
                </div>

                <div className="col-md-4  pt-5 d-flex justify-content-center">
                  <img src={web} alt="thiis pic" className="img-fluid image1" />
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

export default Home;
