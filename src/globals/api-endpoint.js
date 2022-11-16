import CONFIG from './config';

const API_ENDPOINT = {
  register: `${CONFIG.BASE_URL}/register`,
  login: `${CONFIG.BASE_URL}/login`,
  // login: `${CONFIG.BASE_URL}/login`,
  // search: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  // detail: (id) => `${CONFIG.BASE_URL}detail/${id}?`,
  // sendReview: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
