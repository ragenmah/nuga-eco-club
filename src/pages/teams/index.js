import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  dataportfolio,
  meta,
  teams,
  aboutus,
  teamData,
} from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

export const Teams = () => {
  return (
    <>
      <div className=" ">
        <div
          className="h_bg-image "
          style={{ backgroundImage: `url(${aboutus.background_img})` }}
        >
          <Container>
            <Col className="mb-5  mt-3 pt-md-3">
              <Col lg="4">
                <h1 className="teams_title mb-2">OUR TEAM</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
            <Row className="sec_sp mt-1 ">
              <Col>
                <h3 className="section-title py-2">{}</h3>
                <div>
                  <p> {teamData.des1}</p>
                  <p> {teamData.des2}</p>
                </div>
              </Col>
            </Row>
            <Col>
              <div class="team-container">
                {teams.map((data, i) => {
                  return (
                    <figure key={i}>
                      <div class="figure-img">
                        <img
                          src={data.img}
                          class="team-img"
                          alt={data.na}
                          width={400}
                        />
                        <div class="overlay"></div>
                      </div>
                      <figcaption>
                        <h3>{data.name}</h3>
                        <span>
                          <h5>{data.position}</h5>
                        </span>
                        <span>
                          <h6>{data.date}</h6>
                        </span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </Col>
          </Container>
        </div>
      </div>
      {/* <FooterMain /> */}
    </>
  );
};