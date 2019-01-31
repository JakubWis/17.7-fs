var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

/* create, append, read file

fs.stat('./cat.jpg', function(err, stats){
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data.blue);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(data.yellow);
        });
    });
});

*/

//catalog file list into file
function createCatalogListFile (){
    fs.readdir('./', function(err, files) {
        fs.writeFile('./fileList.txt', files.join('\n'),  function(err) {if (err) throw err;})
    })
};

createCatalogListFile();

