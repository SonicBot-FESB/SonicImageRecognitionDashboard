const OcrClient = require("../ocrClient");
const { updateLogsDisplay, DATA_DIRECTION } = require("./updateLogsDisplay");
const { isClientConnected } = require("./utils");

module.exports.onGetPrediction = function() {
  const { client } = window;

  if (!isClientConnected()) {
    return;
  }

  const sent = OcrClient.commands.getPrediction(client);
  updateLogsDisplay(DATA_DIRECTION.out, sent)
}


module.exports.updatePrediction = function([character, chance]) {
  console.log({character, chance});
  document.querySelector("#predicted-char").innerHTML = character;
  document.querySelector("#prediction-chance").innerHTML = `${chance}%`;
}
