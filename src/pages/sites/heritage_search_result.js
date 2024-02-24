import React from "react";
import { meta } from "../../content_option";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import heritageWalkImg from "../../assets/heritage-walk.webp";
import nugaLogo from "../../assets/logo.png";
import noHeritageImg from "../../assets/nuga_marker.png";
import { image_baseUrl } from "../../redux/services/api";
import { Link } from "react-router-dom";

const HeritageSearchResult = () => {
  const searchList = useSelector((state) => state.heritageWalk.allList);
  const isLoading = useSelector((state) => state.heritageWalk.isloading);

  return (
    <HelmetProvider>
      <section id="home" className=" site__page page row ">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} | Heritage Search List</title>
          <meta name="heritage search" content={meta.description} />
        </Helmet>
        <div className="mt-5">
          {searchList.length == 0 ? (
            <center>
              <img
                src={noHeritageImg}
                // className="heritage-img"
                // height={50}
                // width={100}
              />
              <p className="no-heritage-txt">No search result found</p>
            </center>
          ) : (
            <></>
          )}
          {searchList != null &&
            searchList != null &&
            searchList.length > 0 &&
            searchList.map((data, i) => {
              return (
                <div class="col-md-4 ">
                  <Link to={`/heritage-walk/detail/${data.slug}`}>
                    <div class="item">
                      <div class="image-container">
                        {isLoading ? (
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
                          <img
                            src={
                              data.place_img != null
                                ? image_baseUrl + data.place_img
                                : nugaLogo
                            }
                            alt="Image"
                            class="img-fluid "
                          />
                        )}
                      </div>
                      <div class="img-description ">
                        <p class="capitalize">{data.place_name}</p>
                        {/* <a href="#" class="btn btn-primary">
                        Learn More
                      </a> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
      <div className={isLoading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

export default HeritageSearchResult;
