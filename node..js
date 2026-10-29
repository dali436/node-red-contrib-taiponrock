module.exports = function(RED) {
function taiponrockNode(config) {
RED.nodes.createNode(this,config);
var node = this;
node.on ('input', function (msg) {
msg.payload = "Taiponrock";
node.send (msg);
} )
}
RED.nodes.registerType("taiponrock",taiponrockNode);
}