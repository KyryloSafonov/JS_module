/*// task 1
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let human = {
    name: 'Victor',
    age: 25,
    status: true
}

let dog = {
    breed: 'spitz',
    height: '25 cm',
    width: '45 cm'
}

let book = {
    author: 'J.K. Rowling',
    sales: 377658,
    films: true
}

let city = {
    country: 'Ukraine',
    river: true,
    population: 853000
}

let hostel = {
    address: 'Lukasha 4 st.,Lviv city ',
    comendant: true,
    number_of_floors: 5,
    numbers_of_rooms: 55
}*/

/*// task 2
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let car = {
    brand: 'Ford',
    year_of_issue: 2015,
    manufacturer_country: [
        'USA',
        'Germany',
        'Japan'
    ],
    variety_of_model:{
        model1: 'Mustang GT stage1',
        model2: 'Mustang GT stage2',
        model3: 'Mustang GT stage3',
        model4: 'Mustang GT Performans'

    }

}

let bolt = {
    length: '25 cm',
    owner: [
        'Kyrylo',
        'Victor',
        'Jone Since'
    ],
    characteristic: {
        length: 25,
        width: 3,
        circumcised: true
    }
}

let night_clubs = {
    city: 'Lviv',
    number: 52,
    top_clubs: [
        'Malevich',
        'FESTRepulic',
        'Panorama',
        'Opera Passage'
    ],
    top_three_striptease:{
        first: 'Rafinad',
        second: 'Eros',
        third: 'White Rabbit'
    }
}

let best_friends = {
    boy: true,
    girl: 2,
    call_on_birthday: [
        'Kyrylo',
        'Max',
        'Herman',
        'Olya',
        'Ihor',
        'Ann'
    ],
    hobbi:{
        hobbi1: 'drinking',
        hobbi2: 'look at women`s asses',
        hobbi3: 'evaluating women`s asses',
        hobbi4: 'sitting satisfied'
    }
}

let parfum = {
    brad_of_parfum: 'Cristian Dior',
    alcohol: true,
    made_in: [
        'Italy',
        'Turkey',
        'USA',
        'China'
    ],
    smell_notes: {
        stage1: 'citrus',
        stage2: 'forest-tree'
    }


}*/

/*
// task 3
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (let humanKey in human) {
    console.log(humanKey);
};
console.log('____________');
for (let dogKey in dog) {
    console.log(dogKey);
};
console.log('____________');
for (let bookKey in book) {
    console.log(bookKey);
};
console.log('____________');
for (let cityKey in city) {
    console.log(cityKey);
};
console.log('____________');
for (let hostelKey in hostel) {
    console.log(hostelKey);
};
console.log('____________');
for (let carKey in car) {
    console.log(carKey);
};
console.log('____________');
for (let boltKey in bolt) {
    console.log(boltKey);
};
console.log('____________');
for (let nightClubsKey in night_clubs) {
    console.log(nightClubsKey);
};
console.log('____________');
for (let bestFriendsKey in best_friends) {
    console.log(bestFriendsKey);
};
console.log('____________');
for (let parfumKey in parfum) {
    console.log(parfumKey);
}
*/

/*
// task 4
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(human));
console.log(Object.keys(dog));
console.log(Object.keys(book));
console.log(Object.keys(city));
console.log(Object.keys(hostel));
console.log(Object.keys(car));
console.log(Object.keys(bolt));
console.log(Object.keys(night_clubs));
console.log(Object.keys(best_friends));
console.log(Object.keys(parfum));
*/

/*// task 5
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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
];*/

/*// task 6
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let citites = [
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
];*/

