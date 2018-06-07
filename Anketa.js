'use strict';

//ECMAScript 5
/*var display = document.querySelector(".firstclass");
var result = {
	firstName: '',
	lastName: '',
	middleName: '',
	age: 0,
	futureAge: 0,
	gender: '',
	futureAge: 0,
	isRetired: '',
	yourAgeInDays: 0
};
function askFirstName() {
	var firstName = prompt('Как Вас зовут?');
	if(!firstName){
		console.log('Имя не должно быть пустым');
		askFirstName();
	}
	else{
		result.firstName = firstName;
	}
}

function askLastName() {
	var lastName = prompt('Введите свою фамилию');
	if(!lastName){
		console.log('Поле не должно быть пустым');
		askLastName();
	}
	else{
		result.lastName = lastName;
	}
}

function askMiddleName() {
	var middleName = prompt('Введите своё отчество');
	if(!middleName){
		console.log('Поле не должно быть пустым');
		askMiddleName();
	}
	else{
		result.middleName = middleName;
	}
}

function askAge() {
	var age = prompt('Введите свой возраст');
	var numAge = +age;
	if(isNaN(numAge)){
		console.log('Возраст должен быть числом');
		askAge();
	}
	else{
		result.age = numAge;
	}
}

function askGender() {
	var gender = prompt('Введите свой пол');
	if(!gender){
		console.log('Поле не должно быть пустым');
		askGender();
	}
	else{
		result.gender = gender;
	}
}

function futureAge() {
	result.futureAge = result.age + 5;
}

function isRetired() {
	if(result.gender === "мужской"){
		if(result.age < 61.5){
			result.isRetired = "Нет";
		}
		else{
		result.isRetired = "Да";
		}
	}
	else{
		if(result.age < 56.5){
			result.isRetired = "Нет";
		}
		else{
			result.isRetired = "Да";
		}
	}
}

function yourAgeInDays(yourAgeInDays) {
	yourAgeInDays = Math.round(result.age * 365.25);
	result.yourAgeInDays = yourAgeInDays;
}


askFirstName();
askLastName();
askMiddleName();
askAge();
askGender();
futureAge();
isRetired();
yourAgeInDays();
display.innerHTML = "Ваше ФИО: " + " " + result.lastName+ result.firstName + " " + result.middleName + "<br>Ваш возраст: " + result.age +
	"<br>Ваш возраст в днях: " + result.yourAgeInDays + "<br>Через 5 лет вам будет: " + result.futureAge + "<br>Ваш пол: " + result.gender + "<br>Вы на пенсии: " + result.isRetired;


//ECMAScript6
const display = document.querySelector(".firstclass");
let result = {
	firstName: '',
	lastName: '',
	middleName: '',
	age: 0,
	futureAge: 0,
	gender: '',
	futureAge: 0,
	isRetired: '',
	yourAgeInDays: 0
};


let askFirstName = () => {
	let firstName = prompt('Как Вас зовут?');
	if(!firstName){
		console.log('Имя не должно быть пустым');
		askFirstName();
	}
	else{
		result.firstName = firstName;
	}
	}

let askLastName = () => {
	let lastName = prompt('Введите свою фамилию');
	if(!lastName){
		console.log('Поле не должно быть пустым');
		askLastName();
	}
	else{
		result.lastName = lastName;
	}
}

let askMiddleName = () => {
	let middleName = prompt('Введите своё отчество');
	if(!middleName){
		console.log('Поле не должно быть пустым');
		askMiddleName();
	}
	else{
		result.middleName = middleName;
	}
}

let askAge = () => {
	let age = prompt('Введите свой возраст');
	let numAge = +age;
	if(isNaN(numAge)){
		console.log('Возраст должен быть числом');
		askAge();
	}
	else{
		result.age = numAge;
	}
}

let askGender = () => {
	gender = prompt('Введите свой пол');
	if(!gender){
		console.log('Поле не должно быть пустым');
		askGender();
	}
	else{
		result.gender = gender;
	}
}

let futureAge = () => {
	result.futureAge = result.age + 5;
}

let isRetired = () => {
	if(result.gender === "мужской"){
		if(result.age < 61.5){
			result.isRetired = "Нет";
		}
		else{
		result.isRetired = "Да";
		}
	}
	else{
		if(result.age < 56.5){
			result.isRetired = "Нет";
		}
		else{
			result.isRetired = "Да";
		}
	}
}

let yourAgeInDays = () => {
	let yourAgeInDays = Math.round(result.age * 365.25);
	result.yourAgeInDays = yourAgeInDays;
}


askFirstName();
askLastName();
askMiddleName();
askAge();
askGender();
futureAge();
isRetired();
yourAgeInDays();
display.innerHTML = `Ваше ФИО: ${result.lastName}  ${result.firstName} ${result.middleName} <br>Ваш возраст: ${result.age}
	<br>Ваш возраст в днях: ${result.yourAgeInDays} <br>Через 5 лет вам будет: ${result.futureAge} <br>Ваш пол: ${result.gender} <br>Вы на пенсии: ${result.isRetired}`;
*/
//NodeJS ECMAScript 5
var readline = require('readline');

