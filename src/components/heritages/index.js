import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Heritages = () => {
  return (
    <>
      <div class="scroll-container container">
        <div className="scroll-content">
          {/* <div class="row "> */}
          <div class="col-lg-4">
            <div
              class="service-item "
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/5952518/pexels-photo-5952518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              }}
            >
              {/* <img
                src="https://images.pexels.com/photos/5952518/pexels-photo-5952518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={100}
              ></img> */}
              <div class="icon"></div>
              <h4>Patan Durbar Square</h4>
              {/* <p></p> */}
              <div class="text-button">
                <Link to="/detail">
                  Explore <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="service-item "
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/5952518/pexels-photo-5952518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              }}
            >
              <div class="icon"></div>
              <h4>Kathmandu Durbar Square</h4>
              {/* <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p> */}
              <div class="text-button">
                <Link to="/detail">
                  Explore <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div
              class="service-item "
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              }}
            >
              <div class="icon"></div>
              <h4>Kathmandu Durbar Square</h4>
              {/* <p>
                Lorem ipsum dolor consectetur adipiscing elit sedder
                williamsburg photo booth quinoa and fashion axe.
              </p> */}
              <div class="text-button">
                <Link to="/detail">
                  Explore <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="service-item "
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              }}
            >
              <div class="icon"></div>
              <h4>Kathmandu Durbar Square</h4>
              {/* <p>
                Lorem ipsum dolor consectetur adipiscing elit sedder
                williamsburg photo booth quinoa and fashion axe.
              </p> */}
              <div class="text-button">
                <Link to="/detail">
                  Explore <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default Heritages;
