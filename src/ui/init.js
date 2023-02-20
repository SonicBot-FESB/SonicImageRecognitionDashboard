const { onStartButtonClicked, onStopButtonClicked, onConnectClicked, onRefreshButtonClicked } = require("./clientControls.js");
const { onRezolutionSet: onRezolutionSet, onVerticalCropSet, onHorizontalCropSet, onGrayscaleFilterSet, onWhiteThresholdSet } = require("./configControls.js");
const { onGetImage } = require("./imagePreview.js");
const { onGetPrediction } = require("./ocrPreview.js");
const { updateLogsDisplay, DATA_DIRECTION } = require("./updateLogsDisplay.js")

module.exports.init = function() {
    updateLogsDisplay(DATA_DIRECTION.in, "Starting...")

    document.querySelector("#connect-btn").addEventListener("click", onConnectClicked)

    document.querySelector("#start-btn").addEventListener("click", onStartButtonClicked)
    document.querySelector("#stop-btn").addEventListener("click", onStopButtonClicked)
    document.querySelector("#refresh-btn").addEventListener("click", onRefreshButtonClicked)

    document.querySelector("#rezolution-apply").addEventListener("click", onRezolutionSet)
    document.querySelector("#vertical-crop-apply").addEventListener("click", onVerticalCropSet)
    document.querySelector("#horizontal-crop-apply").addEventListener("click", onHorizontalCropSet)
    document.querySelector("#grayscale-apply").addEventListener("click", onGrayscaleFilterSet)
    document.querySelector("#white-threshold-apply").addEventListener("click", onWhiteThresholdSet)

    document.querySelector("#get-image-btn").addEventListener("click", onGetImage)
    document.querySelector("#get-prediction-btn").addEventListener("click", onGetPrediction)
}
