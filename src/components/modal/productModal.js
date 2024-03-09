import React from "react";
import { Modal, Button } from "react-bootstrap";
import ProductImageCarousel from "./productImageCarousel";
import { FaWindowClose } from "react-icons/fa";

import "./style.css";

const ProductModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="product-details-container">
          <div className="carousel-container">
            <ProductImageCarousel images={product.images} />
          </div>
          <div className="description-container">
            <Modal.Title>{product.name}</Modal.Title>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ProductModal;
