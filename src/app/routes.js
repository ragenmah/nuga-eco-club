import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import Discover from "../pages/discover";
import ContactUs from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SigIn } from "../pages/auth/sigin";
import { Teams } from "../pages/teams";
import { Maps } from "../pages/maps";
import Sites from "../pages/sites";
import { Privacy } from "../pages/privacy";
import ClimateEmrgency from "../pages/climate";
import DetailPage from "../pages/discover/detail_page";
import DiscoverSearch from "../pages/discover/discover_search";
import { RoutesCustom } from "../routes";
import HeritageWalkDetail from "../pages/sites/heritage_walk_detail";
import HeritageSearchResult from "../pages/sites/heritage_search_result";
import SearchResult from "../pages/search/search_result";
import Souvenir from "../pages/souvenir";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    {/* <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    > */}
    <Routes location={location}>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/heritage-walk" element={<Sites />} />
      <Route
        path={RoutesCustom.searchHeritageWalkResult.path}
        element={<HeritageSearchResult />}
      />
      <Route
        path="/heritage-walk/detail/:slug"
        element={<HeritageWalkDetail />}
      />
      <Route path="/discover" element={<Discover />} />
      <Route
        path={RoutesCustom.discoverDetail.path}
        element={<DiscoverSearch />}
      />
      <Route path={RoutesCustom.searchResult.path} element={<SearchResult />} />
      <Route path="/detail/:slug" element={<DetailPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/auth/signin" element={<SigIn />} />
      <Route path="/climate-emergency" element={<ClimateEmrgency />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-condition" element={<Teams />} />
      <Route path={RoutesCustom.souvenir.path} element={<Souvenir />} />
      <Route path="*" element={<Home />} />
    </Routes>
    {/* </CSSTransition> */}
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
