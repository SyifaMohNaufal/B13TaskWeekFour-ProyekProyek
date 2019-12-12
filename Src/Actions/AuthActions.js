import {fetchApi} from '../Service/Api';
import axios from 'axios';

export const createNewUser = payload => {
  return async dispatch => {
    try {
      dispatch({
        type: 'CREATE_USER_LOADING',
      });
      const response = await fetchApi('/register', 'POST', payload, 200);

      if (response.success) {
        dispatch({
          type: 'CREATE_USER_SUCCESS',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.token,
        });
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: response.responseBody,
        });

        return response;
      } else {
        throw response;
      }
    } catch (error) {
      dispatch({
        type: 'CREATE_USER_FAIL',
        payload: error.responseBody,
      });
      return error;
    }
  };
};

export const loginUser = payload => {
  return async dispatch => {
    try {
      dispatch({
        type: 'LOGIN_USER_LOADING',
      });
      const response = await fetchApi('/login', 'POST', payload, 200);
      const resGetUser = await axios.get(
        'http://192.168.1.12:3014/user/' + payload.username,
      );
      console.log(response.responseBody.result);
      if (response.responseBody.result) {
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.responseBody.result.token,
        });
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: resGetUser.data.result[0],
        });
        return response;
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOGIN_USER_FAIL',
        payload: error.responseBody,
      });
      return error;
    }
  };
};

export const logoutUser = () => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const {
        authReducer: {
          authData: {token},
        },
      } = state;
      console.log(token);
      const response = await fetchApi('/login/out', 'DELETE', null, 200, token);
      console.log(response);
      dispatch({
        type: 'USER_LOGGED_OUT_SUCCESS',
      });
    } catch (e) {
      console.log(e);
    }
  };
};
