import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, aboutus } from "../../content_option";
import { useTranslation } from "react-i18next";
import { Teams } from "../teams";
import FooterMain from "../../components/footer";

export const About = () => {
  const { i18n, t } = useTranslation();
  return (
    <HelmetProvider>
      <section className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("header.AboutUs")} | {meta.title}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* intro_sec */}
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-20 "
            // style={{ backgroundImage: `url(${aboutus.background_img})` }}
          >
            <Container>
              <Col className="mb-5 mt-3 pt-md-3">
                <Col lg="4">
                  <h1 className="about_us_title mb-2">ABOUT NUGA</h1>
                </Col>
                <Col lg="2">
                  <hr className="t_border my-3 ml-0 text-left" />{" "}
                </Col>
              </Col>
              <Row className="sec_sp">
                <Col lg="4">
                  {/* <img src={dataabout.img} width={300}></img> */}
                  <img
                    src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png"
                    height={300}
                    // width={120}
                  ></img>
                  <img
                    src="https://ragenmah.github.io/nuga-eco-club/static/images/nuga_maps.png"
                    height={280}
                    // width={120}
                  ></img>
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
