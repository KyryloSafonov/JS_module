/*
// task 1
// - створити функцію яка виводить масив
let arr = ['hi', true, 256, 'blackpink', null];
function printArr (arr){
    console.log(arr);
}
printArr(arr);
*/

/*
// task 2
//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function createArr (length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() *(max - min)+min));

    }
    return arr;
}
let doneArr = createArr(5,5,50);
printArr(doneArr);*/

/*// task 3
// створити функцію яка приймає три числа та виводить та повертає найменьше.
function getLogReturn (first, second, third) {
    let min = Math.min (first,second,third);

    console.log('min = ' + min);
    console.log('first = ' + first);
    console.log('second = ' + second);
    console.log('third = ' + third);

    return min;

}
let a = prompt('write first number');
let b = prompt('write second number');
let c = prompt('write third number');
let min  = getLogReturn(a,b,c);
console.log(min);*/

/*// task 4
// створити функцію яка приймає три числа та виводить та повертає найбільше.
function getLogReturn (first, second, third) {
    let max = Math.max (first,second,third);

    console.log('max = ' + max);
    console.log('first = ' + first);
    console.log('second = ' + second);
    console.log('third = ' + third);

    return max;

}
let a = prompt('write first number');
let b = prompt('write second number');
let c = prompt('write third number');
let max  = getLogReturn(a,b,c);
console.log(max);*/

/*
// task 5
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// Хотел я сделать что бы числа у меня с клавиатуры вводились но ничего не вышло, посмотри, подскажи
// что с этим можно сделать, пожалуйста)
/!*function printMax (n){
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() *(max - min)+min));
        let min = Math.min(arr[i]);
        let max = Math.max(arr[i]);
        console.log(max);
        //return min;
    }

}

let n = prompt('write "n" number');
let maximum = printMax(n);
console.log(maximum);*!/


// вот рабочий код
function printMax () {
    let min = arguments[0];
    let max = arguments[0];
    for (let argument of arguments) {
        if (argument > max) max = argument;
        if (argument < min) min = argument;
    }
    console.log('max = ' + max);
    return min;
}
let min = printMax(25,26,27,41,15,25);
console.log('min = ' + min);
*/



