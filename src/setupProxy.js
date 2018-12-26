// What is this file?
// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually

const { setupApi } = require("../api");

module.exports = function(app) {
  setupApi({ app });
};
