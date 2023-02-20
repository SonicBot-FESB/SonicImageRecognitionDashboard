const net = require("net");

module.exports.connect = function(host, port, onData, onError) {
  client = net.connect({
    host: host,
    port: port,
  });

  client.on("error", onError);

  function onConnect() {
    console.log(`Connected to: ${host}:${port}`)
  }

  function onClose() {
    console.log(`Disconnected from: ${host}:${port}`)
  }

  client.on("connect", onConnect);
  client.on("data", onData);
  client.on("close", onClose);

  return client;
}
