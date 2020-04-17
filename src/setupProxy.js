//create-react-app.dev/docs/proxying-api-requests-in-development/
const api = require("../api");

module.exports = function (app) {
  app.use(api);
};
