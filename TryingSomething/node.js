// Requiring fs module in which
// writeFile function is defined.

var http = require('http'),
    fs = require('fs');
//
// // Loading and rendering the html file
// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(3000);
// });

function javascriptWriteToFile() {

  // Data which will write in a file.
  let data = "Learning how to write in a file."

  // Write data in 'Output.txt' .
  fs.writeFile('Output.txt', data, (err) => {

      // In case of a error throw err.
      if (err) throw err;
  })
}

function readTextFile() {

  // const fs = require('fs');
  // const {promisify} = require('util');
  // const fd = fs.openSync('./fileToRead.txt', 'r')
  //
  // const readFilePromise = promisify(fs.readFile);
  //
  // readFilePromise('./fileToRead.txt', 'utf8', (error, data) => {
  //   if (error) {
  //     return console.log(error)
  //   }
  //   console.log(data);
  // })
  //
  // fs.close(fd, (error) => {
  //   if (error) {
  //     return console.log(error)
  //   }
  // })

  fs.readFile('./fileToRead.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });

}

javascriptWriteToFile();
readTextFile();
