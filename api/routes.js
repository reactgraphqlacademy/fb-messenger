//const { Router } = require("express");
const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

const router = express.Router();

router.use("/static/images", express.static(path.join(__dirname, "images")));

// router.use("/images", bodyParser.json(), (req, res) => {
//   const { email, password } = req.body;
//   if (email === "clone@facebook.com" && password === "123") {
//     const SEVEN_DAYS_IN_MILLISECONDS = 604800000;
//     const cookie = jwt.sign(
//       { id: "5ab1299177282be8578f3612", username: "@theclone" },
//       "this_is_my_secret_key ^^",
//       { expiresIn: "7 days" }
//     );
//     res.cookie("__session", cookie, { maxAge: SEVEN_DAYS_IN_MILLISECONDS });
//     res.status(200).send("Authorized");
//   } else {
//     res.status(401).send("Not authorized");
//   }
// });

module.exports = router;
