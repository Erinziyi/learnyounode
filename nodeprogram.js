// console.log("HELLO WORLD");

// for (i = 2, sum = 0; i < process.argv.length; i++) {
//   sum += +process.argv[i];
// }
// console.log(sum);

// var fs = require("fs");
// var data = fs.readFileSync(process.argv[2]); //read

// var str = data.toString().split("\n").length - 1; //to string then split
// console.log(str);

// var fs = require("fs");

// fs.readFile(process.argv[2], function(err, data) {
//   var str = data.toString().split("\n").length - 1; //to string then split
//   if (err) throw err;
//   console.log(str);
// });

// const fs = require("fs");
// const test = "." + process.argv[3];

// fs.readdir(process.argv[2], (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     data.filter(file => {
//       if (file.substring(file.length - test.length) === test) {
//         console.log(file);
//       }
//     });
//   }
// });

var fs = require("fs");
var path = require("path");

var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
