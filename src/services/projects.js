import { apiEndpoint } from '../config/app';
import createRestApiClient from '../utils/api';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    all: () => client.request({
      method: 'GET',
      url: '/project'
    }),
    remove: ({ id }) => client.request({
      method: 'DELETE',
      url: `/project/${id}`
    }),
    findOne: ({ id }) => client.request({
      method: 'GET',
      url: `/project/${id}`
    }),
    update: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/project/${id}`,
      data
    }),
    add: ({ id, data }) => client.request({
      method: 'POST',
      url: `/project/${id}`,
      data
    })
  };
};

