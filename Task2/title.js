const express = require("express");
const async = require("async");

const controllers = require("./controllers");
const fetchTitle = controllers.fetchTitle;
const renderResponse = controllers.renderResponse;

const router = express.Router();
router.get("/title/", (req, res) => {
  const addresses = Array.isArray(req.query.address)
    ? req.query.address
    : [req.query.address];
  async.map(
    addresses,
    (address, callback) => {
      fetchTitle(address, callback);
    },
    (err, titles) => {
      if (err) {
      } else {
        renderResponse(res, titles);
      }
    }
  );
});

module.exports = router;
