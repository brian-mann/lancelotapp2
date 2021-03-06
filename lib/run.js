var app = require("app")
var BW  = require("browser-window")
var minimist = require("minimist")

module.exports = function(argv){
  var options = minimist(argv)

  console.log(process.versions)

  app.on("ready", function(){
    var mainWindow = new BW({
      width: 1280,
      height: 720,
      show: true,
      "node-integration": false,
      "web-preferences": {
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