import React from "react";
import { whatWeDoData } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heritages from "../../components/heritages";
import "./style.css";
const HeritageFeatured = () => {
  
  return (
    <section className="heritage-container mb-5">
      <div className="mt-5 ">
        <div
          className="hg_bg-image"
          // style={{ backgroundImage: `url(${aboutus.background_img})` }}
        >
          <Container>
            <center>
              <Col className="mb-5 d-block mt-5 pt-md-3">
                <Col lg="12">
                  {/* <h1 className="teams_title mb-2">Latest News and updates</h1> */}
                  <h1 className="teams_title mb-2">Heritage Spots</h1>
                </Col>
                <Col lg="2">
                  <hr className="t_border my-3 ml-0 text-left" />{" "}
                </Col>
              </Col>
            </center>

            <Heritages />
          </Container>
          {/* <br />
          <br /> */}
        </div>
      </div>
    </section>
  );
};

export default HeritageFeatured;
