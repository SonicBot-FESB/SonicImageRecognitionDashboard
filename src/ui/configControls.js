const OcrClient = require("../ocrClient");
const { updateLogsDisplay, DATA_DIRECTION } = require("./updateLogsDisplay");
const { isClientConnected } = require("./utils");

function getInputValue(inputId) {
  return document.querySelector(inputId).value;
}

module.exports.onRezolutionSet = function() {
  const rezolution = document.querySelector("#rezolution-input").value; 
  const { client } = window;

  if (!isClientConnected() || !rezolution) {
    return;
  }

  const sent = OcrClient.commands.setRezolution(client, rezolution);
  updateLogsDisplay(DATA_DIRECTION.out, sent);
}

module.exports.onVerticalCropSet = function() {
  const { client } = window;
  const top = getInputValue("#vertical-crop-top-input");
  const bottom = getInputValue("#vertical-crop-bottom-input");

  if (!isClientConnected() || !top || !bottom) {
    return;
  }

  const sent = OcrClient.commands.setVerticalCrop(client, top, bottom)
  updateLogsDisplay(DATA_DIRECTION.out, sent);
}

module.exports.onHorizontalCropSet = function() {
  const { client } = window;
  const left = getInputValue("#horizontal-crop-left-input");
  const right = getInputValue("#horizontal-crop-right-input");

  if (!isClientConnected() || !left || !right) {
    return;
  }

  const sent = OcrClient.commands.setHorizontalCrop(client, left, right)
  updateLogsDisplay(DATA_DIRECTION.out, sent);
}

module.exports.onGrayscaleFilterSet = function() {
  const { client } = window;
  const bottom = getInputValue("#grayscale-bottom-input");
  const top = getInputValue("#grayscale-top-input");

  if (!isClientConnected() || !bottom || !top) {
    return;
  }

  const sent = OcrClient.commands.setGrayscaleFilter(client, bottom, top)
  updateLogsDisplay(DATA_DIRECTION.out, sent);

}

module.exports.onWhiteThresholdSet = function() {
  const { client } = window;
  const threshold = getInputValue("#white-threshold-input");

  if(!isClientConnected() || !threshold) {
    return;
  }

  const sent = OcrClient.commands.setWhiteTreshold(client, threshold);
  updateLogsDisplay(DATA_DIRECTION.out, sent);
}
