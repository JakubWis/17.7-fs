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
        fs.writeFile('./fileList.txt', files[0],  function(err) {if (err) throw err;})
        for (var i=1; i<files.length; i++) {
          fs.appendFile('./fileList.txt', "\n "+files[i],  function(err) {if (err) throw err;})  
    }
    })
};

createCatalogListFile();

