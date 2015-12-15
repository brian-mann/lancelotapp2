var minimist = require("minimist")

module.exports = function(argv, options){
  var opts = minimist(argv)

  console.log(process.versions)

  options.onReady(opts.url)

}