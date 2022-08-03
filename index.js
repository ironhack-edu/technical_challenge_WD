
const express = require("express");
const app = express();
console.log("jbsd")
const router = require("express").Router();
const cors = require("cors")
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 
const PORT = process.env.PORT || 5005;
path = require('path');
app.use(express.static(__dirname + '/assets/images'));


app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000'
    })
  );





app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
  print;
  split;
  function print (path, layer) {
    if (layer.route) {
      layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
    } else if (layer.name === 'router' && layer.handle.stack) {
      layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
    } else if (layer.method) {
      console.log('%s /%s',
        layer.method.toUpperCase(),
        path.concat(split(layer.regexp)).filter(Boolean).join('/'))
    }
  }
  
  function split (thing) {
    if (typeof thing === 'string') {
      return thing.split('/')
    } else if (thing.fast_slash) {
      return ''
    } else {
      var match = thing.toString()
        .replace('\\/?', '')
        .replace('(?=\\/|$)', '$')
        .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
      return match
        ? match[1].replace(/\\(.)/g, '$1').split('/')
        : '<complex:' + thing.toString() + '>'
    }
  }
  

});

const publicRouter = require("./routes");
app.use("/", publicRouter);         







