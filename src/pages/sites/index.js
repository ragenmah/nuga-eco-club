import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Container } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Selectors from "../../components/selectors/selectors";
import SearchBarBody from "../../components/searchbar/searchbar_body";

export const Sites = () => {
  // const [map, setMap] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            <div className="search-box-container">
              <div className=" order-2 order-lg-1 h-100 d-lg-flex justify-content-space-around ">
                <div className="align-self-center w-100">
                  <div className="intro mx-auto">
                    <h1>{introdata.title}</h1>
                    {/* <h2 className="mb-1x">{introdata.title}</h2> */}
                    <div>
                      <SearchBarBody />
                      <br />

                      {showSearch ? <Selectors /> : <></>}
                      <div
                        className="show-more-filter"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <span>{showSearch ? "Hide" : "More"} Options</span>
                        {!showSearch ? (
                          <i className="fas fa-chevron-down m-1" />
                        ) : (
                          <i className="fas fa-chevron-up m-1" />
                        )}
                      </div>
                    </div>
                    {/* <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1> */}
                    {/* <p className="mb-1x">{introdata.description}</p>
                  <p className="mb-1x">{dataabout.title}</p>
                  <div className="intro_btn-action pb-5">
                    <Link to="/portfolio" className="text_2">
                      <div id="button_p" className="ac_btn btn ">
                        Discover
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Us
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div> */}
                  </div>
                </div>
                <div className="align-self-center w-100 m-2 shape">
                  <img
                    src="https://images.pexels.com/photos/5952518/pexels-photo-5952518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="heritage-img"
                  />
                </div>
              </div>
            </div>

            {/* <Row>
              <img src="static/backgrounds/image_1.png"></img>
            </Row> */}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
