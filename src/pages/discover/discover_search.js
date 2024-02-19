import React, { useEffect, useState } from "react";
import Heritages from "../../components/heritages";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  GetSubCategoryByCategoryId,
  getPlacesBySubCategoryId,
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
    dispatch(getPlacesBySubCategoryId(category));

    setSelectedCategory(category);
  };

  // const category_id= location.state.category_name

  var placesList = useSelector((state) => state.subCategory.subCategoryList);

  useEffect(() => {
    props.loadDiscoveriesByCategoryId(location.state.category_id);
    // dispatch(GetSubCategoryByCategoryId(location.state.category_id));
    if (props.subCategoryState.allList != "") {
      handleCategoryChange(props.subCategoryState.allList[0].sub_category_id);
      // alert(props.subCategoryState.allList[0].sub_category_id);
    }
  }, []);

  return (
    <main className="discover_search_container ">
      <section className="container ">
        {/* shadow */}
        <div className="wrapper ">
          <div id="listing " className=" row">
            {/* <div className="" id="search-filter">
              <div className="advanced-filter d-flex w-100 align-items-center">
                <span className="menu-title">
                  {location.state.category_name}
                </span>
                <div className="filter-card pull-right">
                  <span className="filter-title">
                    <i className="fa fa-filter"></i> Filter
                  </span>
                </div>
              </div>
            </div> */}
            <div
              class="col-ls-9 col-xs-12 col-sm-6 w-100"
              // style="height: auto !important; min-height: 0px !important;"
            >
              {/* Here are some popular sites */}

              {/* <Heritages />
              <Heritages />
              <Heritages /> */}
              <div className="discover-container">
                <div className="filters">
                  <h2>Filter by</h2>
                  {/* <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="Category A">Category A</option>
                    <option value="Category B">Category B</option>
                    <option value="Category C">Category C</option>
                  
                  </select> */}
                  <ul className="mt-4">
                    {/* <li>Select Categories</li> */}

                    {props.subCategoryState.allList &&
                      props.subCategoryState.allList.map((category) => (
                        <li
                          key={category}
                          onClick={() =>
                            handleCategoryChange(category.sub_category_id)
                          }
                          className={
                            selectedCategory == category.sub_category_id
                              ? "active"
                              : ""
                          }
                        >
                          {category.sub_category_name}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="products">
                  <h2>
                    <span className="menu-title">
                      {location.state.category_name}
                      {/* {location.state.category_id} */}
                    </span>
                  </h2>
                  {/* {selectedCategory} */}
                  {/* {selectedCategory["sub_category_name"]} */}
                  {/* <Heritages /> */}
                  <ul>
                    {placesList &&
                      placesList.map((data) => {
                        {
                          /* var slugs = data.slugs; */
                        }
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
                  </ul>
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
        className={props.subCategoryState.isloading ? "loading-bar" : "d-none"}
      ></div>
    </main>
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
