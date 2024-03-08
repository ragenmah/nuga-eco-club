import React, { useEffect, useState } from "react";
import Heritages from "../../components/heritages";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  GetSubCategoryByCategoryId,
  getPlacesBySubCategoryId,
  getPlacesListBySubCategoryId,
} from "../../redux/actions/actionCreaters/subCategoryActionCreater";
import { image_baseUrl } from "../../redux/services/api";

const productsData = [
  { id: 1, name: "Product 1", category: "Friendly Locals and Areas" },
  { id: 2, name: "Product 2", category: "Nani, Baha, Bahi" },
  { id: 3, name: "Product 3", category: "Pati, Pauwa" },
  { id: 4, name: "Product 4", category: "Hitis" },
  { id: 1, name: "Product 1", category: "Ponds" },
  { id: 2, name: "Product 2", category: "Religious Sites" },
  { id: 3, name: "Product 3", category: "Cultural and Historical Sites" },
  { id: 4, name: "Product 4", category: "Spiritual and Religious Experiences" },
  { id: 1, name: "Product 1", category: "Trekking and Adventure Activities" },
  { id: 2, name: "Product 2", category: "Natural Beauty Sites" },
  { id: 3, name: "Product 3", category: "Travel Destinations" },
  { id: 4, name: "Product 4", category: "Intangible Heritages" },
  // Add more products as needed
];

const DiscoverSearch = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    // alert(category);
    dispatch(getPlacesListBySubCategoryId(category));

    setSelectedCategory(category);
  };

  // const category_id= location.state.category_name

  var placesList = useSelector((state) => state.subCategory.subCategoryList);

  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 768;

  const [showModal, setShowModal] = useState(false);

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    props.loadDiscoveriesByCategoryId(location.state.category_id);
    // dispatch(GetSubCategoryByCategoryId(location.state.category_id));
    if (placesList.length > 0) {
      handleCategoryChange(placesList[0].sub_category_id);
      // alert(props.subCategoryState.allList[0].sub_category_id);
      // dispatch(
      //   getPlacesListBySubCategoryId(
      //     props.subCategoryState.allList[0].sub_category_id
      //   )
      // );
    }
  }, []);

  return (
    <>
      <div className={showHideClassName}>
        <div
          class=" popupContainer "
          style={{ width: isMobile ? "330px" : "440px" }}
        >
          <section class="popupBody">
            <div class="popupHeader">
              <span class="modal_close " onClick={handleHideModal}>
                <i class="fa fa-times"></i>
              </span>
            </div>
            <div className="filters w-100 position-relative">
              <h2>Filter by</h2>

              <ul className="mt-4">
                {props.subCategoryState.allList &&
                  props.subCategoryState.allList.map((category) => (
                    <li
                      key={category}
                      onClick={() =>
                        handleCategoryChange(category.sub_category_id)
                      }
                      className={
                        selectedCategory == category.sub_category_id
                          ? "capitalize active"
                          : "capitalize"
                      }
                    >
                      {category.sub_category_name}
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <main class="discover_search_container ">
        <section className="container ">
          {/* shadow */}
          <div className="wrapper ">
            <div id="listing " className=" row">
              <div className="" id="search-filter">
                <div className="advanced-filter d-flex w-100 align-items-center">
                  <h1>
                    <span className="menu-title capitalize">
                      {location.state.category_name}
                    </span>
                  </h1>
                  <div className="filter-card pull-right">
                    <a onClick={handleShowModal}>
                      <span className="filter-title">
                        <i className="fa fa-filter"></i> Filter
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-ls-9 col-xs-12 col-sm-6 w-100"
                // style="height: auto !important; min-height: 0px !important;"
              >
                {/* Here are some popular sites */}

                {/* <Heritages />
              <Heritages />
              <Heritages /> */}
                <div className="discover-container">
                  <div className="products">
                    {/* <h2>
                    <span className="menu-title capitalize">
                      {location.state.category_name}
                    </span>
                  </h2> */}
                    {/* {selectedCategory} */}
                    {/* {selectedCategory["sub_category_name"]} */}
                    {/* <Heritages /> */}

                    <div class="row mt-5">
                      {placesList &&
                        placesList.map((data) => {
                          return (
                            <div class="col-md-4">
                              <Link to={`/detail/${data.slugs}`}>
                                <div class="item">
                                  <div class="favorite-icon">
                                    <i class="fas fa-bookmark"></i>
                                  </div>
                                  <div class="discover-image-container">
                                    <img
                                      src={image_baseUrl + data.image_file_name}
                                      alt="Image"
                                      class="img-fluid "
                                    />
                                  </div>
                                  <div class="description">
                                    <p class="capitalize">{data.title}</p>
                                    <h6 class="capitalize">
                                      <i className="fa fa-map-marker"></i>
                                      {"  "}
                                      {data.fullAddress}
                                    </h6>
                                    <h6>
                                      {" "}
                                      <i className="fa fa-eye"></i>{" "}
                                      {data.visit_count} views
                                    </h6>
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

                    {/* <ul>
                    {placesList &&
                      placesList.map((data) => {
                        return (
                          <li key={data.id}>
                            <div class="col-lg-12">
                              <div
                                class="service-item "
                                style={{
                                  backgroundImage: `url(${JSON.stringify(
                                    image_baseUrl + data.image_file_name
                                  )})`,
                                }}
                              >
                                <div className="item-name">
                                  <div class="icon"></div>
                                  <h4>{data.title}</h4>
                                  <div class="text-button">
                                    <Link to={`/detail/${data.slugs}`}>
                                      Explore{" "}
                                      <i class="fa fa-chevron-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    <li></li>
                    <li></li>
                  </ul> */}
                    {/* <ul>
                    {filteredProducts.map((product) => (
                      <li key={product.id}>
                        {product.name} - {product.category}
                      </li>
                    ))}
                  </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className={
            props.subCategoryState.isloading ? "loading-bar" : "d-none"
          }
        ></div>
      </main>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadDiscoveriesByCategoryId: (id) =>
      dispatch(GetSubCategoryByCategoryId(id)),
  };
};
const mapStatetoProps = (state) => {
  return {
    subCategoryState: state.subCategory,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(DiscoverSearch);
