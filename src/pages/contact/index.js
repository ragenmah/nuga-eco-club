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
import { contactUs } from "../../redux/services/api";

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

    axios.post(contactUs, templateParams).then((response) => {
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

  const [isActive, setIsActive] = useState(false);
  const [faqId, setFaqId] = useState(false);

  const handleFAQClick = (event) => {
    // 👇️ toggle isActive state on click
    setFaqId(event.currentTarget.id);
    setIsActive((current) => !current);
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
          <center>
            {" "}
            <Col className="contact-us-container">
              <Col lg="4">
                <h1 className=" mb-2">CONTACT US</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
          </center>
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
                    {formData.loading ? "Sending..." : "Send Message"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="mb-5 pt-md-3">
          <center>
            <Col className="faq-container">
              <Col lg="4">
                <h1 className=" mb-2">Frequently Asked Questions</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
          </center>
          {/* <div class="text-center">
            <h2 class="mt-5 mb-5">FAQ</h2>
          </div> */}
          <section class="container my-5" id="maincontent">
            <section id="accordion">
              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                aria-controls="faq-17"
                aria-expanded="false"
                data-toggle="collapse"
                id="faq-17"
                role="button"
                onClick={handleFAQClick}
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">What if I want custom gear?</h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i
                      class={
                        isActive && faqId == "faq-17"
                          ? "fa fa-minus"
                          : "fa fa-plus"
                      }
                    ></i>
                  </div>
                </div>
              </a>
              <div
                class={isActive && faqId == "faq-17" ? "" : "collapse"}
                id="faq-17"
              >
                <div class="card card-body border-0 p-0">
                  <p>
                    Custom gear can be ordered through our contact form.
                    Additional fees may apply.
                  </p>
                </div>
              </div>

              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                aria-controls="faq-18"
                aria-expanded="false"
                data-toggle="collapse"
                onClick={handleFAQClick}
                id="faq-18"
                role="button"
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">
                    What is the official mission statement?
                  </h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i
                      class={
                        isActive && faqId == "faq-18"
                          ? "fa fa-minus"
                          : "fa fa-plus"
                      }
                    ></i>
                  </div>
                </div>
              </a>
              <div
                class={isActive && faqId == "faq-18" ? "" : "collapse"}
                id="faq-17"
              >
                <div class="card card-body border-0 p-0">
                  <p>
                    Our official mission statement is lorem ipsum dolor sit.
                  </p>
                  <p></p>
                </div>
              </div>

              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                aria-controls="faq-19"
                aria-expanded="false"
                data-toggle="collapse"
                href="#faq-19"
                role="button"
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">What is the purpose of LunarXP?</h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i class="fa fa-plus"></i>
                  </div>
                </div>
              </a>
              <div class="collapse" id="faq-19">
                <div class="card card-body border-0 p-0">
                  <p>
                    The purpose of LunarXP is to give you the best Mars
                    experience!
                  </p>
                  <p></p>
                </div>
              </div>

              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
                aria-controls="faq-20"
                aria-expanded="false"
                data-toggle="collapse"
                href="#faq-20"
                role="button"
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">
                    What is the best email to reach you at?
                  </h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i class="fa fa-plus"></i>
                  </div>
                </div>
              </a>
              <div class="collapse" id="faq-20">
                <div class="card card-body border-0 p-0">
                  <p>The best email for any inquiries is email@email.com!</p>
                  <p></p>
                </div>
              </div>

              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
                aria-controls="faq-21"
                aria-expanded="false"
                data-toggle="collapse"
                href="#faq-21"
                role="button"
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">
                    Where can I read more about this company?
                  </h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i class="fa fa-plus"></i>
                  </div>
                </div>
              </a>
              <div class="collapse" id="faq-21">
                <div class="card card-body border-0 p-0">
                  <p>Lorem ipsum dolor sit!</p>
                  <p></p>
                </div>
              </div>

              <a
                class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
                aria-controls="faq-22"
                aria-expanded="false"
                data-toggle="collapse"
                href="#faq-22"
                role="button"
              >
                <div class="position-relative">
                  <h2 class="h4 m-0 pr-3">What is the best time to call?</h2>
                  <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                    <i class="fa fa-plus"></i>
                  </div>
                </div>
              </a>
              <div class="collapse" id="faq-22">
                <div class="card card-body border-0 p-0">
                  <p>
                    The best time to call is 24/7! We are always available to
                    answer any questions.
                  </p>
                  <p></p>
                </div>
              </div>
            </section>
          </section>
        </Row>
      </Container>
      {/* https://codepen.io/awitam/pen/XWNWObz */}
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
