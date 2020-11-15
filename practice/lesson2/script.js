// // task 1
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

//- двигун більше 3х літрів
// let filter = cars.filter(value => {
//     if (value.volume > 3 ) {
//         console.log(value);
//         return value;
//     }
//     return 0;
// });
//console.log(filter);

// //- двигун = 2л
// let filter =  cars.filter(value => value.volume === 2);
// console.log(filter);

// //- виробник мерс
// let filter = cars.filter( value => value.producer === 'mercedes');
// console.log(filter);

// //- двигун більше 3х літрів + виробник мерседес
// let filter = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
// console.log(filter);

// //- двигун більше 3х літрів + виробник субару
// let filter = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(filter);

// //- сили більше ніж 300
// let filter = cars.filter(value => value.power > 300);
// console.log(filter);

// //- сили більше ніж 300 + виробник субару
// let filter = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(filter);

// //- мотор серіі ej
// let filter = cars.filter(value => {
//     if (value.engine.startsWith('ej')){
//         return value;
//     }
// })
// console.log(filter);

// //- сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));
// console.log(filter);

// //- двигун меньше 3х літрів + виробник мерседес
// let filter = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(filter);

// // - двигун більше 2л + сили більше 250
// let filter = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(filter);

// // - сили більше 250  + виробник бмв
// let filter = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(filter);

// task 2
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// //-- отсортировать его по id пользователей
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1
//     }
//     if (a.id > b.id){
//         return 1
//     }
//     return 0;
// })
// console.log(sort);

// //-- отсортировать его по id пользователей в обратном опрядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.id > b.id) {
//         return -1
//     }
//     if (a.id < b.id){
//         return 1
//     }
//     return 0;
// })
// console.log(sort);

//-- отсортировать его по возрасту пользователей
let sort = usersWithAddress.sort((a, b) => {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0;
})
console.log(sort);


// //Cоздать функцию которая принимает число и возвращает  текст как в примере:
// // 3275  —>  "3000 + 200 + 70 +5"
// function returnText (num){
//     let arr = [];
//     let str = '';
//     while (num){
//         arr.push((num%10));
//         num = Math.trunc(num/10);
//     }
//     for (let i = arr.length -1 ; i >=0 ; i--) {
//         const tmp = arr[i] * (10**i);
//         str+= i === 0? tmp : tmp + ' + ';
//     }
//     return str;
// }
// let Text = returnText(896547);
// console.log(Text);





