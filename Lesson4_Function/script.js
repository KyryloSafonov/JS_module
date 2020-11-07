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

/*// task 6
//- створити функцію яка повертає найбільше число з масиву
/!*function maxNumber (length, from, to) {
    let arr = [];
    let max ;
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() *(to - from)+from));
        max = Math.max(arr[i]);
    }
    console.log(max);
    return max;


}
maxNumber(20,-100,100)*!/
/!*
// alternative function
function maxNumber() {
    let arr = [1, 3, 45, -20, 52 , 48 ,100, 1.25, 10000, 1254896, 34, 8567];
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) max = arr[i];

    }
    console.log(max);
    return max;
}
maxNumber();*!/*/

/*// task 7
// - створити функцію яка повертає найменьше число з масиву
function maxNumber (length, from, to) {
    let arr = [];
    let min ;
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() *(to - from)+from));
        min = Math.min(arr[i]);
    }
    console.log(min);
    return min;


}
maxNumber(20,-100,100)

// alternative function
function maxNumber() {
    let arr = [1, 3, 45, -25, 52 , 48 ,100, 1.25, 10000, 1254896, 34, 8567];
    let min;
    for (let number of arr) {
        if (arr[number] < arr[number + 1]) min = arr[number];
    }


    console.log(min);
    return min;
}
maxNumber()*/

/*// task 8
// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arrayOfNumbers (arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    console.log('sum = ' + sum);
    return sum;
}
let arr1 = [25,26,27,41,15,25,100,58,69]
let sum = arrayOfNumbers(arr1);
console.log('sum = ' + sum);*/

/*// task 9
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/!*function arrayOfNumbers (arr) {
    let average = 0;
    let sum = arr.reduce((a,b) => a+b,0);
    average = sum / arr.length;
    console.log('average = ' + average);
    return average;
}
let arr1 = [25,26,27,41,15,25,100,58,69]
let average = arrayOfNumbers(arr1);
console.log('average = ' + average);*!/

/!*!// alternative
function arrayOfNumbers (arr) {
    let average = 0;
    let sum = 0
    for (let element of arr) {
        sum+= element;
        average = sum / arr.length
    }
    console.log('average = ' + average);
    return average;
}
let arr1 = [25,26,27,41,15,25,100,58,69]
let average = arrayOfNumbers(arr1);
console.log('average = ' + average);*!/*/

/*// task 10
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arr1 = [
    {name:'Lviv', populatin:853000, country:'Ukraine', region: 'West'},
    {name:'Amsterdam', populatin:2400000, country:'Netherlands', region: 'North-West'},
    {name:'Pragua', populatin:5400000, country:'Czech', region: 'East'},
    {name:'Kherson', populatin:358000, country:'Ukraine', region: 'South'},
    {name:'Kiev', populatin:1300000, country:'Ukraine', region: 'North-Center'},
    {name:'Kharkiv', populatin:1100000, country:'Ukraine', region: 'North-East'},
    {name:'New York', populatin:8836817, country:'USA', region: 'South-East'},
    {name:'Chicago', populatin:2706000, country:'USA', region: 'Center-West'},
    {name:'San-Francisco', populatin:853543, country:'USA', region: 'South-West'},
    {name:'Berlin', populatin:6177513, country:'Germany', region: 'Center'},

];

function arrOfObjects (arr) {
    let count = 0;
    for (let arrElement of arr) {
        if (typeof arrElement === 'object' && !Array.isArray(arrElement)){
            count++;
        }


            }
    console.log(count);
    return count;

}
arrOfObjects(arr1);*/

