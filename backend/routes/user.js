const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/", userCtrl.login);
router.get("/check-token", auth, userCtrl.getUserId);

module.exports = router;
