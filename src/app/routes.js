import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Discover } from "../pages/discover";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SigIn } from "../pages/auth/sigin";
import { Teams } from "../pages/teams";
import { Maps } from "../pages/maps";
import { Sites } from "../pages/sites";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/auth/signin" element={<SigIn />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
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
