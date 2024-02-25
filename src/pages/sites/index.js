import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Container, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Selectors from "../../components/selectors/selectors";
import SearchBarBody from "../../components/searchbar/searchbar_body";
import { HeritageWalkMap } from "../../components/maps/heritage_walk_map";

import heritageWalkImg from "../../assets/heritage-walk.webp";
import nugaLogo from "../../assets/logo.png";
import { connect } from "react-redux";
import { GetAllHeritageWalk } from "../../redux/actions/actionCreaters/heritageActionCreater";
import { image_baseUrl } from "../../redux/services/api";
import { Link } from "react-router-dom";

const Sites = (props) => {
  useEffect(() => {
    props.loadHeritageWalks();
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="sites">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} | Heritage Walk</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            <div className="search-box-container">
              <div className=" order-2 order-lg-1 h-100 d-lg-flex justify-content-space-around ">
                <div className="align-self-center w-100">
                  <div className="intro mx-auto">
                    <h1>{introdata.title}</h1>
                    {/* <h2 className="mb-1x">{introdata.title}</h2> */}
                    <div className="mt-3">
                      <SearchBarBody />
                    </div>
                  </div>
                </div>
                <div className="align-self-center w-100 mt-2 shape">
                  <img src={heritageWalkImg} className="heritage-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <HeritageWalkMap /> */}

        <Container className="">
          <center enter>
            <Col className="contact-us-container">
              <Col lg="8">
                <div className="">
                  <h1 className=" mb-2">POPULAR SITES</h1>{" "}
                </div>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />
              </Col>
              <Col className="ng-quote">
                <h3 className="section-title py-2">{}</h3>
                <div className="ng-container quote-text">
                  <h5>Discover some popular heritage walk sites.</h5>
                </div>
              </Col>
            </Col>
          </center>
          <div class="row mt-5 d-flex justify-content-start">
            {props.heritageWalkState.allList &&
              props.heritageWalkState.allList.map((data, i) => {
                return (
                  <div class="col-lg-4">
                    {props.heritageWalkState.isloading ? (
                      <center
                        className="d-flex justify-content-center align-item-center "
                        style={{
                          height: "100%",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div
                          className="spinner-border img-fluid rounded center m-5"
                          role="status"
                        ></div>
                      </center>
                    ) : (
                      <div
                        class="service-item "
                        style={{
                          backgroundImage: `url(${
                            data.place_img != null
                              ? image_baseUrl + data.place_img
                              : nugaLogo
                          })`,
                        }}
                      >
                        <div className="overlay"></div>
                        <div className="bottom-background" />
                        <div class="heritage-description">
                          <h4 class="capitalize">{data.place_name}</h4>

                          <div class="text-button">
                            <Link to={`/heritage-walk/detail/${data.slug}`}>
                              Explore <i class="fa fa-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </Container>
        <div
          className={
            props.heritageWalkState.isloading ? "loading-bar" : "d-none"
          }
        ></div>
      </section>
    </HelmetProvider>
  );
};
const mapDispatchtoProps = (dispatch) => {
  return {
    loadHeritageWalks: () => dispatch(GetAllHeritageWalk()),
  };
};
const mapStatetoProps = (state) => {
  return {
    heritageWalkState: state.heritageWalk,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Sites);
