var configureService = require("./service/configureService");

let INSTANCE_UNIQUE_KEY = "";

//GET INSTANCE KEY
function configure(instanceKey) {
  INSTANCE_UNIQUE_KEY = instanceKey;
}

//Log function
function log(error) {
  console.log(error);
  //make an api call
  configureService.createLog(INSTANCE_UNIQUE_KEY, error);
}

module.exports.configure = configure;

module.exports.log = log;
