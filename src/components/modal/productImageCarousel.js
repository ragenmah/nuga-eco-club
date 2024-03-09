// ProductImageCarousel.js
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductImageCarousel = ({ images }) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIndex(index);
  };

  const scrollLeft = () => {
    document.getElementById("imageContainer").scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.getElementById("imageContainer").scrollLeft += 100;
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx} className="carousel-image">
            <img
              className="d-block w-100"
              src={image}
              alt={`Product Image ${idx + 1}`}
            />
            <div className="chevron-buttons">
              <Button
                variant="link"
                className="left-chevron"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </Button>
              <Button
                variant="link"
                className="right-chevron"
                onClick={handleNext}
              >
                <FaChevronRight />
              </Button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="mt-4" style={{ overflowX: "auto" }} id="imageContainer">
        <div className="row flex-nowrap">
          {images.map((image, index) => (
            <div className="col-md-3" key={index}>
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className={`img-thumbnail small-img ${
                  selectedImageIndex === index ? "border-primary" : ""
                }`}
                onClick={() => handleImageClick(index)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductImageCarousel;
