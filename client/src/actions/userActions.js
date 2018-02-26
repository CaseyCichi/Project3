import axios from 'axios';
import * as USER_TYPES from './types';
import { history } from '../history';

export const userActions = {
    login,
    logout,
    register
};

export function login(email, password) {
    const request = axios.request({
        method: 'POST',
        url: '/auth/login',
        data: {
            email,
            password
        }
    });
    return (dispatch) => {
      function onSuccess(user) {
        dispatch({ type: USER_TYPES.LOGIN_SUCCESS, payload: user });
        history.push('/');
        return user;
      }
      function onError(error) {
        dispatch({ type: USER_TYPES.LOGIN_FAILURE, error });
        return error;
      }
      request.then(user => onSuccess, error => onError);
    };
}
  
export function logout(user) {
    const request = axios.request({
        method: 'POST',
        url: '/auth/logout',
        data: user
    });
    return (dispatch) => {
      function onSuccess(success) {
        dispatch({ type: USER_TYPES.LOGOUT });
        return success;
      }
      request.then(success => onSuccess);
    };
}

export function register(user) {
    const request = axios.request({
        method: 'POST',
        url: '/auth/register',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(user)
    });
    return (dispatch) => {
      function onSuccess(user) {
        dispatch({ type: USER_TYPES.REGISTER_SUCCESS, payload: user });
        history.push('/login');
        return user;
      }
      function onError(error) {
        dispatch({ type: USER_TYPES.REGISTER_FAILURE, error });
        return error;
      }
      request.then(user => onSuccess, error => onError);
    };
}