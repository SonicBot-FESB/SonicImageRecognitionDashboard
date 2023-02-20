const OcrClient = require("../ocrClient");
const { updateImage } = require("./imagePreview");
const { updatePrediction } = require("./ocrPreview");
const { updateLogsDisplay, clearLogsDisplay, DATA_DIRECTION } = require("./updateLogsDisplay");
const { isClientConnected } = require("./utils.js");

module.exports.onConnectClicked = function() {
  if (window.client) {
    client.end();
    return;
  }

  const hostname = document.querySelector("#hostname").value;
  const port = document.querySelector("#port").value;

  const client = OcrClient.connect(
    hostname,
    port,
    onData,
    onErr
  )

  updateLogsDisplay(DATA_DIRECTION.out, "Connected");
  window.client = client
}

function onData(data) {
  data = data.toString();
  const [command, ...values] = data.split(" "); 

  switch(command) {
    case "IMG":
      updateImage(values)
      updateLogsDisplay(DATA_DIRECTION.in, `${command} ... ${values[1]}`)
      return
    case "PRD":
      updatePrediction(values)
      updateLogsDisplay(DATA_DIRECTION.in, data) 
      return
    default:
      updateLogsDisplay(DATA_DIRECTION.in, data)
    
  }
}

function onErr(err) {
  alert(`Error occured:\n ${err}`)
  window.client = null
}

module.exports.onStartButtonClicked = function() {
  if (!isClientConnected()) {
    return;
  }
  const sent = OcrClient.commands.startOcr(client);
  updateLogsDisplay(DATA_DIRECTION.out, sent);
}

module.exports.onStopButtonClicked = function() {
  if (!isClientConnected()) {
    return;
  }
  const sent = OcrClient.commands.stopOcr(client);
  updateLogsDisplay(DATA_DIRECTION.out, sent)
}


module.exports.onRefreshButtonClicked = function() {
  const { client } = window;
  if (client) {
    client.end();
    window.client = null;
  }
  clearLogsDisplay();
}
