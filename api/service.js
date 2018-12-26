const jwt = require("jsonwebtoken");

const SEVEN_DAYS_IN_MILLISECONDS = 604800000;
const SESSION = "__session";

function authenticateUser({ email, password }) {
  if (email === "clone@facebook.com" && password === "123") {
    const token = jwt.sign(
      { id: "5ab1299177282be8578f3612", username: "@theclone" },
      "this_is_my_secret_key ^^",
      { expiresIn: "7 days" }
    );

    return token;
  }
  return null;
}

module.exports = {
  authenticateUser,
  SEVEN_DAYS_IN_MILLISECONDS,
  SESSION
};
