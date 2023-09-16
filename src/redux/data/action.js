import * as types from "./actionTypes";
import axios from "axios";

// Getting jobs data function

const getJobs = (searchTerms) => (dispatch) => {
  dispatch({ type: types.GET_JOBDATA_REQUEST });

  const rapidApiKey = "f7092003d3msh0e9264e4c0c0467p13719ajsn1874ea029e51";
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
