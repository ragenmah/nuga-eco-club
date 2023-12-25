import React from "react";
import "./style.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { meta, signIn, aboutus } from "../../content_option";
export const SigIn = () => {
  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Sign in | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div
          className="intro_sec d-block d-lg-flex align-items-center h_bg-image order-1 order-lg-2 h-100 "
          style={{
            backgroundImage: `url(${"https://media-cdn.tripadvisor.com/media/photo-s/05/33/d2/88/dhungedhara-that-brings.jpg"})`,
            // boxShadow: `black`,
          }}

          // style={{ backgroundImage: `url(${signIn.background_img})` }}
        >
          <div className="login-wrap">
            <div className="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    />
                    <label for="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Full Name
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Mobile number
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a>
                      <label for="tab-1">Already Member?</label>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
