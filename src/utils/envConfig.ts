// NOTE: After editing this file please check next.config.js as well

if (!process.env.NODE_ENV) {
  require('dotenv').config();
}

let serverUrl = 'http://localhost:4000';

switch (process.env.REACT_NATIVE_APP_PUBLIC_ENV) {
  case 'base':
    serverUrl = 'https://company-portal.onrender.com/graphql';
    break;

  case 'beta':
    serverUrl = 'https://company-portal-beta.onrender.com/graphql';
    break;

  default:
    break;
}

const envConfig = {
  SERVER_URL: serverUrl,
  ENV: process.env.REACT_NATIVE_APP_PUBLIC_ENV,
};

export default envConfig;
