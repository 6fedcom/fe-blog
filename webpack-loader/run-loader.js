// 创建 run-loader.js
const fs = require("fs");
const path = require("path");
const { runLoaders } = require("loader-runner");
const VueLoader = require('vue-loader')
  // let options = ['mdtest.md', './loaders/md-loader'];
  // let options = ['main.js', 'babel-loader']
let options = ['App.vue', VueLoader]

runLoaders({
    resource: `./src/${options[0]}`,
    loaders: [path.resolve(__dirname, options[1])],
    readResource: fs.readFile.bind(fs),
  },
  (err, result) =>
  (err ? console.error(err) : console.log(result))
);