let firstName = prompt("Enter your firstname");
let lastName = prompt("Enter your lastname");
let middleName = prompt("Enter your middleName");
let age = parseInt(prompt("Enter your age"));
let yourAgeInDays = Math.floor(age * 364.5);
let futureAge = age + 5;
let sex = prompt("Enter your sex");
function isRetired() {
	if(sex === "мужской"){
		if(age < 61.5){
			return "Нет";
		}
		else{
			return "Да";
		}
	}
	else{
		if(age < 56.5){
			return "Нет";
		}
		else{
			return "Да";
		}
	}
}
alert("Ваше ФИО: " + " " + firstName + " " + lastName + " " + middleName + "\nВаш возраст: " + age +
	"\nВаш возраст в днях: " + yourAgeInDays + "\nЧерез 5 лет вам будет: " + futureAge + "\nВаш пол: " + sex + "Вы на пенсии: " + isRetired());