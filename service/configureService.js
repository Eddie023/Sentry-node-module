var https = require("../utils/https");

async function createLog(key, error) {
  //api call for the error should be written here
  data = {
    unique_key: key,
    error: error
  };

  const respond = await https.post("logs", data);

  return respond;
}

exports.createLog = createLog;
