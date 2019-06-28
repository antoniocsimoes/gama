function destroyer(array) {
	var args = Array.from(arguments);
	if(args.length > 1){
		var arrayNew = [];
		for(var i = 0; i < array.length; i++){
			var aux = array[i];
			if(args.indexOf(aux) === -1)
				arrayNew.push(aux);
        }
	return arrayNew;
    }
}

console.log(destroyer([1,2,3,1,2,3],2,3));
console.log(destroyer([1,2,3,5,1,2,3],2,3));
console.log(destroyer([3,5,1,2,2],2,3,5));
console.log(destroyer([2,3,2,3],2,3));