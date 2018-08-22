var configureService = require("./service/configureService");
const serializeError = require("serialize-error");

let INSTANCE_UNIQUE_KEY = "";
//GET INSTANCE KEY
function configure(instanceKey) {
  INSTANCE_UNIQUE_KEY = instanceKey;
}

//Log function
function log(error) {
  const errorDetails = serializeError(error.error);

  const newError = {
    status: errorDetails.name,
    statusMessage: error.message,
    errorDetails
  };

  //make an api call
  configureService.createLog(INSTANCE_UNIQUE_KEY, newError);
}

module.exports.configure = configure;

module.exports.log = log;
