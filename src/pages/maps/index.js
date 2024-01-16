import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { meta, datamaps } from "../../content_option";
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

export const Maps = () => {
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
        <div className="intro_sec d-block d-lg-flex align -items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            <MapNepal></MapNepal>
            <div className="search-box-container container-margin w-75 ">
              <Container className=" h-100 w-75 d-flex map_detail">
                <div className="align-self-center ">
                  <div className="">
                    <div className=" quote-text text-color">
                      <span>{datamaps.title}</span>
                      <marker>{datamaps.title2}</marker>
                    </div>

                    <Col className=" playstore_image">
                      <img src="static/apps/playstore.png" height={70} className="m-2"></img>
                      
                      <img src="static/apps/appstore.png" height={70} className="m-2"></img>
                    </Col>
                  </div>
                </div>
                <div className="align-self-center w-75 m-2"></div>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
