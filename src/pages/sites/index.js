import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Container } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Selectors from "../../components/selectors/selectors";
import SearchBarBody from "../../components/searchbar/searchbar_body";
import { HeritageWalkMap } from "../../components/maps/heritage_walk_map";

import heritageWalkImg from "../../assets/heritage-walk.webp";

export const Sites = () => {
  // const [map, setMap] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <HelmetProvider>
      <section id="home" className="sites">
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
                  </div>
                </div>
                <div className="align-self-center w-100 mt-2 shape">
                  <img src={heritageWalkImg} className="heritage-img" />
                </div>
              </div>
            </div>

            {/* <Row>
              <img src="static/backgrounds/image_1.png"></img>
            </Row> */}
          </div>
        </div>
        {/* <HeritageWalkMap /> */}
      </section>
    </HelmetProvider>
  );
};
