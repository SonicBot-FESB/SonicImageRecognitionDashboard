const net = require("net");


/**
* Send STT command to image recognition server.
*
* @param {net.Socket} client - 
*/
module.exports.startOcr = function(client) {
  client.write("ONN");
  return "ONN"
}

module.exports.stopOcr = function(client) {
  client.write("OFF");
  return "OFF"
}

module.exports.getStatus = function(client) {
  client.write("STT");
  return "STT"
}

module.exports.getPrediction = function(client) {
  client.write("PRD");
  return "PRD"
}

module.exports.setVerticalCrop = function(client, top, bottom) {
  client.write(`SVC ${top} ${bottom}`);
  return `SVC ${top} ${bottom}`
}

module.exports.setHorizontalCrop = function(client, left, right) {
  client.write(`SHC ${left} ${right}`);
  return `SHC ${left} ${right}`
}

module.exports.getImage = function(client) {
  client.write("IMG");
  return "IMG"
}

module.exports.setRezolution = function(client, rezolution) {
  client.write(`REZ ${rezolution}`);
  return `REZ ${rezolution}`
}

module.exports.setGrayscaleFilter = function(client, bottom, top) {
  client.write(`GSF ${bottom} ${top}`);
  return `GSF ${bottom} ${top}`
}

module.exports.setWhiteTreshold = function(client, percent) {
  client.write(`WTS ${percent}`);
  return `WTS ${percent}`
}


