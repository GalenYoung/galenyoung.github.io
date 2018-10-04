var marked = require('marked');
var path = require('path');
var fs = require("fs");

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

function fixedText(title, sign) {
  return `---
  layout: pgm-into
  title: ${title}
  id: pgm-${sign}
  url: programme/${sign}
  css：<link rel="stylesheet" href="../programme/pgm-page${sign}/pgm-page${sign}.css">
  permalink: /programme/${sign}
---
  `;
}

fs.readdir(__dirname, function (err, files) {
  if (err) throw err;

  files.map(function (filename) {
    if (fs.statSync(path.join(__dirname, filename)).isDirectory() && filename.includes('pgm-page')) {
      fs.readdir(path.join(__dirname, filename), function (error, inFiles) {
        if (error) throw error;

        inFiles.map(function (file) {
          if (path.extname(file) === ".MD") {
            fs.readFile(path.join(__dirname, filename, file), "utf8", function (mdError, data) {
              if (mdError) throw mdError;

              fs.writeFile(path.join(__dirname, filename, "index.html"),
                fixedText(path.parse(file).name, filename.trim().slice(-2)) + marked(data),
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