import * as types from "./actionTypes";
import axios from "axios";

// Getting jobs data function

const getJobs = (searchTerms) => (dispatch) => {
  dispatch({ type: types.GET_JOBDATA_REQUEST });

  const rapidApiKey = "27d452c4e1msha928ccb6a105196p11255bjsnc9cbc1aad890";
  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "indeed11.p.rapidapi.com",
    },
  };

  return axios
    .post(
      "https://indeed11.p.rapidapi.com",
      {
        search_terms: searchTerms || "sales manager",
        location: "United States",
        page: "1",
      },
      axiosConfig
    )
    .then((res) => {
      return dispatch({ type: types.GET_JOBDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("error in fetching data", err);
      return dispatch({
        type: types.GET_JOBDATA_FAILURE,
        payload: err.message || "something went wrong",
      });
    });
};

export { getJobs };
