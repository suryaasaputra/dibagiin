import CONFIG from './config';

const API_ENDPOINT = {
  register: `${CONFIG.BASE_URL}/register`,
  login: `${CONFIG.BASE_URL}/login`,

  user: `${CONFIG.BASE_URL}/user/`,
  donation: `${CONFIG.BASE_URL}/donation/`,
  request: `${CONFIG.BASE_URL}/request/`,
  // login: `${CONFIG.BASE_URL}/login`,
  // search: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  // detail: (id) => `${CONFIG.BASE_URL}detail/${id}?`,
  // sendReview: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
