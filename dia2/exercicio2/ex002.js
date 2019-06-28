function sumAll(array){
	var sum = 0;
	if(array[0] > array[1]){
		var temp = array[0];
		array[0] = array[1];
		array[1] = temp;
    }
	
	for (var i=array[0]; i <=array[1]; i++)
		sum = sum + i;   
	console.log(sum);
}

console.log(sumAll([1,4]));
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));
console.log(sumAll([10,5]));