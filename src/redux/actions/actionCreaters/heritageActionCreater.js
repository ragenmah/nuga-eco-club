import {
  getAllRequestFail,
  getAllRequestSuccess,
  makeRequest,
} from "../commonActions";

import heritageWalkService from "../../services/heritageWalk.service";

export const GetAllHeritageWalk = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout(() => {
      heritageWalkService
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
