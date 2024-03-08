import React, { useEffect, useState } from "react";
import "./style.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import validator from "validator";
import login_background from "../../assets/login_background.jpg";
import nugaLogo from "../../assets/logo.png";

const SiginAuth = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [width, setWidth] = useState(window.innerWidth);

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [btnEnable, setBtnEnable] = useState(true);

  // Email Validation
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
      setEmail(email);
      setBtnEnable(false);
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  // Password Validation
  const validatePassword = (e) => {
    var password = e.target.value;

    if (validator.isStrongPassword(password)) {
      setPasswordError("");
      setPassword(email);
      setBtnEnable(false);
    } else {
      // setPasswordError("Enter valid Password!");
    }
  };

  //handle login with email
  const handleLogiWithEmail = () => {
    axios.post();
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [isActive, setIsActive] = useState(true);
  const [faqId, setFaqId] = useState("createAccount");

  const handleFAQClick = (event) => {
    // 👇️ toggle isActive state on click
    setFaqId(event.currentTarget.id);
    setIsActive((current) => !current);
  };

  return (
    <div
      className={showHideClassName}
      //   class="d-flex align-items-center justify-content-center h-100 w-100"
    >
      <div
        class=" popupContainer"
        style={{ width: isMobile ? "330px" : "440px" }}
      >
        {/* <div class="popupHeader">
          <span class="header_title">Sign In / Register</span>
          <span class="modal_close" onClick={handleClose}>
            <i class="fa fa-times"></i>
          </span>
        </div> */}

        <section class="popupBody">
          {/* <div className="col-lg-8 login-back-color">
            {isMobile ? (
              <></>
            ) : (
              <center className="login_detail">
                <img
                  src={nugaLogo}
                  className="sign-in-back-img"
                  height={180}
                ></img>
                <h6>Sigin/Register</h6>
              </center>
            )}
          </div>{" "} */}
          <div class="popupHeader">
            <span class="modal_close " onClick={handleClose}>
              <i class="fa fa-times"></i>
            </span>
          </div>

          <center className="d-block w-100 mt-5 ">
            <i
              className="fas fa-user "
              style={{ height: "64", fontSize: "2rem" }}
            ></i>
            {/* <h5>Have an account?</h5> */}
            <h4 className="mt-2">Contribute yourself to NUGA</h4>
            <h6 className="conditons_container ">
              Enter your email to sigin/register.
              <br />
              Verify your email after providing your email.
            </h6>
          </center>
          <div
            className="d-block w-100 position-absolute mt-5 "
            style={{
              paddingTop: "90px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <a
              class="py-3 d-block  w-100 position-relative z-index-1 pr-1 text-secondary mt-5  p-2"
              aria-controls="faq-17"
              aria-expanded="false"
              data-toggle="collapse"
              id={"signin"}
              role="button"
              onClick={handleFAQClick}
            >
              <div class="position-relative  border-top ">
                <h2 class="h4 m-0 pr-3 mt-3">Sign In</h2>
                <div class="position-absolute top-0 right-0 h-100 d-flex mt-3">
                  <i
                    class={
                      isActive && faqId == "signin"
                        ? "fa fa-minus"
                        : "fa fa-plus"
                    }
                  ></i>
                </div>
              </div>
            </a>
            <div
              class={isActive && faqId == "signin" ? "" : "collapse"}
              id={"signin"}
            >
              <div class="card card-body border-0 p-0">
                <p>
                  <div class="m-3  ">
                    <form onSubmit={handleLogiWithEmail}>
                      {/* <label>Email Address</label> */}
                      <input
                        type="text"
                        className="search_field_input w-100 mt-2 "
                        name="term"
                        required
                        autoComplete="off"
                        aria-label="search"
                        placeholder="Email Address"
                        onChange={(e) => validateEmail(e)}
                      />{" "}
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {emailError}
                      </span>
                      <input
                        type="password"
                        className="search_field_input w-100 mt-2 "
                        name="term"
                        required
                        autoComplete="off"
                        aria-label="search"
                        placeholder="Password"
                        onChange={(e) => validatePassword(e)}
                      />{" "}
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {passwordError}
                      </span>
                      <div class="action_btns mt-4">
                        <div class="one_half">
                          <button class="continue-btn" disabled={btnEnable}>
                            Continue
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="centeredText">
                      <span>OR</span>
                    </div>
                    <div class="">
                      <div class="social_login ">
                        <a
                          href="#"
                          class="social_box google"
                          onClick={() => login()}
                        >
                          <span class="icon">
                            <i class="fab fa-google"></i>
                          </span>
                          <span class="icon_title">Connect with Google</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            {/* register  */}
            <a
              class="py-3 d-block  w-100 position-relative z-index-1 pr-1 text-secondary mt-2  p-2"
              aria-controls="faq-17"
              aria-expanded="false"
              data-toggle="collapse"
              id={"createAccount"}
              role="button"
              onClick={handleFAQClick}
            >
              <div class="position-relative  border-top ">
                <h2 class="h4 m-0 pr-3 mt-3">Create Account</h2>
                <div class="position-absolute top-0 right-0 h-100 d-flex mt-3">
                  <i
                    class={
                      isActive && faqId == "createAccount"
                        ? "fa fa-minus"
                        : "fa fa-plus"
                    }
                  ></i>
                </div>
              </div>
            </a>
            <div
              class={isActive && faqId == "createAccount" ? "" : "collapse"}
              id={"createAccount"}
            >
              <div class="card card-body border-0 p-0">
                <p>
                  <div class="m-3  ">
                    <form onSubmit={handleLogiWithEmail}>
                      {/* <label>Email Address</label> */}
                      <input
                        type="text"
                        className="search_field_input w-100 mt-2 "
                        name="term"
                        required
                        autoComplete="off"
                        aria-label="search"
                        placeholder="Email Address"
                        onChange={(e) => validateEmail(e)}
                      />{" "}
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {emailError}
                      </span>
                      <input
                        type="password"
                        className="search_field_input w-100 mt-2 "
                        name="term"
                        required
                        autoComplete="off"
                        aria-label="search"
                        placeholder="Password"
                        onChange={(e) => validatePassword(e)}
                      />{" "}
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {passwordError}
                      </span>
                      <div class="action_btns mt-4">
                        <div class="one_half">
                          <button class="continue-btn" disabled={btnEnable}>
                            Continue
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="centeredText">
                      <span>OR</span>
                    </div>
                    <div class="">
                      {/* <a href="#" class="social_box fb">
                        <span class="icon">
                          <i class="fab fa-facebook"></i>
                        </span>
                        <span class="icon_title">Connect with Facebook</span>
                      </a> */}
                      <div class="social_login ">
                        <a
                          href="#"
                          class="social_box google"
                          onClick={() => login()}
                        >
                          <span class="icon">
                            <i class="fab fa-google"></i>
                          </span>
                          <span class="icon_title">Connect with Google</span>
                        </a>
                      </div>
                    </div>
                    <h6 className="conditons_container">
                      By sigining or registering, you are deemed to have agreed
                      our{" "}
                      <a>
                        <u>Terms and Conditions</u>
                      </a>{" "}
                      and{" "}
                      <a>
                        <u>Privacy Policy</u>
                      </a>
                    </h6>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiginAuth;
