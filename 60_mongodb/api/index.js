// const express = require("express");
// const router = express.Router();
//비구조화 할당
const { Router } = require("express");
const router = Router();

router.use("/music", require("./music"));   //index 생략
router.use("/movie", require("./movie"));   //index 생략
router.use("/user", require("./user"));

module.exports = router;