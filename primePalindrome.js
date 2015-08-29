function prime(num) { 
  for (var i=2; i<=Math.ceil(Math.sqrt(num)); i++){
    if (num%i === 0 && num>2){
      return false;
    }
  }  
  return true;    
}

function palindrome(num){
	var reverseNum = ('' + num).split('').reverse().join('').toString();
	// console.log('%s, %s', num, reverseNum);
	if (parseInt(reverseNum,10)===num) return true;
	return false;
}

for (var x= 1000; x>=2; x--){
	//check for palindrome
	if(palindrome(x)){
		if (prime(x)){
			console.log(x);
			break;
		}
	}
	//check prime
}