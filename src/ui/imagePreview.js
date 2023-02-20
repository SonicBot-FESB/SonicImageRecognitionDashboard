const OcrClient = require("../ocrClient");
const { updateLogsDisplay, DATA_DIRECTION } = require("./updateLogsDisplay");
const { isClientConnected } = require("./utils");

module.exports.onGetImage = function() {
  const { client } = window;

  if (!isClientConnected()) {
    return;
  }

  const sent = OcrClient.commands.getImage(client);
  updateLogsDisplay(DATA_DIRECTION.out, sent)
}

module.exports.updateImage = function([imageBas64]) {
  const image = document.querySelector("#img-preview")
  image.src = `data:image/png;base64, ${imageBas64}`
}
