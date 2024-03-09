import React, { useEffect, useState } from "react";
import { meta, dashboardItems, favorites } from "../../content_option";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "./style.css";
import FavoriteListTable from "../../components/tables/favouritesTable";
const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 400);
  const [activeStep, setActiveStep] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className=" site__page page row ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Container className="col">
          <section
            className="mt-5"
            //   style={{ top: isScrolled ? "25%" : "70%" }}
          >
            <h3>Dashboard</h3>
            <h6>Welcome Ragen</h6>
          </section>
          <nav
            class="dashboard-navigation   m-3"
            // style={{ top: isScrolled ? "20%" : "70%" }}
          >
            <ul>
              {dashboardItems != null &&
                dashboardItems.map((data, i) => {
                  return (
                    <li>
                      <a
                        // href={i}
                        // onClick={(e) => scrollToStep(e, i)}
                        // className={activeStep === i ? "active" : ""}
                        className={"active"}
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <FavoriteListTable favorites={favorites} />
        </Container>
      </section>
    </HelmetProvider>
  );
};

export default Dashboard;
