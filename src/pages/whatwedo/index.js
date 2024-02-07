import React from "react";
import { whatWeDoData } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const WhatWeDo = () => {
  return (
    <section>
      <div className="   mt-2">
        <Container>
          <center>
            <Col className="mb-5  mt-3 pt-md-3">
              <Col lg="4">
                <h1 className="teams_title mb-2">What We Do</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
          </center>
          <Row className="sec_sp mt-1 ">
            <Col className="ng-quote">
              <h3 className="section-title py-2">{}</h3>
              <div className="ng-container quote-text">
                <h6> {whatWeDoData.des1}</h6>
                {/* <h6> {whatWeDoData.des2}</h6> */}
                {/* <marker> {whatWeDoData.des2}</marker> */}
                {/* <span class="highlight">Highlight</span> */}
              </div>
            </Col>
            {/* <Link to="/about">
                <div id="button_h" className="ac_btn btn">
                  Read More About Us
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </Link> */}
          </Row>
        </Container>
        {/* <br />
          <br /> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
