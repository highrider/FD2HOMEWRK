//Homework 2
function halfReverseArr(num){
	// debugger;
	var arr = [];
	var medium = num/2;
	for(let i = 0; i < num; i++){
		arr.push(Math.floor(Math.random()*(20-0+1))+0);
	}
	console.log(arr);
	if(arr.length < 2){
		return "too less";
	}
	var a,b;
	if(arr.length ===2){
		a = arr[0];
		b = arr[1];
		arr[0] = b;
		arr[1] = a;
		return arr;
	}
	else if(arr.length % 2 != 0){
	for(let j = 0; j < Math.floor(medium); j++){
		a = arr[j];
		b = arr[j + Math.floor(medium) + 1];
		arr[j] = b;
		arr[j + Math.floor(medium) + 1] = a;
	}
	return arr;
	}
	else{
		for(let j = 0; j < arr.length/2; j++){
			a = arr[j];
			b = arr[j + medium];
			arr[j] = b;
			arr[j + medium] = a;
		}
		return arr;
	}
}
halfReverseArr(6);


function smartReverseArr(num){
	// debugger;
	var arr = [];
	var medium = num/2;
	for(let i = 0; i < num; i++){
		arr.push(Math.floor(Math.random()*(20-0+1))+0);
	}
	if(arr.length < 2){
		return "too less";
	}
	console.log(arr);
	var a,b,c,d;
	if(arr.length ===2){
		a = arr[0];
		b = arr[1];
		arr[0] = b;
		arr[1] = a;
		return arr;
	}
	else if(arr.length % 2 === 0){
	for(let j = 0; j < Math.round(arr.length/4); j++){
		a = arr[j];
		b = arr[medium - (1 + j)];
		c = arr[j + medium];
		d = arr[arr.length - (j + 1)];
		arr[j] = b;
		arr[medium - (j + 1)] = a;
		arr[arr.length - (j + 1)] = c;
		arr[medium + j] = d;
		console.log("a");
		}
	return arr;
	}
	else{
		for(let j = 0; j < Math.round(arr.length/4); j++){
			a = arr[j];
			b = arr[Math.floor(medium) - (j + 1)];
			c = arr[Math.floor(medium) + (j +1)];
			d = arr[arr.length - (j + 1)];
			arr[j] = b;
			arr[Math.floor(medium) - (j + 1)] = a;
			arr[Math.floor(medium) + (j + 1)] = d;
			arr[arr.length - (j + 1)] = c;
	}
	}
	return arr;
}

smartReverseArr(7);
