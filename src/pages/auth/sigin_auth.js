import React,{useEffect,useState} from "react";
import "./style.css";
const SiginAuth = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
  return (
    <div
      className={showHideClassName}
      //   class="d-flex align-items-center justify-content-center h-100 w-100"
    >
      <div class=" popupContainer" style={{width:isMobile?"330px":"500px"}}>
        <div class="popupHeader">
          <span class="header_title">Sign In / Register</span>
          <span class="modal_close" onClick={handleClose}>
            <i class="fa fa-times"></i>
          </span>
        </div>

        <section class="popupBody" >
          <div>
            {isMobile?<></>:<img src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png" height={120} className="m-4"></img>}
          </div>
          <div class="social_login">
            <div class="user_register">
              <form>
                {/* <label>Email Address</label> */}
                <h6>Contribute yourself to NUGA</h6>
                <h6 className="conditons_container">
                  Enter your email to sigin/register. Verify your email after
                  providing your email.
                </h6>
                <input
                  type="text"
                  className="search_field_input mt-2"
                  name="term"
                  autoComplete="off"
                  aria-label="search"
                  placeholder="Email Address"
                />
              </form>
            </div>
            <div class="action_btns">
              <div class="one_half">
                <button class="continue-btn">Continue</button>
              </div>
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

              <a href="#" class="social_box google">
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
