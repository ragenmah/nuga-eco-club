import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataabout, homePageData } from "../../content_option";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
import { About } from "../about";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SigIn } from "../auth/sigin";
import Selectors from "../../components/selectors/selectors";
import SearchBarNav from "../../components/searchbar/searchbar_nav";
import SearchBarBody from "../../components/searchbar/searchbar_body";
import { MapNepal } from "../../components/maps";
import Sliders from "../../components/sliders";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatWeDo from "../whatwedo";
import { ContactUs } from "../contact";
import HeritageFeatured from "../discover/heritagesFeatured";
import { OfficeLocation } from "../../components/maps/office_location";
import { Maps } from "../maps";
import MyMap from "../../components/maps/example";

export const Home = () => {
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
            {/* <div className="slider__position">
              <Sliders />
            </div> */}

            <div className="search-box-container">
              <div className=" order-2 order-lg-1 h-100 d-lg-flex justify-content-space-around ">
                <div className="align-self-center container w-100">
                  <div className="intro mx-auto">
                    {/* <h1>{homePageData.welcomBannerTitle}</h1>
                    <h6>{homePageData.welcomBanner}</h6> */}
                    {/* <Link to="/contact">
                      <div id="button_h" className="ac_btn btn mt-5">
                        Join Us
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link> */}
                  </div>
                </div>
                <div className="align-self-center w-100 m-2">
                  <section className="showcase shape">
                    <div className="video-container">
                      {/* <video
                        autoPlay={true}
                        controls={false}
                        loop={true}
                        muted
                        playsinline
                      >
                        <source src={introdata.video_url} type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                      </video> */}
                      {/* <Sliders /> */}
                    </div>

                    <div className="content"></div>
                  </section>
                </div>
              </div>
            </div>
            <div class="loader mt-5">
              <h1>{homePageData.welcomBannerTitle}</h1>
              <h6 className="mt-5">
                {homePageData.welcomBanner1}
                {homePageData.welcomBanner2}
              </h6>
              {/* <span></span> */}
            </div>

            {/* <Row>
              <img src="static/backgrounds/image_1.png"></img>
            </Row> */}
          </div>
        </div>
      </section>
      <WhatWeDo />
      {/* <section className="banner">
        <div className="banner-container">
          <img src="https://images.pexels.com/photos/4028819/pexels-photo-4028819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        </div>
        <div className="banner-content container m-auto">
          <h5>
            Our impactful projects restore nature, enhance biodiversity, protect
            precious ecosystems and habitats, empower local communities, and
            strategically plant millions of trees, ensuring a green and
            sustainable future.
          </h5>
        </div>
      </section> */}
      {/* <HowWeDo /> */}
      <div className="intro_sec d-block d-lg-flex align-items-center ">
        <div className="h_bg-image order-1 order-lg-2 h-100">
          {/* <MyMap/> */}
          <OfficeLocation />
        </div>
      </div>

      <Container className="qr_code_container">
        <Col className="mb-5 d-block mt-5 pt-md-3">
          <Col lg="12">
            {/* <h1 className="teams_title mb-2">Latest News and updates</h1> */}
            <h1 className="teams_title mb-2">QR Code Feature</h1>
          </Col>
          <Col lg="2">
            <hr className="t_border my-3 ml-0 text-left" />{" "}
          </Col>
        </Col>
        <Row className="justify-content-between align-items-center mt-5 mb-5 mb-lg-7">
          <Col lg={5} className="qr__code_image">
            <Image
              src="https://ragenmah.github.io/nuga-eco-club//static/qr/nuga_qr_scan.jpg"
              alt="qr code scan"
              // width={400}
            />
          </Col>
          <Col lg={6} className="order-lg-2 mb-5 mb-lg-0">
            <p className="mb-3 lead fw-bold">
              We provide QR code scan feature.
            </p>
            <p className="mb-4">
              Experience the convenience of our QR code feature!
            </p>
          </Col>
        </Row>
      </Container>
      <HeritageFeatured />
      <Container>
        <Row className=" justify-content-between align-items-center mb-5 mb-lg-7">
          <Col className="mb-5 d-block pt-md-3">
            <Col lg="12">
              {/* <h1 className="teams_title mb-2">Latest News and updates</h1> */}
              <h1 className="teams_title mb-2">
                Tourism and Climate Action Resources
              </h1>
            </Col>
            <Col lg="2">
              <hr className="t_border my-3 ml-0 text-left" />{" "}
            </Col>
          </Col>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            {/* <Col lg={5} className="qr__code_image">
              <Col lg={6} className="rounded shadow pt-3"></Col>
            </Col> */}

            <Col lg={8} className="order-lg-2 mb-lg-0">
              <p className="mt-3 mb-4 fw-bold quote-text">
                <span>
                  Promoting tourism and climate action involves providing
                  resources that educate,
                </span>
                <marker>
                  &nbsp; encourage sustainable practices, and highlight the
                  impact of tourism on the environment.
                </marker>
              </p>
            </Col>
          </Row>
          <Col>
            Quick links
            <p>
              <span>Heritages</span>
              <span>**Climate changes</span>
            </p>
            <span>Guides</span>
            {/* <Link to="/ContactUs" className="">
              <h4 className="sign__up">Guides</h4>
            </Link> */}
          </Col>
        </Row>
      </Container>
      <div className="let__us__know">
        <Container>
          <h3>Didn't Find What You were looking For? </h3>
          <Link to="/ContactUs" className="">
            <h4 className="btn-let-us-know">Let Us Know</h4>
          </Link>
        </Container>
      </div>
      {/* <ContactUs /> */}
    </HelmetProvider>
  );
};
