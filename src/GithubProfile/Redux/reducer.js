import {
  USER_SUCCESS,
  USER_FAILURE,
  USERREPOS_SUCCESS,
  USERREPOS_FAILURE,
} from "./actionNames";

const userInitialState = {
  user: [],
  error: "",
};

const repoInitialState = {
  repos: [],
  error: "",
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        user: action.payLoad,
        error: "",
      };
    }

    case USER_FAILURE: {
      return {
        user: [],
        error: action.payLoad,
      };
    }
    default:
      return state;
  }
};

export const repoReducer = (state = repoInitialState, action) => {
  switch (action.type) {
    case USERREPOS_SUCCESS: {
      return {
        repos: action.payLoad,
        error: "",
      };
    }

    case USERREPOS_FAILURE: {
      return {
        repos: [],
        error: action.payLoad,
      };
    }
    default:
      return state;
  }
};
