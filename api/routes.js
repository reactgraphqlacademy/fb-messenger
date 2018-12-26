const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();
const {
  authenticateUser,
  SEVEN_DAYS_IN_MILLISECONDS,
  SESSION
} = require("./service");

router.use("/static/images", express.static(path.join(__dirname, "images")));

router.post(
  "/api/login",
  bodyParser.urlencoded({ extended: true }),
  (req, res) => {
    const { email, password } = req.body;
    const token = authenticateUser({ email, password });
    if (token) {
      res.cookie(SESSION, token, { maxAge: SEVEN_DAYS_IN_MILLISECONDS });
      res.redirect("/");
    } else {
      res.redirect(401, req.headers.referer);
    }
  }
);

module.exports = router;
