import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

const HeritageWalkDetail = () => {
  return (
    <HelmetProvider>
      <section id="home" className=" site__page page row ">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} | Heritage Walk</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Container className="sites mt-5">
          <div class="row">
            {/* <!-- Product Details --> */}
            <div class="col-md-6 col-lg-10">
              <div class="product-details">
                <div class="article-story-group__items mt-5">
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
                              {/* {slug}
                            <span class="h6 article-card-header__subhead">
                              INFO HERITAGE
                            </span> */}
                              <h1
                                class="article-card-header__title"
                                title={"data.title"}
                              >
                                <span class="article-card-header__title-words">
                                  {"data.title"}
                                </span>
                              </h1>
                              <div class="article-card-header__metadata">
                                <span class="article-card-header__author">
                                  <a href="#"> - {"data.posted_by"}</a>
                                </span>
                                <span class="article-card-header__date">
                                  {/* {moment
                                    .utc(data.createdAt)
                                    .format("DD MMM YYYY")} */}
                                </span>

                                <div className="pull-right">
                                  <span class="article-card-header__author">
                                    <i className="fa fa-map-marker"></i>
                                    {/* &nbsp;{data.fullAddress} */}
                                  </span>
                                  <span class="article-card-header__date">
                                    {/* <span>{data.visit_count} views</span> */}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="article-card-header__media">
                              <picture></picture>
                              {/* <img
                                src={image_baseUrl + data.image_file_name}
                                width={1240}
                                className=" img-fluid"
                              ></img> */}
                            </div>
                          </div>
                        </div>

                        <div class="node__content ">
                          <div class="article-body ">
                            <div
                            //   dangerouslySetInnerHTML={{
                            //     __html: data.description,
                            //   }}
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
                            {/* <p>{data.reference}</p> */}
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
                                    {/* &nbsp;{data.fullAddress} */}
                                  </span>
                                  <span class="article-card-header__date">
                                    {/* <span>{data.visit_count} views</span> */}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="article-card-header__media">
                              {/* <LocationMarker
                                location={[data.longitude, data.latitude]}
                                locationName={data.title}
                                locationAddress={data.fullAddress}
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Steps --> */}
            <div class="col-md-3 col-lg-2">
              <div class="steps ">
                <h2>Steps</h2>
                <ol>
                  <li>Step 1</li>
                  <li>Step 2</li>
                  <li>Step 3</li>
                  {/* <!-- Add more steps as needed --> */}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
};

export default HeritageWalkDetail;
