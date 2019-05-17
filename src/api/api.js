import axios from 'axios';

const SERVER_URL = 'http://localhost:3001';

// eslint-disable-next-line import/prefer-default-export
export const checkCode = (number, code) =>
  axios.get(`${SERVER_URL}/codes/${number}`, {
    data: {
      code,
    },
  });
