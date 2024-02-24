import {
  getAllRequestFail,
  getAllRequestSuccess,
  getbyIdSuccess,
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

export const GetHeritageWalkStepeBySlug = (slug) => {
  return (dispatch) => {
    dispatch(makeRequest());
    heritageWalkService
      .getHeritagewalkStepsDetail(slug)
      .then((res) => {
        const _obj = res.data;
        dispatch(getbyIdSuccess(_obj));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};
