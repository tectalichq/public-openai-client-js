import { AxiosInstance } from 'axios';

export default (token: string, instance: AxiosInstance): AxiosInstance => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return instance;
};
