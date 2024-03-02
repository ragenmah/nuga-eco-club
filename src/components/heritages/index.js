import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetAllHeritageWalk } from "../../redux/actions/actionCreaters/heritageActionCreater";
import { image_baseUrl } from "../../redux/services/api";
import nugaLogo from "../../assets/logo.png";

const Heritages = (props) => {
  useEffect(() => {
    props.loadHeritageWalks();
  }, []);
  return (
    <>
      <div class="scroll-container container">
        <div className="scroll-content">
          {props.heritageWalkState.allList &&
            props.heritageWalkState.allList.map((data, i) => {
              {
                /* if (i > 5) { */
              }
              return (
                <div class="col-lg-4">
                  {props.heritageWalkState.isloading ? (
                    <center
                      className="d-flex justify-content-center align-item-center "
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: "20px",
                      }}
                    >
                      <div
                        className="spinner-border img-fluid rounded center m-5"
                        role="status"
                      ></div>
                    </center>
                  ) : (
                    <div
                      class="service-item "
                      style={{
                        backgroundImage: `url(${
                          data.place_img != null
                            ? image_baseUrl + data.place_img
                            : nugaLogo
                        })`,
                      }}
                    >
                      <div className="overlay"></div>
                      <div className="bottom-background" />
                      <div class="heritage-description">
                        <h4 class="capitalize">{data.place_name}</h4>

                        <div class="text-button">
                          <Link to={`/heritage-walk/detail/${data.slug}`}>
                            Explore <i class="fa fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
              {
                /* } */
              }
            })}
        </div>
      </div>

      <div
        className={props.heritageWalkState.isloading ? "loading-bar" : "d-none"}
      ></div>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadHeritageWalks: () => dispatch(GetAllHeritageWalk()),
  };
};
const mapStatetoProps = (state) => {
  return {
    heritageWalkState: state.heritageWalk,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Heritages);
