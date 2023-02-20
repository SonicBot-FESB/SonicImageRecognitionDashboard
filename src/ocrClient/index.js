const { connect } = require("./client.js");

module.exports = {
    connect: connect,
    commands: require("./send.js"),
}
