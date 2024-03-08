import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CircularImage from "../../components/images/circular_image";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import "./style.css";
const Souvenir = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Souvenir | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-1 pt-md-3 ">
          <Container className="contact-us-container scroll-container gift-container">
            <Col className="scroll-content ">
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />{" "}
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />{" "}
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />{" "}
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />{" "}
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />
              <CircularImage
                imageUrl={
                  "https://images.uncommongoods.com/images/items/26000/26073_1_640px.webp"
                }
                text={"birthday gifts"}
              />
            </Col>
          </Container>
        </Row>
        <div class="product-banner-container mt-5 mb-5">
          <div class="banner-description-container">
            <h2>Nuga Souvenir</h2>
            <p>
              Platform for sharing the goods and gifts. Perfect gift for your
              loved ones .
            </p>
            <button>View all products</button>
          </div>
          <div class="banner-image-container shape">
            <img
              src="https://images.pexels.com/photos/2766333/pexels-photo-2766333.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Product Banner"
            />
          </div>
        </div>

        <center className=" featured-container mb-5 mt-5">
          <Col className="">
            <Col lg="8">
              <div className="">
                <h1 className=" mb-2">FEATURED PRODUCTS</h1>{" "}
              </div>
            </Col>
            <Col lg="2">
              <hr className="t_border my-3 ml-0 text-left" />
            </Col>
            <Col className="ng-quote">
              <h3 className="section-title py-2">{}</h3>
              <div className="ng-container quote-text">
                <h5>Best products from Nuga</h5>
              </div>
            </Col>
          </Col>
        </center>
        <div className="" id="search-filter">
          <div className="advanced-filter d-flex w-100 align-items-center">
            <span className="menu-title"></span>
            <div className="filter-card pull-right">
              <span className="filter-title">
                <i className="fa fa-filter"></i> Filter
              </span>
            </div>
          </div>
        </div>
        <div class="souvenir-card mt-4">
          <div class="image-container">
            <img
              src="https://images.uncommongoods.com/images/items/59900/59954_2_360px.webp"
              alt="Souvenir"
              class="souvenir-image"
            />
            <img
              src="https://images.uncommongoods.com/images/items/59800/59891_2_360px.webp"
              alt="Souvenir"
              class="souvenir-image-hover"
            />
            <button class="view-product-button">Quick view</button>
          </div>
          <div class="heart-icon">
            <i class="fas fa-heart"></i>
          </div>
          <div class="souvenir-details">
            <h2 class="souvenir-title">Souvenir Name</h2>
            {/* <p class="souvenir-description">
                Description of the souvenir goes here. It can be a brief
                description or some details about the souvenir.
              </p> */}
            <p class="souvenir-price">NPR 1900</p>
            {/* <button class="buy-button">Buy Now</button> */}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Souvenir;
