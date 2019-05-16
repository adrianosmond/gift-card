import axios from 'axios';

const SERVER_URL = 'http://localhost:3001';

const checkCode = (number, code) =>
  axios.get(`${SERVER_URL}/codes/${number}`, {
    data: {
      code,
    },
  });

export default checkCode;