var result = {
    firstName: '',
    lastName: '',
    middleName: '',
    age: 0,
    futureAge: 0,
    gender: '',
    futureAge: 0,
    isRetired: '',
    yourAgeInDays: 0
}

function askName() {
    var rl = prompt ();
    rl.question('Введите Ваше имя? ', function(answer) {
        rl.close();
        if (!answer) {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.firstName = answer;
            askLastName();
        }
    });
}

function askLastName() {
    var rl = prompt();
    rl.question('Введите Вашу фамилию? ', function(answer) {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askName();
        }
        else {
            result.lastName = answer;
            askMiddleName();
        }
    });
}

function askMiddleName() {
    var rl = prompt();
    rl.question('Введите Ваше отчество? ', function(answer) {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askName();
        }
        else {
            result.middleName = answer;
            askAge();
        }
    });
}

function askAge() {
    var rl = prompt();
    rl.question('Введите Ваш возраст ', function(answer) {
        const age = +answer;
        if (isNaN(age)) {
            console.log('Возраст должен быть введен числом.');
            askAge();
        }
        else {
            result.age = age;
            futureAge();
        }
    });
}

function futureAge() {
   result.futureAge = result.age + 5;
   askGender();
}
function askGender() {
        const rl = prompt();
    rl.question('Введите свой пол ', function(answer) {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askGender();
        }
        else {
            result.gender = answer;
            yourAgeInDays();
        }
    });
}


function yourAgeInDays() {
    var yourAgeInDays = Math.round(result.age * 365.25);
    result.yourAgeInDays = yourAgeInDays;
    isRetired();
}

function isRetired() {
    if(result.gender === "мужской"){
        if(result.age < 61.5){
            result.isRetired = "Нет";
            end();
        }
        else{
        result.isRetired = "Да";
        end();
        }
    }
    else{
        if(result.age < 56.5){
            result.isRetired = "Нет";
            end();
        }
        else{
            result.isRetired = "Да";
            end();
        }
    }
}


function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
   console.log("Ваше ФИО: " + " " + result.lastName+ result.firstName + " " + result.middleName + "\nВаш возраст: " + result.age +
    "\nВаш возраст в днях: " + result.yourAgeInDays + "\nЧерез 5 лет вам будет: " + result.futureAge + "\nВаш пол: " + result.gender + "\nВы на пенсии: " + result.isRetired);
}

askName();
//ECMAScript 6 node js
const readline = require('readline');

const result = {
    firstName: '',
    lastName: '',
    middleName: '',
    age: 0,
    futureAge: 0,
    gender: '',
    futureAge: 0,
    isRetired: '',
    yourAgeInDays: 0
}

let askName = () => {
    const rl = prompt();
    rl.question('Введите Ваше имя? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.firstName = answer;
            askLastName();
        }
    });
}

let askLastName = () => {
    const rl = prompt();
    rl.question('Введите Вашу фамилию? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askName();
        }
        else {
            result.lastName = answer;
            askMiddleName();
        }
    });
}

let askMiddleName = () => {
    const rl = prompt();
    rl.question('Введите Ваше отчество? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askName();
        }
        else {
            result.middleName = answer;
            askAge();
        }
    });
}

let askAge = () => {
    const rl = prompt();
    rl.question('Введите Ваш возраст ', (answer) => {
        rl.close();
        const age = +answer;
        if (isNaN(age)) {
            console.log('Возраст должен быть введен числом.');
            askAge();
        }
        else {
            result.age = age;
            futureAge();
        }
    });
}

let futureAge = () => {
   result.futureAge = result.age + 5;
   askGender();
}
let askGender = () => {
        const rl = prompt();
    rl.question('Введите свой пол ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Поле не может быть пустым.');
            askGender();
        }
        else {
            result.gender = answer;
            yourAgeInDays();
        }
    });
}


let yourAgeInDays = () => {
    let yourAgeInDays = Math.round(result.age * 365.25);
    result.yourAgeInDays = yourAgeInDays;
    isRetired();
}

let isRetired = () => {
    if(result.gender === "мужской"){
        if(result.age < 61.5){
            result.isRetired = "Нет";
            end();
        }
        else{
        result.isRetired = "Да";
        end();
        }
    }
    else{
        if(result.age < 56.5){
            result.isRetired = "Нет";
            end();
        }
        else{
            result.isRetired = "Да";
            end();
        }
    }
}


let prompt = () => {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

let end = () => {
   console.log(`
    Ваше ФИО: ${result.lastName}  ${result.firstName} ${result.middleName} 
    Ваш возраст: ${result.age}
    Ваш возраст в днях: ${result.yourAgeInDays} 
    Через 5 лет вам будет: ${result.futureAge} 
    Ваш пол: ${result.gender} 
    Вы на пенсии: ${result.isRetired}`);
}

askName();
