module.exports.isClientConnected = function() {
  const { client } = window;
  if (!client) {
    alert("Client not connected");
    return false;
  }
  return true;
}
