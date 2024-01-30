import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig, markerImg } from "../../content_option";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import iconUrl from "../../_mock/svgs/marker.svg";

import { useRef } from "react";
import axios from "axios";

export const newicon = new Leaflet.Icon({
  iconUrl: markerImg,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    axios
      .post("http://localhost:4000/api/v1/contactUs", templateParams)
      .then((response) => {
        console.log(response.data["err"]);
        // alert("Thank you for your message.");
        if (response.data["err"] == true) {
          setFormdata({
            alertmessage: `Faild to send!,${response.data["msg"]}`,
            variant: "danger",
            show: true,
          });
        } else {
        }
        setFormdata({
          loading: false,
          alertmessage: "SUCCESS! ,Thankyou for your messege",
          variant: "success",
          show: true,
        });
      });
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          {/* <Col lg="8">
            <h1 className="display-4  about_us_title mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col> */}
          <Col className="contact-us-container">
            <Col lg="4">
              <h1 className=" mb-2">CONTACT US</h1>
            </Col>
            <Col lg="2">
              <hr className="t_border my-3 ml-0 text-left" />{" "}
            </Col>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5  ">
            <h3 className=" py-4">Get in touch</h3>
            <div className="d-flex flex-column align-items-start justify-content-start mb-4">
              <div className="d-flex justify-content-center align-items-center mt-1 mb-1">
                <div className="searchicon m-0">
                  <div className="innersearchicon">
                    <i class="fas fa-envelope"></i>
                  </div>
                </div>

                <div className="m-2">
                  <a href={contactConfig.maitTo}>{contactConfig.YOUR_EMAIL}</a>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center mt-1 mb-1">
                <div className="searchicon m-0">
                  <div className="innersearchicon">
                    <i class="fas fa-phone"></i>
                  </div>
                </div>

                <div className="m-2">
                  <a href={contactConfig.telTo}>
                    {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                      <p>{contactConfig.YOUR_FONE}</p>
                    ) : (
                      ""
                    )}
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-1 mb-1">
                <div className="searchicon m-0">
                  <div className="innersearchicon">
                    <i class="fas fa-location-arrow"></i>
                  </div>
                </div>

                <div className="m-2">
                  <p>{contactConfig.address}</p>
                </div>
              </div>
            </div>

            <OfficeLocationMap />
          </Col>
          <Col lg="7" className="d-flex align-items-center ">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <>
                <Col className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </>
              <Row>
                <Col className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="phone"
                    value={formData.phone || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Submitting..." : "Submit"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

const OfficeLocationMap = () => {
  const mapRef = useRef(null);
  const latitude = 27.671971;
  const longitude = 85.321552;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={17}
      ref={mapRef}
      style={{ height: "30vh", margin: "0 auto", width: "100%" }}
      attributionControl={false}
    >
      <Marker position={[latitude, longitude]} icon={newicon}>
        <Popup>
          <div>
            <div className="caption">
              Nuga Office
              <hr />
              Patan, Lalitpur
            </div>
          </div>
        </Popup>
      </Marker>
      <TileLayer
        attribution="NugaMaps"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
