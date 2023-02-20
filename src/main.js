const { init: initUi } = require("./src/ui/init.js");

function onLoad () {
  initUi();
}

window.onload = onLoad;
