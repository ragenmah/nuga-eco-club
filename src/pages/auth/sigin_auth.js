import React, { useEffect, useState } from "react";
import "./style.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import validator from "validator";

const SiginAuth = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [width, setWidth] = useState(window.innerWidth);

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
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
  return (
    <div
      className={showHideClassName}
      //   class="d-flex align-items-center justify-content-center h-100 w-100"
    >
      <div
        class=" popupContainer"
        style={{ width: isMobile ? "330px" : "500px" }}
      >
        <div class="popupHeader">
          <span class="header_title">Sign In / Register</span>
          <span class="modal_close" onClick={handleClose}>
            <i class="fa fa-times"></i>
          </span>
        </div>

        <section class="popupBody">
          <div>
            {isMobile ? (
              <></>
            ) : (
              <img
                src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png"
                height={120}
                className="m-4"
              ></img>
            )}
          </div>
          <div class="social_login">
            <div class="user_register">
              <form onSubmit={handleLogiWithEmail}>
                {/* <label>Email Address</label> */}
                <h6>Contribute yourself to NUGA</h6>
                <h6 className="conditons_container">
                  Enter your email to sigin/register. Verify your email after
                  providing your email.
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
                  style={{ fontWeight: "500", fontSize: "12px", color: "red" }}
                >
                  {emailError}
                </span>
                <div class="action_btns">
                  <div class="one_half">
                    <button class="continue-btn" disabled={btnEnable}>
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>

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

              <a href="#" class="social_box google" onClick={() => login()}>
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span class="icon_title">Connect with Google</span>
              </a>
            </div>
            <h6 className="conditons_container">
              By sigining or registering, you are deemed to have agreed our{" "}
              <a>
                <u>Terms and Conditions</u>
              </a>{" "}
              and{" "}
              <a>
                <u>Privacy Policy</u>
              </a>
            </h6>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiginAuth;
