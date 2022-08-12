"use strict"

console.log('arr' + " - object");

console.log(typeof(4 + "5")); //число плюс строка = строка 
console.log(4 + +"5"); //Унарный плюс +"5" ставться перед значением и превращает строку в число

//Инкермент, декремент

let incrPostfix = 10,
    decrPostfix = 10,
    incrPrefix = 10,
    decrPrefix = 10;


    incrPostfix++;  //incr ="+", postfix (10++) пишется после переменной 
    decrPostfix--; //decr = "-", postfix (10--) пишется после переменоой
    ++incrPrefix; //(++10)incr ="+", prefix пишется перед переменной 
    --decrPrefix; //(--10)decr ="-", prefix пишется перед переменной 
    
    console.log(incrPostfix);
    console.log(decrPostfix);
    console.log(incrPrefix);
    console.log(decrPrefix);



    //Работа postfix and prefix сразу в console.log

let incrPostfixTwo = 10,
    decrPostfixTwo = 10,
    incrPrefixTwo = 10,
    decrPrefixTwo = 10;

    console.log(incrPostfixTwo++); 
    console.log(decrPostfixTwo--);
    console.log(++incrPrefixTwo);
    console.log(--decrPrefixTwo);

    //work operator

    console.log(5%2); //Вывод остатка от деления %
    console.log(2*4 == 8); //== не строгое сравнение(равенство)
    console.log(2*4 == '8'); //== не строгое сравнение(равенство) +строка ('')
    console.log(2*4 === 8); // === строгое сравнение (равенство) , идёт сравнение по типу данных , типы данных должны совпадать (true)
    console.log(2*4 === '8'); // === строгое сравнение (равенство) , идёт сравнение по типу данных , типы данных должны совпадать (false)

    // и и или

    const isChecked = true,
          isClose = false;

    console.log(isChecked && isClose); //Оператор и(&&). Когда одно из значений false выводит false
    console.log(isChecked || isClose); //Оператов или(||). Если хотябы одно значение true выводит true

    // Оператор отрицания (!)

    console.log(isChecked && isClose); 
    console.log(!isChecked || isClose); //Оператор отрицания (!) , меняет значение на обратное, ставиться перед значением 







