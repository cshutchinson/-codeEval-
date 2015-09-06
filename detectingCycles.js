var fs  = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    if (line !== '') {
    	var lineArr = line.split(' ').map(function(elem){
            return +elem;
        });
        //console.log(lineArr);
        // for (each number) move (2nd cursor) until (both are the same) 
        // then (move both at same speed to find the whole cycle)
        // becuse you could have 6 3 1 6 3 1 6 3 2 6 3 1
        // and on this example the answer would still be 6 3 1
        // but then there's the second case
        // 6 6 3 1 6 6 3 1

        // search for elem in array
        //     if found stop with hare and tortise defined save firstTortoise
        //     else if not found increment repeat
        // define a length
        // while lineArr[tortise]===lineArr[hare]
        //     incrent length
        //     increment hare,tortoise at same speed
        // with length known return splice(firstTortoise, length)
        var tortoise=0, hare=1, firstTortoise=0;
        while (lineArr[tortoise] !== lineArr[hare]){
            hare = lineArr.indexOf(lineArr[tortoise], tortoise+1);
            hare === -1 ? tortoise++ : null;
        }
        // var length=1, firstTortoise=tortoise;
        // console.log(firstTortoise);
        // console.log (tortoise, hare);

        // while(lineArr[tortoise]===lineArr[hare]){
        //     tortoise++, hare++;
        //     length++;
        // }

        console.log(lineArr.slice(tortoise, hare).join(' '));


	}
    
});
