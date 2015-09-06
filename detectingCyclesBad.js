var fs  = require('fs');


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    

    if (line !== '') {
    	var tortoise=1,
			hare=2,
	 		mu=0;
    	var lineArr = line.split(' ').map(function(elem){
    		return +elem;
    	});
    	// console.log(lineArr);
    	var length = lineArr.length-1;
    
	    while (lineArr[tortoise%length] !== lineArr[hare%length]){
	    	// console.log('tortoise: ' + tortoise + ' hare: ' + hare);
	    	tortoise++;
	    	hare +=2 ;
	    }

	    tortoise = 0;
	    while (lineArr[tortoise%length] !== lineArr[hare%length]){
    		tortoise++;
    		hare ++;
    		mu ++;

    	}
    	// console.log('tortoise: ' + tortoise + ' hare: ' + hare);

    	var lam=1;
    	tortoise=mu;
    	hare=tortoise+1;
    	// console.log(lineArr[tortoise]);
    	// console.log(lineArr[hare]);
    	while (lineArr[tortoise] !== lineArr[hare]) {
    		hare++;
    		lam ++;
    	}

    	// console.log('tortoise: ' + tortoise + ' hare: ' + hare);
    	// console.log(lineArr[tortoise%length]);
    	// console.log('mu position: ' + mu);

    	// console.log('lam: ' + lam + ' mu: ' + mu);
    	console.log(lineArr.splice(mu,lam).join(' '));	


		tortoise=1, hare=2, mu=0;

	}
});






// 