/*// task 7
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [
    {
        model: 'Huyndai Tucson',
        year_of_release: 2018,
        power: '342 h.f.',
        color: 'white',
        driver:{name:'Victor', age:24, sex: 'men', experience:'3 years'}
    },
    {
        model: 'Audi A7',
        year_of_release: 2018,
        power: '382 h.f.',
        color: 'grey',
        driver:{name:'Sergei', age:28, sex: 'men', experience:'8 years'}
    },
    {
        model: 'BMW i528',
        year_of_release: 2015,
        power: '350 h.f.',
        color: 'black',
        driver:{name:'Victoriya', age:26, sex: 'woman', experience:'5 years'}
    },
    {
        model: 'Toyota RAV4',
        year_of_release: 2012,
        power: '361 h.f.',
        color: 'white',
        driver:{name:'Ann', age:42, sex: 'woman', experience:'2 years'}
    },
    {
        model: 'Mercedece-Benz G 63 AMG 6x6',
        year_of_release: 2018,
        power: '562 h.f.',
        color: 'black',
        driver:{name:'Albert', age:31, sex: 'men', experience:'12 years'}
    },
    {
        model: 'KIA Sportage',
        year_of_release: 2018,
        power: '249 h.f.',
        color: 'darkgrey',
        driver:{name:'Sasha', age:38, sex: 'men', experience:'8 years'}
    },
    {
        model: 'Ford Mustang GT Performance',
        year_of_release: 2016,
        power: '443 h.f.',
        color: 'white',
        driver:{name:'Kyrylo', age:20, sex: 'men', experience:'2 years'}
    },
    {
        model: 'Audi A5 Perfomance',
        year_of_release: 2020,
        power: '458 h.f.',
        color: 'lightgrey',
        driver:{name:'Olga', age:22, sex: 'woman', experience:'2 years'}
    },
    {
        model: 'Chevrolet Camaro SS',
        year_of_release: 2016,
        power: '452 h.f.',
        color: 'yellow',
        driver:{name:'Kyrylo', age:22, sex: 'men', experience:'4 years'}
    },
    {
        model: 'Audi TT RS ',
        year_of_release: 2020,
        power: '398 h.f.',
        color: 'white',
        driver:{name:'Kate', age:24, sex: 'woman', experience:'3 years'}
    }
];*/

/*// task 8
//проитерировать каждый массив из задания 5,6,7 при помощи while.
/!*let i = 0;
while (i<cars.length){
    console.log(cars[i]);
    i++;
}*!/
/!*let i =0;
while (i<citites.length){
    console.log(citites[i]);
    i++;
}*!/
let i =0;
while(i<cars2.length){
    console.log(cars2[i]);
    i++;
}*/

/*// task 9
// проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
};
console.log('___________');
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
};
console.log('___________');
for (let i = 0; i < citites.length; i++) {
    console.log(citites[i]);
};*/

/*// task 10
//проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (let car of cars) {
    console.log(car);
};
console.log('_________________________________');
for (let city of citites) {
    console.log(city);
};
console.log('_________________________________');
for (let cars2Element of cars2) {
    console.log(cars2Element);
}*/

/*// task 11
// - взять объекты из задания 1 и превратить каждый в json.
let humanJSON = JSON.stringify(human);
console.log(humanJSON);
let dogJSON = JSON.stringify(dog);
console.log(dogJSON);
let bookJSON = JSON.stringify(book);
console.log(bookJSON);
let cityJSON = JSON.stringify(city);
console.log(cityJSON);
let hostelJSON = JSON.stringify(hostel);
console.log(hostelJSON);*/

/*
// task 12
// взять json из задания 11 и превратить их обратно в объекты.
humanJSON = JSON.parse(humanJSON);
console.log(humanJSON);
dogJSON = JSON.parse(dogJSON);
console.log(dogJSON);
bookJSON = JSON.parse(bookJSON);
console.log(bookJSON);
cityJSON = JSON.parse(cityJSON);
console.log(cityJSON);
hostelJSON = JSON.parse(hostelJSON);
console.log(hostelJSON);
*/

/*// task 13
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let car of cars) {
    let carJSON = JSON.stringify(car);
    console.log(carJSON);
}*/

/*// task 14
// взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let city of citites) {
    let cityJSON = JSON.stringify(city);
    console.log(cityJSON);
}*/

/*// task 15
// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
for (let cars2Element of cars2) {
    let cars2ElementJSON = JSON.stringify(cars2Element);
    //console.log(cars2ElementJSON);
    let cars3  = cars2ElementJSON;
    cars3 = JSON.parse(cars3);
    console.log(cars3);
}*/

/*// task 16
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
    {name: 'Sasha', age: 25, status: true, skills:['java', 'js']},
    {name: 'Arthur', age: 18, status: false, skills:['java', 'react', 'node.js']},
    {name: 'Sasha', age: 25, status: true, skills:['java', 'phyton','c#']},
    {name: 'Sasha', age: 25, status: true, skills:['rube', 'js','wordpress','html/css']}
]
for (let user of users) {
    console.log(user);
    for (let skills of user.skills) {
        console.log(skills);
    }
}*/

