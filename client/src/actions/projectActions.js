import axios from 'axios';
import * as PROJECT_TYPES from './types';

export const projectActions = {
    addProject
};

export function addProject(project) {
    const request = axios.request({
        method: 'POST',
        url: '/project/',
        data: project
    });
    return (dispatch) => {
      function onSuccess(project) {
        dispatch({ type: PROJECT_TYPES.ADD_PROJECT_REQUEST, payload: project });
        return project;
      }
      function onError(error) {
        dispatch({ type: PROJECT_TYPES.ADD_PROJECT_FAILURE, error });
        return error;
      }
      request.then(project => onSuccess, error => onError);
    };
}