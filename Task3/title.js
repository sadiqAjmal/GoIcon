const express = require("express");
const controllers = require("./controllers");
const fetchTitle = controllers.fetchTitle;
const renderResponse = controllers.renderResponse;
const router = express.Router();

router.get("/title", async (req, res) => {
  const addresses = Array.isArray(req.query.address)
    ? req.query.address
    : [req.query.address];
  try {
    const titles = await Promise.all(addresses.map(fetchTitle));
    renderResponse(res, titles);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
