import React from "react";
import Heritages from "../../components/heritages";

const DiscoverSearch = () => {
  return (
    <main className="discover_search_container ">
      <section className="container ">
        {/* shadow */}
        <div className="wrapper ">
          <div id="listing " className=" row">
            <div className="" id="search-filter">
              <div className="advanced-filter d-flex w-100 align-items-center">
                <span className="menu-title">Sites</span>
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
              Here are some popular sites
              <br />
              <br />
              <br />
              <Heritages />
              <Heritages />
              <Heritages />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiscoverSearch;
