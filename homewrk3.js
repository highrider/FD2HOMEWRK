"use strict"


class Person { 
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
anna.getMaried(john);