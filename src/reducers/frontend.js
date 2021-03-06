import {
  TOGGLE_JOB_FORM,
  TOGGLE_SIDE_MENU,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from "../actions/actionTypes";

const frontend = (
  state = {
    errorMessage: [],
    hideSideMenu: false,
    isFetching: false,
    showAddJobForm: false,
    fetchFailed: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, hideSideMenu: !state.hideSideMenu };
    case FETCH_JOBS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_JOBS_FAILURE:
      return { ...state, fetchFailed: true, errorMessage: [action.error] };
    case FETCH_JOBS_SUCCESS:
      return { ...state, isFetching: false, fetchFailed: false };
    case TOGGLE_JOB_FORM:
      return { ...state, showAddJobForm: !state.showAddJobForm };
    default:
      return state;
  }
};

export default frontend;
