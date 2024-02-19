import React, { useEffect, useState } from "react";
import Heritages from "../../components/heritages";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetSubCategoryByCategoryId } from "../../redux/actions/actionCreaters/subCategoryActionCreater";

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    // alert(category.id);
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;
  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  ); // Get unique categories
  // const category_id= location.state.category_name

  useEffect(() => {
    props.loadDiscoveriesByCategoryId(location.state.category_id);
    if (props.subCategoryState.allList != "") {
      handleCategoryChange(props.subCategoryState.allList[0]);
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
                  <h2>Filters</h2>
                  {/* <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="Category A">Category A</option>
                    <option value="Category B">Category B</option>
                    <option value="Category C">Category C</option>
                  
                  </select> */}
                  <ul>
                    <li
                      onClick={() => handleCategoryChange("")}
                      className="active"
                    >
                      All Categories
                    </li>

                    {props.subCategoryState.allList &&
                      props.subCategoryState.allList.map((category) => (
                        <li
                          key={category}
                          onClick={() => handleCategoryChange(category)}
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
                  {selectedCategory["sub_category_name"]}
                  {/* <Heritages /> */}
                  <ul>
                    <li>
                      <div class="col-lg-12">
                        <div
                          class="service-item "
                          style={{
                            backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                          }}
                        >
                          <div class="icon"></div>
                          <h4>Kathmandu Durbar Square</h4>

                          <div class="text-button">
                            <Link to="/detail">
                              Explore <i class="fa fa-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <div
                          class="service-item "
                          style={{
                            backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                          }}
                        >
                          <div class="icon"></div>
                          <h4>Kathmandu Durbar Square</h4>

                          <div class="text-button">
                            <Link to="/detail">
                              Explore <i class="fa fa-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <div
                          class="service-item "
                          style={{
                            backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                          }}
                        >
                          <div class="icon"></div>
                          <h4>Kathmandu Durbar Square</h4>

                          <div class="text-button">
                            <Link to="/detail">
                              Explore <i class="fa fa-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="">
                        <div
                          class="service-item "
                          style={{
                            backgroundImage: `url(https://images.pexels.com/photos/11734284/pexels-photo-11734284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                          }}
                        >
                          <div class="icon"></div>
                          <h4>Kathmandu Durbar Square</h4>

                          <div class="text-button">
                            <Link to="/detail">
                              Explore <i class="fa fa-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
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
