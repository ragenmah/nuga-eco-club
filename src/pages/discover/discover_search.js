import React, { useState } from "react";
import Heritages from "../../components/heritages";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

const productsData = [
  { id: 1, name: "Product 1", category: "Category A" },
  { id: 2, name: "Product 2", category: "Category B" },
  { id: 3, name: "Product 3", category: "Category A" },
  { id: 4, name: "Product 4", category: "Category C" },
  // Add more products as needed
];

const DiscoverSearch = () => {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  return (
    <main className="discover_search_container ">
      <section className="container ">
        {/* shadow */}
        <div className="wrapper ">
          <div id="listing " className=" row">
            <div className="" id="search-filter">
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
            </div>
            <div
              class="col-ls-9 col-xs-12 col-sm-6 w-100"
              // style="height: auto !important; min-height: 0px !important;"
            >
              {/* Here are some popular sites */}

              <br />
              <br />
              <br />
              <Heritages />
              <Heritages />
              <Heritages />
              <div className="discover-container">
                <div className="filters">
                  <h2>Filters</h2>
                  <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="Category A">Category A</option>
                    <option value="Category B">Category B</option>
                    <option value="Category C">Category C</option>
                    {/* Add more options dynamically based on your categories */}
                  </select>
                </div>
                <div className="products">
                  <h2>Products</h2>
                  {/* <Heritages /> */}
                  <ul>
                    <li>
                      <div class="col-lg-4">
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
                      <div class="col-lg-4">
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
                      <div class="col-lg-4">
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

                  <ul>
                    {filteredProducts.map((product) => (
                      <li key={product.id}>
                        {product.name} - {product.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiscoverSearch;
