/*//- создать массив с 20 числами.
let arr = [];
for (let i = 0; i < 20; i++) {
   let a = Math.round(Math.random()*150);
   arr.push(a);

}
console.log(arr);*/

/*
// task 1
//-- при помощи метода sort и колбека  отсортировать массив.
let sort = arr.sort((a,b) =>{

    return a - b ;
});
console.log(sort);*/

/*// task 2
//при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let sort = arr.sort((a,b) =>{

    return b - a ;
});
console.log(sort);*/

/*// task 3
//-- при помощи filter получить числа кратные 3
let filter = arr.filter((value) => {
    if (value % 3 == false ){
        console.log(value);
        return value;
    }

})
//console.log(filter);*/

/*
// task 4
// -- при помощи filter получить числа кратные 10
let filter = arr.filter((value) => (value % 10 == false));
console.log(filter);
*/

/*//task 5
//-- перебрать (проитерировать) массив при помощи foreach()
let iter = arr.forEach(value => {
    console.log(value);
});*/

/*// task 6
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let map = arr.map(value => {
    console.log(value);
    return value * 3;
});
console.log(map);*/

//- создать массив со словами на 15-20 элементов.
//let words = ['split', 'get', 'block', 'div', 'night', 'crazy', 'text', 'believe', 'check', 'money', 'need', 'another', 'person', 'let', 'giv'];

/*
// task 7
//отсортировать его по алфавиту в восходящем порядке.
let sort = words.sort();
console.log(sort);
*/

/*// task 8
// отсортировать его по алфавиту  в нисходящем порядке.
let sort = words.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    return 1;
});
console.log(sort);*/

/*// task 9
//-- отфильтровать слова длиной менее 4х символов
let fourSymbols = words.filter(value => value.length <= 4);
console.log(fourSymbols);*/

/*// task 10
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let map = words.map(value => value + '!')
console.log(map);*/

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false},
              {name: 'petya', age: 30, status: true},
              {name: 'kolya', age: 29, status: true},
              {name: 'olya', age: 28, status: false},
              {name: 'max', age: 30, status: true},
              {name: 'anya', age: 31, status: false},
              {name: 'oleg', age: 28, status: false},
              {name: 'andrey', age: 29, status: true},
              {name: 'masha', age: 30, status: true},
              {name: 'olya', age: 31, status: false},
              {name: 'max', age: 31, status: true}];

/*// task 11
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//console.log(users);
// let sort = users.sort((a, b) => {
//     if (a.age < b.age){
//         return -1;
//     }
//      return 1;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if (a.age > b.age){
//         return -1;
//     }
//     return  1;
// });
// console.log(sort);*/

/*// task 12
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => {
//     if (a.name < b.name){
//         return -1;
//     }
//     return 1;
// });
//
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if (a.name > b.name){
//         return -1;
//     }
//     return 1;
// });
//
// console.log(sort);*/

/*// task 13
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let map = users.map(value => {
    //console.log(value);
    value.id = 0
    return value;
})
console.log(map);*/















//Additionaly task from Vitalya
function findMissingLetter (arr) {
    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1].charCodeAt();
        let current = arr[i].charCodeAt();
        if (current - prev !== 1) {
            return String.fromCharCode(prev + 1);
        }
    }

    return 0;
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));










