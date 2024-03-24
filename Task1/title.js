const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const controllers = require("./controllers");
const parseTitle = controllers.parseTitle;
const renderHTML = controllers.renderHTML;

router.get("/title", async (req, res) => {
  const result = [];
  const addresses = Array.isArray(req.query.address)
    ? req.query.address
    : [req.query.address];
  let count = 0;
  addresses.forEach((address) => {
    axios
      .get(`http://${address}`)
      .then((response) => {
        parseTitle(response.data, (err, title) => {
          if (err) {
            result.push({ address, title: "NO RESPONSE" });
          } else {
            result.push({ address, title });
          }
          count++;
          if (count == addresses.length) {
            res.send(renderHTML(result));
          }
        });
      })
      .catch(() => {
        result.push({ address, title: "NO RESPONSE" });
        count++;
        if (count == addresses.length) {
          res.send(renderHTML(result));
        }
      });
  });
});

module.exports = router;
