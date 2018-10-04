var marked = require('marked');
var path = require('path');
var fs = require("fs");

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

function fixedText(title='Software Document', sign=1) {
  return `---
    layout: soft-into
    title: ${title}
    id: soft-${sign}
    url: software/${sign}
    css: <link rel="stylesheet" type="text/css" href="../software/soft-page${sign}/soft-page${sign}.css">
    permalink: /software/${sign}
    ---`;
}



fs.readdir(__dirname, function (err, files) {
  if (err) throw err;

  files.map(function (filename) {
    if (fs.statSync(path.join(__dirname, filename)).isDirectory() && filename.includes('soft-page')) {
      fs.readdir(path.join(__dirname, filename), function (error, inFiles) {
        if (error) throw error;

        inFiles.map(function (file) {
          if (path.extname(file) === ".MD") {
            fs.readFile(path.join(__dirname, filename, file), "utf8", function (mdError, data) {
              if (mdError) throw mdError;

              fs.writeFile(path.join(__dirname, filename.trim().slice(-2), `${path.parse(file).name}.html`),
              fixedText(path.parse(file).name,) + marked(data),
                function (errorIn) {
                  if (errorIn) throw errorIn;
                })
            })
          }
        })
      })
    };
  });


});

var markdownString = '```js\n console.log("hello"); \n```';
var HTMLString = marked(markdownString);