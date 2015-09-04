var fs  = require('fs');
var tortoise=1,
	hare=2;
var mu=0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
    	var lineArr = line.split(' ').map(function(elem){
    		return parseInt(elem,10)
    	});
    	console.log(lineArr);
    	var length = lineArr.length-1;
    
	    while (lineArr[tortoise%length] !== lineArr[hare%length]){
	    	console.log('tortoise: ' + tortoise + ' hare: ' + hare);
	    	tortoise++;
	    	hare +=2 ;
	    }

	    tortoise = 0;
	    while (lineArr[tortoise%length] !== lineArr[hare%length]){
    		tortoise++;
    		hare ++;
    		mu ++;

    	}



    	console.log('tortoise: ' + tortoise + ' hare: ' + hare);
    	console.log(lineArr[tortoise%length]);
    	console.log('mu position: ' + mu);
		tortoise=1, hare=2, mu=0;

	}
});






