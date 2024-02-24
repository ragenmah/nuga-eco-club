import React, { useEffect } from "react";
import "./style.css";
import Heritages from "../../components/heritages";
import { Container, Row, Col } from "react-bootstrap";

import { LocationMarker } from "../../components/maps/location_marker";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  GetDiscoverPlaceBySlug,
  addViewCount,
} from "../../redux/actions/actionCreaters/discoverplacesActionCreater";
import { base_url, image_baseUrl } from "../../redux/services/api";
import moment from "moment";

const DetailPage = (props) => {
  var dispatch = useDispatch();

  const { slug } = useParams();
  var data = props.discoverState.allObj[0];

  useEffect(() => {
    props.loadDiscoveryPlaceBySlug(slug);
    if (data != null) {
      // dispatch(addViewCount(data.discover_id));
    }
  }, []);

  return (
    <>
      {data != null && (
        <>
          <div className="site__page page row">
            <section
              class="heritage-container container article-story-group mt-5"
              data-stories="8"
            >
              <div class="article-story-group__items mt-5">
                <div class="article-story-group__item">
                  <article
                    data-article-id={data.discover_id}
                    about={data.title}
                    class="node node--type-article node--view-mode-full"
                  >
                    <div class="article-card-header card rounded shadow">
                      <div class="card__content">
                        <div class="article-card-header__wrapper">
                          <div class="article-card-header__content">
                            {/* {slug}
                            <span class="h6 article-card-header__subhead">
                              INFO HERITAGE
                            </span> */}
                            <h1
                              class="article-card-header__title"
                              title={data.title}
                            >
                              <span class="article-card-header__title-words">
                                {data.title}
                              </span>
                            </h1>
                            <div class="article-card-header__metadata">
                              <span class="article-card-header__author">
                                <a href="#"> - {data.posted_by}</a>
                              </span>
                              <span class="article-card-header__date">
                                {moment
                                  .utc(data.createdAt)
                                  .format("DD MMM YYYY")}
                              </span>

                              <div className="pull-right">
                                <span class="article-card-header__author">
                                  <i className="fa fa-map-marker"></i>
                                  &nbsp;{data.fullAddress}
                                </span>
                                <span class="article-card-header__date">
                                  <span>{data.visit_count} views</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="article-card-header__media">
                            <picture></picture>
                            <img
                              src={image_baseUrl + data.image_file_name}
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
                              __html: data.description,
                            }}
                          ></div>
                        </div>
                        {/* <p>asdfasdfas asdfjasdlkfjasldfkjas</p>
                        <figure class="image">
                          <img
                            style="aspect-ratio:2880/1800;"
                            src="http://localhost:4000/images/ckeditor/hphd3Xz5BJBZF7iWQlO7YU17.png"
                            width="2880"
                            height="1800"
                          />
                        </figure> */}
                        <div>
                          <p class="references">References</p>
                          <p>{data.reference}</p>
                          {/* <p>Paneju Sangh, Bungamati</p> */}
                        </div>
                      </div>
                    </div>

                    <div class="article-card-header card rounded shadow">
                      <div class="card__content">
                        <div class="article-card-header__wrapper node__content article-body">
                          <div class="article-card-header__content">
                            <h1 class="article-card-header__title" title="">
                              <span class="article-card-header__title-words">
                                {" "}
                                Place Location
                              </span>
                            </h1>
                            <div class="article-card-header__metadata">
                              <div className="">
                                <span class="article-card-header__author">
                                  <i className="fa fa-map-marker"></i>
                                  &nbsp;{data.fullAddress}
                                </span>
                                <span class="article-card-header__date">
                                  <span>{data.visit_count} views</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="article-card-header__media">
                            <LocationMarker
                              location={[data.longitude, data.latitude]}
                              locationName={data.title}
                              locationAddress={data.fullAddress}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <Col className="mb-5 d-block mt-5 pt-md-3">
                  <Col lg="12">
                    <h1 className="teams_title mb-2">Discover More</h1>
                  </Col>
                  <Col lg="2">
                    <hr className="t_border my-3 ml-0 text-left" />{" "}
                  </Col>
                </Col>
                <Heritages />
              </div>
            </section>
          </div>
        </>
      )}

      <div
        className={props.discoverState.isloading ? "loading-bar" : "d-none"}
      ></div>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadDiscoveryPlaceBySlug: (slug) => dispatch(GetDiscoverPlaceBySlug(slug)),
  };
};
const mapStatetoProps = (state) => {
  return {
    discoverState: state.discover,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(DetailPage);
