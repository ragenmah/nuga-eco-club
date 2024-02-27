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

  const [isActive, setIsActive] = useState(false);
  const [faqId, setFaqId] = useState(false);

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

          <div class="social_login ">
            <div class="popupHeader">
              <span class="modal_close" onClick={handleClose}>
                <i class="fa fa-times"></i>
              </span>
            </div>

            {/* <a
              class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
              aria-controls="faq-17"
              aria-expanded="false"
              data-toggle="collapse"
              id={"signin"}
              role="button"
              onClick={handleFAQClick}
            >
              <div class="position-relative">
                <h2 class="h4 m-0 pr-3">{"Sign in"}</h2>
                <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
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
            ></div> */}

            <div class="card card-body border-0 p-0">
              <p>
                <div class="user_register m-4  ">
                  <form onSubmit={handleLogiWithEmail}>
                    {/* <label>Email Address</label> */}
                    <h6>Contribute yourself to NUGA</h6>
                    <h6 className="conditons_container mt-5 mb-3">
                      Enter your email to sigin/register. Verify your email
                      after providing your email.
                    </h6>
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
        </section>
      </div>
    </div>
  );
};

export default SiginAuth;
