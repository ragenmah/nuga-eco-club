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
import HowWeDo from "../whatwedo/howwedo";

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
                    <div class="loader">
                      <h1>{homePageData.welcomBannerTitle}</h1>
                      <h6>{homePageData.welcomBanner}</h6>
                    </div>
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
      <MapNepal />

      <Container>
        <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
          <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
            <h2>QR Code Feature</h2>
            <p className="mb-3 lead fw-bold">
              We provide QR code scan feature.
            </p>
            <p className="mb-4">
              Experience the convenience of our QR code feature!
            </p>
            {/* <Button
              as={Link}
              to={Routes.DashboardOverview.path}
              variant="secondary"
              target="_blank"
            >
              Live Demo{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Button>
            <Button
              as={HashLink}
              to="#download"
              variant="outline-primary"
              className="ms-3"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />{" "}
              Download
            </Button> */}
          </Col>
          <Col lg={6} className="order-lg-1">
            <Image
              src="http://localhost:3001/nuga-eco-club/static/qr/nuga_qr_scan.jpg"
              alt="qr code scan"
              // width={400}
              height={400}
            />
          </Col>
        </Row>

        <HowWeDo />
        <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
          <Col lg={5}>
            <h2>Tourism and Climate Action Resources</h2>
            {/* <p className="mb-3 lead fw-bold">
              100+ premium UI elements based on Bootstrap 5
            </p> */}
            <p className="mt-3 mb-4 ">
              Promoting tourism and climate action involves providing resources
              that educate, encourage sustainable practices, and highlight the
              impact of tourism on the environment.
            </p>

            {/* <Button
              as={Link}
              to={Routes.Forms.path}
              variant="secondary"
              className="mb-5 mb-lg-0"
              target="_blank"
            >
              <FontAwesomeIcon icon={faReact} className="me-1" /> Components
              examples
            </Button> */}
          </Col>
          <Col lg={6} className="rounded shadow pt-3">
            {/* <Code
              scope={{ Form, Button }}
              code={`<Form>
  <Form.Group id="frameworks" className="mb-3">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option defaultValue>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" className="m-1">Primary</Button>
</Form>`}
              language="jsx"
            /> */}
          </Col>
        </Row>
      </Container>
      <ContactUs />
    </HelmetProvider>
  );
};
