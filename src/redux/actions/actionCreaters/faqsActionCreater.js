import {
    getAllRequestFail,
    getAllRequestSuccess,
    makeRequest,
  } from "../commonActions";
  
import faqsService from "../../services/faqs.service";
  
  export const GetAllFaqs = () => {
    return (dispatch) => {
      dispatch(makeRequest());
      setTimeout(() => {
        faqsService
          .getAll()
          .then((res) => {
            const _list = res.data;
            dispatch(getAllRequestSuccess(_list));
          })
          .catch((err) => {
            dispatch(getAllRequestFail(err.message));
          });
      }, 1000);
    };
  };
  
 
  