const express = require("express");
const title = require("./title");
const router = express.Router();
console.log(title.title);
router.use("/want", title);
module.exports = router;