/*//task 11
//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
let arr1 = [
    {name:'Lviv', populatin:853000, country:'Ukraine', region: 'West'},
    {name:'Amsterdam', populatin:2400000, country:'Netherlands', region: 'North-West'},
    {name:'Pragua', populatin:5400000, country:'Czech', region: 'East'},
    {name:'Kherson', populatin:358000, country:'Ukraine', region: 'South'},
    {name:'Kiev', populatin:1300000, country:'Ukraine', region: 'North-Center'},
    {name:'Kharkiv', populatin:1100000, country:'Ukraine', region: 'North-East'},
    {name:'New York', populatin:8836817, country:'USA', region: 'South-East'},
    {name:'Chicago', populatin:2706000, country:'USA', region: 'Center-West'},
    {name:'San-Francisco', populatin:853543, country:'USA', region: 'South-West'},
    {name:'Berlin', populatin:6177513, country:'Germany', region: 'Center'}
];

function arrOfObjects (arr) {
    let count = 0 ;

    for (let arrElement of arr) {
        if (typeof arrElement === 'object' && !Array.isArray(arrElement)) {
            for (let key in arrElement) {

                count++;
            }
        }


    }
    console.log(count);
    return count;


}
arrOfObjects(arr1);*/

/*// task 12
// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let arr1 = [2, 5, 6, 8, 9, 15, 14];
let arr2 = [8, 2, 16, 28, 69, 74, 4];


function countOfArrayElements (arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);
        
    }
    console.log(arr3);
    return arr3;
}

countOfArrayElements(arr1,arr2);*/

/*// task 13
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let arr = [1, 2, 3, 4, 5];
function change (arr, index) {
    if (index < arr.length-1) {
    let indexArr = arr[index];
    arr[index] = arr[index + 1];
    arr[index +1] = indexArr;
    }
    console.log(arr);
    return arr;
}

change(arr,3);*/

/*// task 14
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let array = [1, 2, 0, 6, 8, 0, 6, 7]
function zeroOperation (arr) {
    let zero = [];
    let number = [];
    for (let arrElement of arr) {
        if (arrElement === 0) {
            zero.push(0)
        } else {
            number.push(arrElement)
        }

    }
    console.log(number.concat(zero));
    return number.concat(zero)

}

zeroOperation(array);*/

/*// task 15
// - Додає в боді блок з текстом "Hello owu"
function addDiv () {
    let div = document.createElement('div');

    div.innerHTML = 'Hello owu';
    document.body.appendChild(div);

    return div;

}

addDiv();*/

/*// task 16
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addElement (element, text) {
    let Element = document.createElement(`${element}`);
    Element.innerHTML = text
    document.body.appendChild(Element);

    return element;


}

addElement('p', 'hi bitch')*/

// task 17
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {
        model: 'Doodge Challanger SRT V8',
        year_of_release: 2015,
        power: '527 h.f.'
    },
    {
        model: ' Ford Mustang GT Performance',
        year_of_release: 2015,
        power: '493 h.f.'
    },
    {
        model: 'Toyota RAV4',
        year_of_release: 2019,
        power: '326 h.f.'
    },
    {
        model: 'BMW X5 M-competition',
        year_of_release: 2020,
        power: '552 h.f.'
    },
    {
        model: 'Mercedece_Benz GLE 420d',
        year_of_release: 2018,
        power: '482 h.f.'
    },
    {
        model: 'Pontiac Pontiac GTO Judge',
        year_of_release: 1969,
        power: '593 h.f.'
    },
    {
        model: 'Mazda CX-5 SKYACTIVE',
        year_of_release: 2018,
        power: '328 h.f.'
    },
    {
        model: ' Koenigsegg One:1',
        year_of_release: 2014,
        power: '1360 h.f'
    },
    {
        model: 'Buick GSX',
        year_of_release: 1970,
        power: '350 h.f'
    },
    {
        model: 'Audi A7 Perfomance',
        year_of_release: 2019,
        power: '420 h.f'
    }
];

function getCar (carArray, iden ) {
    let element = document.createElement(`${iden}`);
    for (let carArrayElement of carArray) {
        console.log(carArrayElement)
        element.innerHTML = `${carArrayElement.model}`;
        document.body.appendChild(element);
    }

}

getCar(cars,'div')