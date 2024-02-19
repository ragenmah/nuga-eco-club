import {
  getAllRequestFail,
  getAllRequestSuccess,
  getbyIdSuccess,
  makeRequest,
} from "../commonActions";

import discoveryService from "../../services/discovery.service";

export const GetAllDiscoverPlaces = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout(() => {
      discoveryService
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

export const GetDiscoverPlaceById = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    discoveryService
      .get(id)
      .then((res) => {
        const _obj = res.data;
        dispatch(getbyIdSuccess(_obj));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};

export const GetDiscoverPlaceBySlug = (slug) => {
  return (dispatch) => {
    dispatch(makeRequest());
    discoveryService
      .getDiscoverPlaceDetail(slug)
      .then((res) => {
        const _obj = res.data;
        dispatch(getbyIdSuccess(_obj));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};

export const addViewCount = (discoverId) => {
  return (dispatch) => {
    dispatch(makeRequest());
    discoveryService
      .updateVisitCount(discoverId)
      .then((res) => {})
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};
