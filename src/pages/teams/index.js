import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { dataportfolio, meta, teams, aboutus } from "../../content_option";

export const Teams = () => {
  return (
    <>
      <HelmetProvider>
        <section className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> About us| {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${aboutus.background_img})` }}
            >
              <div class="team-container">
                {teams.map((data, i) => {
                  return (
                    <figure key={i}>
                      <div class="figure-img">
                        <img src={data.img} class="team-img" alt="khec.jpg" />
                        <div class="overlay"></div>
                      </div>
                      <figcaption>
                        <h3>{data.name}</h3>
                        <span>
                          <h5>{data.position}</h5>
                        </span>
                        <span>
                          <h6>{data.date}</h6>
                        </span>
                        {/* <a
                  href="#"
                  target="_blank"
                  class="team-link"
                >
                  Visit
                </a> */}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <FooterMain /> */}
        </section>
      </HelmetProvider>
    </>
  );
};
