import * as types from "./actionTypes";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.GET_JOBDATA_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };

    case types.GET_JOBDATA_SUCCESS:
      return {
        jobs: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_JOBDATA_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };
  }
};

export default reducer;
