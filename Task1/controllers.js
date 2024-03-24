const renderHTML = (results) => {
  let html =
    "<html><head></head><body><h1> Following are the titles of the given websites:</h1><ul>";
  results.forEach((result) => {
    html += `<li>${result.address} - ${result.title} <li/>`;
  });

  html += "</ul></body></html>";
  return html;
};
const parseTitle = (body, callback) => {
  let match = body.match(/<title>([^<]*)<\/title>/);
  if (!match || typeof match[1] != "string")
    return callback(new Error("Unable to parse title"));
  callback(null, match[1]);
};

module.exports.parseTitle = parseTitle;
module.exports.renderHTML = renderHTML;
