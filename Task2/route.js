const express = require("express");
const title = require("./title");
const router = express.Router();
router.use("/want", title);
module.exports = router;