/*
// task 17
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
let usersSkills =[];
let users = [
    {name: 'Sasha', age: 25, status: true, skills:['java', 'js']},
    {name: 'Arthur', age: 18, status: false, skills:['java', 'react', 'node.js']},
    {name: 'Sasha', age: 25, status: true, skills:['java', 'phyton','c#']},
    {name: 'Sasha', age: 25, status: true, skills:['rube', 'js','wordpress','html/css']}
]
for (let user of users) {
    for (let skills of user.skills) {
       //console.log(skills);
        usersSkills.push(skills);
        console.log(usersSkills);
    }
}
*/

/*// task 18
//За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
for (let user of users) {
    console.log(user);
    for (let skills of user.skills) {
        console.log(skills);
    }
}*/

/*// Array users
let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}
];*/

/*// task 19
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let userAddress = [];
for (let user of users) {
    //console.log(user);
    userAddress.push(user.address);
    console.log(userAddress);
}*/

/*// task 20
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (let user of users) {
    let div = document.createElement("div");
    let address = '';
    for (let address1 in user.address) {
        address = address + ' ' + user.address[address1];
    }
    div.innerHTML = `<p>${user.name} ${user.age} ${user.status} ${address}</p>`;
    document.body.appendChild(div);
}*/

/*// task 21
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let user of users) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let address = '';
    for (let address1 in user.address) {
        address = address + ' ' + user.address[address1];
    };
    div1.innerHTML = user.name;
    div2.innerHTML = user.age;
    div3.innerHTML = user.status;
    div4.innerHTML = address;
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
}*/

/*// task 22
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let user of users) {

    let div = document.createElement("div");
    let name = document.createElement("h3");
    let age = document.createElement("p");
    let status = document.createElement("p");
    let address = document.createElement("div");


    for (let address1 in user.address) {
        let item = document.createElement("div");
        item.innerHTML  = user.address[address1];
        address.appendChild(item);
    };

    name.innerText = user.name;
    age.innerText = user.age;
    status.innerText = user.status;

    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(status);
    div.appendChild(address);
    document.body.appendChild(div);
}*/

/*// task 23
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

for (const user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
}
console.log(usersWithId); */

/*
// task 24
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let elementById= document.getElementById('content');
// let innerText = elementById.innerText;
// console.log(innerText);

// let elementByClass= document.getElementsByClassName('rules');
// for (let element of elementByClass) {
//     console.log(element);
// }

// let elementByTag = document.getElementsByTagName('div');
// for (let element of elementByTag) {
//     console.log(element);
// }
*/

/*// task 25
// - змінити цей текст використовуючи селектори id, class,  tag
// let elementById= document.getElementById('content');
// elementById.innerText = 'Happy Holidays, BITCH!'
// let innerText = elementById.innerText;
// console.log(innerText);

// let elementByClass= document.getElementsByClassName('rules');
// for (let element of elementByClass) {
//     element.innerText = 'Happy Holidays, BITCH!'
//     console.log(element);
// }

// let elementByTag = document.getElementsByTagName('div');
// for (let element of elementByTag) {
//     element.innerText = 'Happy Holidays, BITCH'
//     element = element.innerText.toUpperCase();
//     console.log(element);
// }*/

/*// task 26
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
let elementById = document.getElementById('content');
elementById.style.width = '400px';
elementById.style.height = '400px';
elementById.style.backgroundColor = 'red';

let elementByClass = document.getElementsByClassName('rules');
for (let element of elementByClass) {
    element.style.height = '600px';
    element.style.width = '150px';
    element.style.backgroundColor = 'blue';
}


let elementByTag = document.getElementsByTagName('h2');
for (let element of elementByTag) {
    element.style.width = '400px';
    element.style.height = '250px' ;
    element.style.color = 'white';
    element.style.backgroundColor = 'black';
}*/

/*// task 27
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let table = document.createElement('table');
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table.appendChild(tr);

document.body.appendChild(table);*/

/*// task 28
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let table = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
       let td =  document.createElement('td') ;
       tr.appendChild(td);

    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/

/*// task 29
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let table = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td =  document.createElement('td') ;
        tr.appendChild(td);

    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/

/*
// task 30
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let n = prompt('write numbers of tr');
let m = prompt('write numbers of td');
let table = document.createElement('table');
for (let i = 0; i < n; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < m; j++) {
        let td =  document.createElement('td') ;
        tr.appendChild(td);

    }
    table.appendChild(tr);
}
document.body.appendChild(table);
*/





