var app = require("app")
var BW  = require("browser-window")
var minimist = require("minimist")

module.exports = function(argv){
  var options = minimist(argv)

  app.on("ready", function(){
    var mainWindow = new BW({
      width: 1280,
      height: 720,
      show: true,
      "web-preferences": {
        "node-integration": false,
        "page-visibility": true,
        "allow-displaying-insecure-content": true,
        "allow-running-insecure-content": true
      }
    })

    mainWindow.loadUrl(options.url)

    if(options["dev-tools"]){
      mainWindow.webContents.openDevTools()
    }
  })

}