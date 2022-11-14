import axios from 'axios';
import auth from './authentication';
import Client from './client';

const baseURL = 'https://api.openai.com/v1';

/**
 * Configure and return a new Client instance.
 */
export default (token: string) => {
  return new Client(
    auth(
      token,
      axios.create({
        baseURL,
        timeout: 10000
      })
    )
  );
};
