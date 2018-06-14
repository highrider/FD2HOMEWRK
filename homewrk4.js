"use strict"


/*class Person { 
	constructor(name) { 
		this._name = name;
		this._isMaried = false;
		this._partner = null;
	}
	getMaried(pers) {
		if(pers._isMaried == false && this._isMaried == false && this._gender != pers._gender) {
			this._isMaried = true;
			pers._isMaried = true;
			this._partner = pers._name;
			console.log(`ПОздравляем, свободный партнер есть поэтому от лица ES6 ${this._name} и ${pers._name} женаты`)
		}
		else if (this._gender == pers._gender) {
			console.log('К сожалению по закону это не разрешено')
		}
		else if(this._name === pers._partner){
			console.log('Хватит уже');
		}
		else if(this._isMaried ===true || pers._isMaried === true) {
			console.log('МНогоженство запрещено')
		}
		
	
}
}

class Man extends Person {
	constructor(name) {
		super(name);
		this._gender = 'male';
	}
}

class Women extends Person {
	constructor(name) {
		super(name);
		this._gender = 'female';
	}
}

const vitaly = new Man('vitaly');
const anna = new Women('Anna');
const john = new Man('Jhon');

vitaly.getMaried(anna);
anna.getMaried(vitaly);
anna.getMaried(john);*/

//ES5
function Person(name){
	this._name = name;
	this._isMaried = false;
	this._partner = null;

}

Person.prototype.getMaried = function(pers) {
	if(pers._isMaried == false && this._isMaried == false && this._gender != pers._gender) {
			this._isMaried = true;
			pers._isMaried = true;
			this._partner = pers._name;
			console.log(`ПОздравляем, свободный партнер есть поэтому от лица ES6 ${this._name} и ${pers._name} женаты`)
		}
		else if (this._gender == pers._gender) {
			console.log('К сожалению по закону это не разрешено')
		}
		else if(this._name === pers._partner){
			console.log('Хватит уже');
		}
		else if(this._isMaried ===true || pers._isMaried === true) {
			console.log('МНогоженство запрещено')
		}
}

function Man(name){
	this.superConstructor.call(this, name);
	this._gender = 'male';
}

function Woman(name){
	this.superConstructor.call(this, name);
	this._gender = 'female';
}

var f = function() {};
f.prototype = Person.prototype;
Man.prototype = new f();
Man.prototype.constructor = Man;
Man.prototype.super = f.prototype;
Man.prototype.superConstructor = Person;



var f1 = function() {};
f1.prototype = Person.prototype;
Woman.prototype = new f();
Woman.prototype.constructor = Woman;
Woman.prototype.super = f.prototype;
Woman.prototype.superConstructor = Person;


const vitaly = new Man('vitaly');
const anna = new Woman('Anna');
const john = new Man('Jhon');

vitaly.getMaried(anna);
anna.getMaried(vitaly);
anna.getMaried(john);



//Rainbow
 function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }

    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
        var obj = {};
        console.log( 'цветов: ' + colorsCount );
        for (var i=1; i<=colorsCount; i++) {
            var n=randomDiap(1,7);
            var colorName = colors[n];
            if(!(obj.hasOwnProperty(colorName))){
            	obj[colorName] = i;
            	console.log( colorName );
            }
            else{
            	i--;
            }
        }
    }

    mood(5);   



//vowels filter
    function vowelCounter(str) {
    	var  test = ["Ё", "ё", "у", "У", "е", "Е", "ы", "Ы", "а", "А", "о", "О", "э", "Э", "я", "Я","и", "И", "ю", "Ю"];
    	var arr = str.split("");
    	var counter = 0;
    	for(let i = 0; i < str.length; i++){
    		if(test.includes(arr[i])){
    			counter++;
    		}
    	}
    	console.log(counter);

    }
    vowelCounter("Ёжик лучший друг марины");


//drinkmap
 class HashStorage{
    	constructor(drinkName, value){
    		this.drinkName = null;
    		this._storage = {};
    		this._arr = [];
    	}
    	addValue(){
    		var drinkName = prompt("Введите название напитка: ");
    		var isAlcohol = prompt("Алкогольный ли напиток: ");
    		var recipe = prompt("Введите рецепт");
    		this._storage[drinkName] = {drinkName: drinkName,
    			isAlcohol: isAlcohol,
    			recipe: recipe};

    		 console.log(this._storage);
    	}

    	getValue(){
    		var drinkName = prompt("Введите название напитка: ");
    		console.log(this._storage[drinkName]);
    		for(let drinkName in this._storage){
    			 if(this._storage.hasOwnProperty(drinkName)){
    			 	alert(this._storage[drinkName].drinkName);
    				alert(this._storage[drinkName].isAlcohol);
    				alert(this._storage[drinkName].recipe);
    		 }
    		 else{
    			 return undefined;
    		 }
    		}
    	}
    	deleteValue() {
    		var delvalue = prompt("Введите напиток: ")
    	delete this._storage[delvalue];
    	console.log(this._storage);	
    	}

    	getKeys() {
    			for(var key in this._storage){
    			this._arr.push(key);
    		}
    		console.log(this._arr);
    	} 
    }

var drinkStorage = new HashStorage();
drinkStorage.addValue();
drinkStorage.getValue();
drinkStorage.getKeys();
drinkStorage.deleteValue("ginandtonic");


//Fibonacci number

function fib(n){
	if(n > 2){
	return fib(n-1) + fib(n-2);
	}
	else{
	return 1;
	}
}
fib(7);






