import { apiEndpoint } from '../config/app';
import createRestApiClient from '../utils/api';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    all: () => client.request({
      method: 'GET',
      url: '/comments'
    }),
    remove: ({ id }) => client.request({
      method: 'DELETE',
      url: `/comments/${id}`
    }),
    findOne: ({ id }) => client.request({
      method: 'GET',
      url: `/comments/${id}`
    }),
    update: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/comments/${id}`,
      data
    }),
    add: ({ id, data }) => client.request({
      method: 'POST',
      url: `/comments/${id}`,
      data
    })
  };
};

