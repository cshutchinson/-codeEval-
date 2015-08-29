// var fs = require('fs');

// fs.readFileSync('./nums.txt', 'utf8', (err,data) => {
//     if (err) {
//         return (err);
//     }
//     return (data);
// });


var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
        var lineArray =  line.split(' ');
    	var numArray = lineArray.map(function(elem){
    		return parseInt(elem, 10);
    	})	
        for (var i=1; i<=numArray[2]; i++){
    		if (i%numArray[0]===0 && i%numArray[1]===0){
    			returnString += ' FB';
    		} else if (i%numArray[1]===0){
    			returnString += ' B';
    		} else if (i%numArray[0]===0){
    			returnString += ' F';
    		} else {
    			returnString += ' ' + i;
    		}
        }
        returnString += '\n';
    }
});

console.log(returnString);

