import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, aboutus } from "../../content_option";
import { useTranslation } from "react-i18next";
import { Teams } from "../teams";

const ClimateEmrgency = () => {
  const { i18n, t } = useTranslation();
  return (
    <HelmetProvider>
      <section className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("header.Climate")} | {meta.title}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* intro_sec */}
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-20 ">
            <Container>
              <Col className="mb-5 mt-3 pt-md-3">
                <Col lg="6">
                  <h1 className="about_us_title mb-2">Climate Emergency</h1>
                </Col>
                <Col lg="2">
                  <hr className="t_border my-3 ml-0 text-left" />{" "}
                </Col>
              </Col>
              <Row className="sec_sp">
                <Col lg="4">
                  <img src={dataabout.img} width={300}></img>
                </Col>
                <Col lg="8">
                  <h3 className="section-title py-4">{dataabout.title}</h3>
                  <div>
                    <p>{dataabout.aboutus1}</p>
                    <p>{dataabout.aboutus2}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>{" "}
      <Teams />
      {/* <FooterMain /> */}
    </HelmetProvider>
  );
};

export default ClimateEmrgency;
