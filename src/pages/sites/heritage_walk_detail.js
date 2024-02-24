import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { GetHeritageWalkStepeBySlug } from "../../redux/actions/actionCreaters/heritageActionCreater";
import { image_baseUrl } from "../../redux/services/api";
import moment from "moment";
import { LocationMarker } from "../../components/maps/location_marker";
import Modal from "../../components/modal";
import { RouteMarker } from "../../components/maps/route_maker";

const HeritageWalkDetail = (props) => {
  const { slug } = useParams();
  var data = props.heritageWalkState.allObj;

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState("");

  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    props.loadHeritageWalkStepBySlug(slug);
  }, []);
  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 400);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const scrollToStep = (event, stepId) => {
    event.preventDefault();
    const element = document.getElementById(stepId);
    setActiveStep(stepId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };

  return (
    <HelmetProvider>
      <section id="home" className=" site__page page row ">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} | Heritage Walk</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {showModal && (
          <Modal
            title={data.heritages[0].place_name}
            content={
              <RouteMarker

              // locationRoute={data.locationRoute}
              // location={[
              //   data.heritages[0].center_longitude,
              //   data.heritages[0].center_latitude,
              // ]}
              />
            }
            onClose={toggleModal}
          />
        )}

        <div className="heritage-btns">
          <div className="searchicon m-2" onClick={toggleModal}>
            <div className="innersearchicon">
              <i class="fas fa-map"></i>
            </div>
          </div>
          <div className="searchicon m-2">
            <div className="innersearchicon">
              <i class="fas fa-bookmark"></i>
            </div>
          </div>
        </div>

        <nav
          class="steps-navigation row  mt-5"
          style={{ top: isScrolled ? "20%" : "70%" }}
        >
          <ul>
            {data.heritagesWalkSteps != null &&
              data.heritagesWalkSteps.map((data, i) => {
                return (
                  <li>
                    <a
                      href={i}
                      onClick={(e) => scrollToStep(e, i)}
                      className={activeStep === i ? "active" : ""}
                    >
                      {data.step_name}
                    </a>
                  </li>
                );
              })}
            {/* <!-- Add more steps as needed --> */}
          </ul>
        </nav>
        {data != null && data.heritages != null && (
          <Container className="sites mt-5">
            <div class="row">
              {/* <!-- Product Details --> */}
              <div class="col-md-6 col-lg-12">
                <div class="product-details">
                  <div class="article-story-group__items ">
                    <div class="article-story-group__item">
                      <article
                        //   data-article-id={data.discover_id}
                        //   about={data.title}
                        class="node node--type-article node--view-mode-full"
                      >
                        <div class="article-card-header card rounded shadow">
                          <div class="card__content">
                            <div class="article-card-header__wrapper">
                              <div class="article-card-header__content">
                                <span class="h6 article-card-header__subhead">
                                  INFO HERITAGE WALK
                                </span>
                                <h1
                                  class="article-card-header__title"
                                  title={data.heritages[0].place_name}
                                >
                                  <span class="article-card-header__title-words">
                                    {data.heritages[0].place_name}
                                  </span>
                                </h1>
                                <div class="article-card-header__metadata">
                                  <span class="article-card-header__author">
                                    <a href="#">
                                      <i className="fa fa-map-marker"></i>{" "}
                                      {data.heritages[0].province}{" "}
                                      {data.heritages[0].district}{" "}
                                      {data.heritages[0].municipality}{" "}
                                    </a>
                                  </span>
                                  <span class="article-card-header__date">
                                    <span>
                                      {data.heritages[0].visit_count} views
                                    </span>
                                  </span>

                                  <div className="pull-right">
                                    <span class="article-card-header__date">
                                      {moment
                                        .utc(data.heritages[0].createdAt)
                                        .format("DD MMM YYYY")}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="article-card-header__media">
                                <picture></picture>
                                <img
                                  src={
                                    image_baseUrl + data.heritages[0].place_img
                                  }
                                  width={1240}
                                  className=" img-fluid"
                                ></img>
                              </div>
                            </div>
                          </div>

                          <div class="node__content ">
                            <div class="article-body ">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data.heritages[0].description,
                                }}
                              ></div>
                            </div>
                          </div>
                          <div class="node__content ">
                            {/* <h1 class="article-card-header__title" title="">
                              <span class="article-card-header__title-words">
                                Heritage walk steps
                              </span>
                            </h1> */}
                            <div class="article-body ">
                              {data.locationRoute}
                              {data.heritagesWalkSteps != null &&
                                data.heritagesWalkSteps.map((data, i) => {
                                  return (
                                    <div key={data.step_name} id={i}>
                                      {/* <Link to={`/heritage-walk/detail/${data.slug}`}> */}
                                      <h1
                                        class="article-card-header__title"
                                        title=""
                                      >
                                        <span class="article-card-header__title-words">
                                          {data.step_name}
                                        </span>
                                      </h1>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: data.description,
                                        }}
                                      ></div>
                                      {/* </Link> */}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                          <div class="article-card-header__wrapper node__content article-body">
                            <div class="article-card-header__content">
                              <h1 class="article-card-header__title" title="">
                                <span class="article-card-header__title-words">
                                  Place Location
                                </span>
                              </h1>
                              <div class="article-card-header__metadata">
                                <div className="">
                                  <span class="article-card-header__author">
                                    <a href="#">
                                      <i className="fa fa-map-marker"></i>{" "}
                                      {data.heritages[0].province}{" "}
                                      {data.heritages[0].district}{" "}
                                      {data.heritages[0].municipality}{" "}
                                    </a>
                                  </span>
                                  <span class="article-card-header__date">
                                    <span>
                                      {data.heritages[0].visit_count} views
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="article-card-header__media">
                              <LocationMarker
                                location={[
                                  data.heritages[0].center_longitude,
                                  data.heritages[0].center_latitude,
                                ]}
                                locationName={data.heritages[0].place_name}
                                locationAddress={
                                  data.heritages[0].province +
                                  ", " +
                                  data.heritages[0].district +
                                  ", " +
                                  data.heritages[0].municipality
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="col-md-3 col-lg-2 mt-5">
                <div class="steps ">
                  <ol>
                    {data.heritagesWalkSteps != null &&
                      data.heritagesWalkSteps.map((data, i) => {
                        return <li>{data.step_name}</li>;
                      })}
                  </ol>
                </div>
              </div> */}
            </div>
          </Container>
        )}
      </section>
      <div
        className={props.heritageWalkState.isloading ? "loading-bar" : "d-none"}
      ></div>
    </HelmetProvider>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadHeritageWalkStepBySlug: (slug) =>
      dispatch(GetHeritageWalkStepeBySlug(slug)),
  };
};
const mapStatetoProps = (state) => {
  return {
    heritageWalkState: state.heritageWalk,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(HeritageWalkDetail);
