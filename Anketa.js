'use strict';

//ECMAScript 5
/*var display = document.querySelector(".firstclass");
var result = {
	firstName: '',
	lastName: '',
	middleName: '',
	age: 0,
	futureAge: Math.round(this.age * 365,25),
	gender: '',
	futureAge: 0,
	isRetired: '',
	yourAgeInDays: 0
};
function askFirstName(firstName) {
	//const name = prompt('Как Вас зовут?');
	firstName = prompt('Как Вас зовут?');
	if(!firstName){
		console.log('Имя не должно быть пустым');
		askFirstName();
	}
	else{
		result.firstName = firstName;
	}
}

function askLastName(lastName) {
	lastName = prompt('Введите свою фамилию');
	if(!lastName){
		console.log('Поле не должно быть пустым');
		askLastName();
	}
	else{
		result.lastName = lastName;
	}
}

function askMiddleName(middleName) {
	middleName = prompt('Введите своё отчество');
	if(!middleName){
		console.log('Поле не должно быть пустым');
		askMiddleName();
	}
	else{
		result.middleName = middleName;
	}
}

function askAge(age) {
	age = prompt('Введите свой возраст');
	var numAge = +age;
	if(isNaN(numAge)){
		console.log('Возраст должен быть числом');
		askAge();
	}
	else{
		result.age = numAge;
	}
}

function askGender(gender) {
	gender = prompt('Введите свой пол');
	if(!gender){
		console.log('Поле не должно быть пустым');
		askGender();
	}
	else{
		result.gender = gender;
	}
}

function futureAge(futureAge) {
	result.futureAge = result.age + 5;
}

function isRetired(isRetired) {
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
*/

//ECMAScript6
const display = document.querySelector(".firstclass");
let result = {
	firstName: '',
	lastName: '',
	middleName: '',
	age: 0,
	futureAge: Math.round(this.age * 365,25),
	gender: '',
	futureAge: 0,
	isRetired: '',
	yourAgeInDays: 0
};


let askFirstName = (firstName) => {
	firstName = prompt('Как Вас зовут?');
	if(!firstName){
		console.log('Имя не должно быть пустым');
		askFirstName();
	}
	else{
		result.firstName = firstName;
	}
	}

let askLastName = (lastName) => {
	lastName = prompt('Введите свою фамилию');
	if(!lastName){
		console.log('Поле не должно быть пустым');
		askLastName();
	}
	else{
		result.lastName = lastName;
	}
}

let askMiddleName = (middleName) => {
	middleName = prompt('Введите своё отчество');
	if(!middleName){
		console.log('Поле не должно быть пустым');
		askMiddleName();
	}
	else{
		result.middleName = middleName;
	}
}

let askAge = (age) => {
	age = prompt('Введите свой возраст');
	var numAge = +age;
	if(isNaN(numAge)){
		console.log('Возраст должен быть числом');
		askAge();
	}
	else{
		result.age = numAge;
	}
}

let askGender = (gender) => {
	gender = prompt('Введите свой пол');
	if(!gender){
		console.log('Поле не должно быть пустым');
		askGender();
	}
	else{
		result.gender = gender;
	}
}

let futureAge = (futureAge) => {
	result.futureAge = result.age + 5;
}

let isRetired = (isRetired) => {
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

let yourAgeInDays = (yourAgeInDays) => {
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
display.innerHTML = `Ваше ФИО: ${result.lastName}  ${result.firstName} ${result.middleName} <br>Ваш возраст: ${result.age}
	<br>Ваш возраст в днях: ${result.yourAgeInDays} <br>Через 5 лет вам будет: ${result.futureAge} <br>Ваш пол: ${result.gender} <br>Вы на пенсии: ${result.isRetired}`;

