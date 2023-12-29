import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  aboutus,
} from "../../content_option";
import FooterMain from "../../components/footer";

export const About = () => {
  return (
    <HelmetProvider>
      <section className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About us | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${aboutus.background_img})` }}
          >
            <Container>
              <Col className="mb-5 mt-3 pt-md-3">
                <Col lg="4">
                  <h1 className="about_us_title mb-2">ABOUT US</h1>
                </Col>
                <Col lg="2">
                  <hr className="t_border my-3 ml-0 text-left" />{" "}
                </Col>
              </Col>
              <Row className="sec_sp">
                <Col lg="5"></Col>
                <Col lg="7">
                  <h3 className=" ection-title py-4">{dataabout.title}</h3>
                  <div>
                    <p>{dataabout.aboutme}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* <FooterMain /> */}
      </section>
    </HelmetProvider>
  );
};
