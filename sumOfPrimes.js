function prime(num) { 
  for (var i=2; i<=Math.ceil(Math.sqrt(num)); i++){
    if (num%i === 0 && num>2){
      return false;
    }
  }  
  return true;    
}

var sumOfPrimes = 0,
	primeCount = 0;

for (var i=2; i<200000; i++){
	if (primeCount===1000){
		console.log(sumOfPrimes);
		break;
	}
	if (prime(i)){
		sumOfPrimes+=i;
		primeCount+=1;
	}
}
