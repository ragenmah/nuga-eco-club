import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataabout } from "../../content_option";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { About } from "../about";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SigIn } from "../auth/sigin";
import Selectors from "../../components/selectors/selectors";
import SearchBarNav from "../../components/searchbar/searchbar_nav";
import SearchBarBody from "../../components/searchbar/searchbar_body";
import { MapNepal } from "../../components/maps";

export const Home = () => {
  // const [map, setMap] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  // useEffect(() => {
  //   if (!map) return;
  //   const fetchGeoJSON = async () => {
  //     const response = await fetch(
  //       "https://cdn.rawgit.com/johan/world.geo.json/34c96bba/countries/GBR.geo.json"
  //     );
  //     const geoJSON = await response.json();
  //     const osm = L.TileLayer.boundaryCanvas(
  //       "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //       {
  //         boundary: geoJSON,
  //         attribution:
  //           '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, UK shape <a href="https://github.com/johan/world.geo.json">johan/word.geo.json</a>',
  //       }
  //     );
  //     map.addLayer(osm);
  //     const ukLayer = L.geoJSON(geoJSON);
  //     map.fitBounds(ukLayer.getBounds());
  //   };
  //   fetchGeoJSON();
  //   // setShowSearch(false);
  // }, [map]);

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
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            {" "}
            <Container className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-space-around">
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
              <div className="align-self-center w-100">
                <MapNepal />
              </div>
            </Container>
            {/* <Row>
              <img src="static/backgrounds/image_1.png"></img>
            </Row> */}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

// const SimpleMap = () => {
//   const mapRef = useRef(null);
//   const latitude = 51.505;
//   const longitude = -0.09;

//   return (
//     // Make sure you set the height and width of the map container otherwise the map won't show
//     <MapContainer
//       center={[latitude, longitude]}
//       zoom={13}
//       ref={mapRef}
//       style={{ height: "30vh", width: "30vw" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {/* Additional map layers or components can be added here */}
//     </MapContainer>
//   );
// };
