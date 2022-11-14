import { AxiosInstance } from 'axios';

/**
 * Implement HTTP Bearer Authentication.
 */
export default (token: string, instance: AxiosInstance): AxiosInstance => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return instance;
};
