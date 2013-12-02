var beefy = require("beefy");
var entry_points = { "bundle.js": "./Monster.js" };
var server = beefy(".", "browserify", [ "-d", "-t", "es6ify" ], entry_points, true, log);

server.listen(9966);

function log(code, time, bytesize, logged_pathname, color) {
    console.log(code, time, bytesize, logged_pathname, color);
}
