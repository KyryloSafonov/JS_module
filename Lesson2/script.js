/*// Task 1
//-створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [5,3,6,7,90];
console.log(arr);

let arr1 = ['my', 'your', 'our', 'best', 'cool'];
console.log(arr1);

let arr2 = [true, false , 25.67 ,'cool', 'ok'];
console.log(arr2);

let arr3 = [];
arr3 [0] = 15;
arr3 [1] = 'best';
arr3 [2] = true;
arr3 [3] = null;
arr3 [4] = 'begin';
console.log(arr3);*/

/*
// Task 2
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//let i ;
//for (i=0;i<10;i++) {
  //  document.write('<div>the best day</div>');
//}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let i;
for (i=0;i<10;i++) {
  document.write(`<div>the best day  ${i}</div>`);
}*/

/*// Task 3
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let i = 0;
//while ( i < 20){
//    document.write('<h1>Happy Birthday</h1>');
//    i++;
//}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while ( i < 20){
    document.write(`<h1>Happy Birthday ${i}</h1>`);
    i++;
}*/

/*
// Task 4
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr = [10, 20 ,50 , 44.3 , 15 , 16, 18 , 20 , 85, 69];
for (const number of arr) {
    console.log(number);
}*/

/*
//Task 5
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr = ['use', 'web', 'mistake' ,'Happy ' , 'halloween' , 'day', 'break' ,'built','watter' ,'grey']
for (const string of arr) {
    console.log(string);
}*/

/*
//Task 6
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr = ['victory', 125, true, null , false, 'win', [true,1254,'many'],'okten', 'love'];
for (const arr1 of arr) {
    console.log(arr1);
}
*/

/*//Task 7
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr = ['victory', 125, true, null , false, 'win', [true,1254,'many'],'okten', 'love'];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean"){
        console.log(arr[i]);
    }
}*/

/*
// Task 8
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr = ['victory', 125, true, null , false, 'win', [true,1254,'many'],'okten', 'love'];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        console.log(arr[i]);
    }
}
*/

/*
// Task 9
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = ['victory', 125, true, null , false, 'win', [true,1254,'many'],'okten', 'love'];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log(arr[i]);
    }
}
*/

/*// Task 10
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr= [];
arr[0]= true;
arr[1]= false;
arr[2]= 225;
arr[3]= { name: 'Vasya', age: 19};
arr[4]= 'delete';
arr[5]= null;
arr[6]= undefined;
arr[7]= 'challange';
arr[8]= 55;
arr[9]= 3.14;

for (let arr1 of arr) {
    console.log(arr1);
}*/

/*
// Task 11
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + ' ')

}
*/

/*// Task 12
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + ' ')

}*/

/*// Task 13
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i+= 2) {
    console.log(i);
    document.write(i + ' ')

}*/

/*// Task 14
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 200; i++) {
    if (i%2 ===0){
        console.log(i);
        document.write(i + ' ')
    }

}*/

/*
//Task 15
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 200; i++) {
    if (i%2 !== 0){
        console.log(i);
        document.write(i + ' ')
    }

}
*/

/*
//Task 16
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let m = 0; m < 3; m++) {
    for (let s = 0; s < 60; s++) {
        document.write(`minute : ${m}  second : ${s} <br>`);
        if (m==2 && s==00){
            break;
         }

    }
    if (m==2 && s==00){
            break;
}
*/

/*
//Task 17
//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h < 3; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            document.write(`hours: ${h}  minute : ${m}  second : ${s} <br>`);
            if (h==2 && m==20){
                break;
            }
        }
        if (h==2 && m==20){
            break;
        }

    }


}
*/
