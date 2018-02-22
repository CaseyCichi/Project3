// import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/api';
const apiEndpoint = 'http://localhost:3000';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    all: () => client.request({
      method: 'GET',
      url: '/task'
    }),
    remove: ({ id }) => client.request({
      method: 'DELETE',
      url: `/task/${id}`
    }),
    findOne: ({ id }) => client.request({
      method: 'GET',
      url: `/task/${id}`
    }),
    update: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/task/${id}`,
      data
    }),
    add: ({ data }) => client.request({
      method: 'POST',
      url: `/task`,
      data
    })
  };
};

