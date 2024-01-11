import React from "react";
import "./style.css";
const SiginAuth = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      //   class="d-flex align-items-center justify-content-center h-100 w-100"
    >
      <div class=" popupContainer">
        <div class="popupHeader">
          <span class="header_title">Sign In / Register</span>
          <span class="modal_close" onClick={handleClose}>
            <i class="fa fa-times"></i>
          </span>
        </div>
        <h6>Contribute yourself to NUGA</h6>
        <section class="popupBody">
          <div class="social_login">
            <div class="user_register">
              <form>
                {/* <label>Email Address</label> */}
                <input type="email" placeholder="Email Address" />
              </form>
            </div>
            <div class="action_btns">
              <div class="one_half">
                <a href="#" id="login_form" class="btn">
                  Continue
                </a>
              </div>
            </div>
            <div class="centeredText">
              <span>More Sign In Method</span>
            </div>
            <div class="">
              {/* <a href="#" class="social_box fb">
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <span class="icon_title">Connect with Facebook</span>
              </a> */}

              <a href="#" class="social_box google">
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span class="icon_title">Connect with Google</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiginAuth;
