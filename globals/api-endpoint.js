import CONFIG from './config';

const API_ENDPOINT = {
  register: `${CONFIG.BASE_URL}/register`,
  login: `${CONFIG.BASE_URL}/login`,

  user: `${CONFIG.BASE_URL}/user`,
  donation: `${CONFIG.BASE_URL}/donation`,
  request: `${CONFIG.BASE_URL}/request`,
  history: `${CONFIG.BASE_URL}/history`,

};

export default API_ENDPOINT;
