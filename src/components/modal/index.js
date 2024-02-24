import "./style.css";

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button type="button" onClick={handleClose}>
//           Close
//         </button>
//       </section>
//     </div>
//   );
// };
// export default Modal;

const Modal = ({ title, content, onClose }) => {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              {/* <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button> */}
              <a onClick={onClose}>
                <i className="fa fa-close" />
              </a>
            </div>
            <div className="modal-body">{content}</div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default Modal;
