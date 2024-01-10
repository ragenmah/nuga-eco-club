import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import SearchBarNav from "../../components/searchbar/searchbar_nav";
import SearchBarBody from "../../components/searchbar/searchbar_body";
import Selectors from "../../components/selectors/selectors";
import { Link } from "react-router-dom";

export const Discover = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Discover | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col className="contact-us-container">
            <Col lg="8">
              <div className="d-flex">
                <h1 className=" mb-2">DISCOVER</h1>{" "}
              </div>
            </Col>
            <Col lg="2">
              <hr className="t_border my-3 ml-0 text-left" />
            </Col>
            <Col className="ng-quote">
              <h3 className="section-title py-2">{}</h3>
              <div className="ng-container quote-text">
                <h5>Discover the Best Sites and Deals for Your Next Trip.</h5>
              </div>
            </Col>
            {/* <Col className="p-2" lg="12">
              <div>
                <SearchBarBody />
                <br />

                {showSearch ? <Selectors /> : <></>}
                <div
                  className="show-more-filter"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <span>{showSearch ? "Hide" : "More"} Options</span>
                  {!showSearch ? (
                    <i className="fas fa-chevron-down m-1" />
                  ) : (
                    <i className="fas fa-chevron-up m-1" />
                  )}
                </div>
              </div>
            </Col> */}
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <Link to="/discover-search">
                <div
                  key={i}
                  className="po_item"
                  style={{
                    backgroundImage: `url(${data.img})`,
                  }}
                >
                  {/* <img src={data.img} alt="" height={270} /> */}
                  <div className="content">
                    <p>{data.description}</p>
                    {/* <a href={data.link}>view now</a> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
