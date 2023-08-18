const config = {
  development: {
    backendUrl: import.meta.env.VITE_BACKEND_DEVELOPMENT_URL,
  },
  production: {
    backendUrl: import.meta.env.VITE_BACKEND_PRODUCTION_URL,
  },
};

export default config;
