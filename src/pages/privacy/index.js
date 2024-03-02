import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  dataportfolio,
  meta,
  teams,
  aboutus,
  teamData,
} from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

export const Privacy = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <HelmetProvider>
        <section className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {t("header.Privacy")} | {meta.title}
            </title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <div className=" ">
            <div
              className="h_bg-image "
              style={{ backgroundImage: `url(${aboutus.background_img})` }}
            >
              <Container>
                <Col className="mb-5  mt-3 pt-md-3">
                  <Col lg="4">
                    <h1 className="teams_title mb-2">Privacy Policy</h1>
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
              </Container>
            </div>
          </div>
        </section>
      </HelmetProvider>
      {/* <FooterMain /> */}
    </>
  );
};
