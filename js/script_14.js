"use strict";

let num = 50;
while (num <= 55) { //while (пока что) условие цикла 
    console.log(num);
    num++; //цикл будет выполнятся до тех пор , пока условие не станет верным 
}


let num1 = 50;
do { //выполнение тела цикла, потом проверка условия(while)
    console.log(num1);
    num1++; 
}
while(num1 < 55);


for (let i = 1; i < 8; i++) {
    console.log(i);
} 

// Цикл с условием
for (let i1 = 1; i1 < 10; i1++) {
    if (i1 === 6) {
        break;
    }
    console.log(i1);
}

for (let i2 = 1; i2 < 10; i2++) {
    if (i2 === 6) {
        continue; //пропустить значение из цикла (if(i2 === 6))
    }
    console.log(i2);
}
