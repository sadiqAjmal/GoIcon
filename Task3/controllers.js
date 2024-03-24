const axios = require("axios");

const fetchTitle = (address) => {
  return axios
    .get("http://" + address)
    .then((response) => {
      const titleMatch = response.data.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : "NO RESPONSE";
      return { address, title };
    })
    .catch((error) => {
      return { address, title: "No-Response" };
    });
};

const renderResponse = (res, titles) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><head></head><body>");
  res.write("<h1>Following are the titles of given websites:</h1>");
  res.write("<ul>");
  titles.forEach(({ address, title }) => {
    res.write(`<li>${address} - "${title}"</li>`);
  });
  res.write("</ul></body></html>");
  res.end();
};
module.exports.fetchTitle = fetchTitle;
module.exports.renderResponse = renderResponse;
