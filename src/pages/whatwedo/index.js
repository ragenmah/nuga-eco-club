import React from "react";
import { whatWeDoData } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

const WhatWeDo = () => {
  return (
    <section className="">
      <div className="   mt-2">
        <div
          className="h_bg-image "
          // style={{ backgroundImage: `url(${aboutus.background_img})` }}
        >
          <Container>
            <Col className="mb-5  mt-3 pt-md-3">
              <Col lg="4">
                <h1 className="teams_title mb-2">What We Do</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
            <Row className="sec_sp mt-1 ">
              <Col>
                <h3 className="section-title py-2">{}</h3>
                <div>
                  <p> {whatWeDoData.des1}</p>
                  <p> {whatWeDoData.des2}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
