// import { apiEndpoint } from '../../config/app';
import apiClient from '../utils/api';

const apiEndpoint = 'http://localhost:3000';

export default () => {
  const client = apiClient().withConfig({ baseURL: apiEndpoint });
  return {
    login: ({ email, password }) =>
      client.request({
        method: 'POST',
        url: '/sessions',
        data: {
          email,
          password
        }
      }),
    register: ({ email, password }) =>
      client.request({
        method: 'POST',
        url: '/users',
        data: {
          email,
          password
        }
      }),
    logout: () =>
      client.request({
        method: 'DELETE',
        url: '/sessions'
      })
  };
};