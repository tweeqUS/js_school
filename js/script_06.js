"use strict"; 

let number = 4.6; //числвоое значение , точка, а не запятая


console.log(4/0); //infinity (бесконечность) 
console.log('string' * 9); //NaN (Not a Number) не число

const bool = false; //булиновое значение(либо да либо нет (true or false))
console.log(typeof(bool)); //typeof - показывает тип переменной


let und;
console.log(und); //undefined -неизвестность

const obj = {
    name: "kirya",
    age:   27,
    married: false
}

console.log(obj.name); //1 способ вывода обьекта (.name) через точку
console.log(obj["name"]); //2 способ вывода обьекта (["name"])

let arr = ['kirya', 7, 'city', 'country']; //массив в квадратных скобках 
console.log(arr[3]);