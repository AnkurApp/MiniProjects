import axios from "axios";
import {
  USER_SUCCESS,
  USER_FAILURE,
  USERREPOS_SUCCESS,
  USERREPOS_FAILURE,
} from "./actionNames";

export const getUserSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payLoad: user,
  };
};

export const getUserFailure = (error) => {
  return {
    type: USER_FAILURE,
    payLoad: error,
  };
};

export const getUserReposSuccess = (repos) => {
  return {
    type: USERREPOS_SUCCESS,
    payLoad: repos,
  };
};

export const getUserReposFailure = (error) => {
  return {
    type: USERREPOS_FAILURE,
    payLoad: error,
  };
};

export const getUser = (searchUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchUser}`
      );
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      dispatch(getUserFailure(error));
    }
  };
};

export const getUserRepos = (searchUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchUser}/repos`
      );
      dispatch(getUserReposSuccess(response.data));
    } catch (error) {
      dispatch(getUserReposFailure(error));
    }
  };
};
