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

        <Row className="mb-5 mt-1 pt-md-3">
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
          <div class="souvenir-card">
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
            </div>
            <div class="heart-icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="souvenir-details">
              <h2 class="souvenir-title">Souvenir Name</h2>
              <p class="souvenir-description">
                Description of the souvenir goes here. It can be a brief
                description or some details about the souvenir.
              </p>
              <p class="souvenir-price">$19.99</p>
              <button class="buy-button">Buy Now</button>
            </div>
          </div>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Souvenir;
