import React, { useEffect } from "react";
import { meta } from "../../content_option";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import heritageWalkImg from "../../assets/heritage-walk.webp";
import nugaLogo from "../../assets/logo.png";
import noHeritageImg from "../../assets/nuga_marker.png";
import { image_baseUrl } from "../../redux/services/api";
import { Link, useParams } from "react-router-dom";
import { searchHeritageWalks } from "../../redux/actions/actionCreaters/heritageActionCreater";

const HeritageSearchResult = () => {
  const searchList = useSelector((state) => state.heritageWalk.allList);
  const isLoading = useSelector((state) => state.heritageWalk.isloading);

  const { name } = useParams();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(searchHeritageWalks(name));
  // }, []);

  return (
    <HelmetProvider>
      <section id="home" className=" site__page page row ">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} | Heritage Search List</title>
          <meta name="heritage search" content={meta.description} />
        </Helmet>

        <div className="container mt-5 search-conainer">
          {searchList.length == 0 ? (
            <center>
              <img src={noHeritageImg} />
              <p className="no-heritage-txt">No search result found</p>
            </center>
          ) : (
            <>
              {searchList != null &&
                searchList.length > 0 &&
                searchList.map((data, i) => {
                  return (
                    <div class="col-lg-4">
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
                        {" "}
                        <div className="bottom-background"></div>
                        <div class="heritage-description">
                          <p class="capitalize">{data.place_name}</p>
                          <div class="text-button">
                            <Link to={`/heritage-walk/detail/${data.slug}`}>
                              Explore <i className="fa fa-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </section>
      <div className={isLoading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

export default HeritageSearchResult;
