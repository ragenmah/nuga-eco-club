import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { connect, useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { GetAllDiscoverPlaces } from "../../redux/actions/actionCreaters/discoverplacesActionCreater";
import { base_url, image_baseUrl } from "../../redux/services/api";
import { RoutesCustom } from "../../routes";
import { GetSubCategoryByCategoryId } from "../../redux/actions/actionCreaters/subCategoryActionCreater";

const Discover = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    props.loadDiscoveries();
  }, []);

  const handleShowDiscoverList = (id, category_name) => {
    // dispatch(GetSubCategoryByCategoryId(id));
    navigate(RoutesCustom.discoverDetail.path, {
      state: { category_id: id, category_name: category_name },
    });
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Discover | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <center>
            <Col className="contact-us-container">
              <Col lg="8">
                <div className="">
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
          </center>
        </Row>
        <div className="mb-5 po_items_ho">
          {props.discoverState.allList &&
            props.discoverState.allList.map((data, i) => {
              return (
                <a
                  onClick={() =>
                    handleShowDiscoverList(data.category_id, data.category_name)
                  }
                >
                  <div
                    key={i}
                    className="po_item"
                    style={{
                      backgroundImage: `url(${JSON.stringify(
                        image_baseUrl + data.category_image
                      )})`,
                    }}
                  >
                    {/* <img
                    key={i}
                    src={image_baseUrl + data.category_image}
                    alt=""
                    height={270}
                    className="po_item"
                  /> */}

                    <div className="content">
                      <p>{data.category_name}</p>
                      {/* <a href={data.link}>view now</a> */}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </Container>
      <div
        className={props.discoverState.isloading ? "loading-bar" : "d-none"}
      ></div>
    </HelmetProvider>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadDiscoveries: () => dispatch(GetAllDiscoverPlaces()),
  };
};
const mapStatetoProps = (state) => {
  return {
    discoverState: state.discover,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Discover);
