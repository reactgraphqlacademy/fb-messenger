const config = key =>
  typeof window !== 'undefined' &&
    window.__myapp_config &&
    window.__myapp_config[key]
    ? window.__myapp_config[key]
    : null

export const API_BASE_URL = config('API_BASE_URL') ||
  process.env.NODE_ENV === "development" ?
    `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`
    : 'http://productionurl.com'
