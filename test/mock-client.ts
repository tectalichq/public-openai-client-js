import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Client from '../src/client';

export default () => {
  const axiosInstance = axios.create({ baseURL: 'http://localhost' });
  return {
    axiosInstance,
    client: new Client(axiosInstance),
    mock: new MockAdapter(axiosInstance),
  };
};
