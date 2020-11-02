/*
// Task 1
//-- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let Dog = {
    name: 'Richi',
    age: 7 ,
    breed: 'spitz',
    weight: '10 kg',
    length: '32 cm'

}

let Human = {
    name: 'John',
    age: 18,
    status: true,
    company: 'Okten',
    position: 'front-end developer'
}

let Car = {
    brand: 'Ford',
    model: 'Mustang GT',
    yearOfIssue: 2015,
    engineCapacity: '3.6 liters',
    manufactureCountry: 'USA'
}

let Apartment = {
    square: '82 m.sq.',
    district: 'Frankivskiy',
    yearOfConstruction: 2011,
    address: 'Sakharova st., 25, Lviv',
    owner: 'Victor'
}

let Book = {
    name: 'Harry Potter & Prisoner of Azkaban',
    author: 'J.K. Rowling',
    releseYear: 1999,
    prizes: {
        first: 'Booklist 1999 ',
        second: 'FCGB',
        third: 'Whitbread 1999 ',
        fourth: 'Locus'
    },
    sales: 3377906
}*/

/*// Task 2
//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let Dogs = [
    {name:'Richi', breed:'spitz'},
    {name:'Arna',  breed:'german shepherd'},
    {name:'Jack', breed:'bulldog'},
    {name:'Archi', breed:'spaniel'},
    {name:'Rika', breed:'husky'}
]
console.log(Dogs);

let People = [
    {name:'Victor', status: true},
    {name:'Linda', status: false},
    {name:'Ihor', status: true},
    {name:'Kyrylo', status: true},
    {name:'Samuel', status: false}
]
console.log(People);

let Cars = [
    {brand:'Ford', model:'Mustang GT'},
    {brand:'Mercedes-Benz', model:'CLA 330d'},
    {brand:'Lamborghini', model:'Huracan LB724'},
    {brand:'Toyota', model:'RAV4'},
    {brand:'Mazda', model:'CX-5'}
]
console.log(Cars);

let Books = [
    {name:'Harry Potter & Prisoner of Azkaban', author:'J.K. Rowling'},
    {name:'Triumphal Arch', author:'E.M. Remark'},
    {name:'The Iron Heel', author:'Jack London'},
    {name:'Anna Karenina', author:'Lev Tolstoy'},
    {name:'The Picture if Dorian Gray', author:'Oscar Wilde'}
]
console.log(Books);*/

/*
// Task 3
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let House = {
    square: '182 m.sq.',
    numberOfRooms: {
        bedroom: 2,
        bathroom: 2,
        livingroom: 2,
        kitchen: 1,
        library: 1,
        secretRoom: 1
    },
    yearOfConstruction: 2019,
    address: 'Sakharova st., 25, Lviv',
    tenants: ['Victor', 'Maryia', 'Anastasiya','Mark']
}

let driver = {
    name: 'Mike',
    age: 22,
    experiance: '4 years',
    openCategories: ['a', 'a1', 'b', 'be', 'c','c1'],
    personalCars:{
        brand: 'Ford',
        model: 'Mustang GT',
        yearOfIssue: 2015,
        engineCapacity: '3.6 liters',
        manufactureCountry: 'USA'
    }
}

let toy = {
    name: 'Transformer - Optimus Prime',
    manufacturerCompany: 'Hasbro',
    countryOfManufacturer: ['China', 'USA', 'Vietnam'],
    numberOfModel: 15780000,
    function:{
        voice:true,
        bend:true,
        flies: false
    }
}

let Table = {
    model: 'Signal Astro',
    proportions: '110х70х76 сm,' ,
    material: 'oak-tree',
    productFeatures: ['modern ergonomic design', 'sturdy tabletop', 'solid metal frame'],
    characteristic:{
        shape: 'rectangular',
        width: 1100 + 'mm',
        height: 760 + 'mm',
        color: 'sonoma oak'

    }
}

let bag = {
    brand: 'Gucci',
    model: '636706 HUHHG 8565',
    madeIn: 'Italy',
    material: [
        'Eco-friendly GG Supreme textiles in beige and ebony, brown leather trim',
        'Red Green Web Ribbon',
        'Gold-colored hardware',
        'Microfibre lining with suede finish, leather pocket lining'
    ],
    price:{
        inItaly: 1985 + '€',
        inUSA: 2100 + '€',
        inUkraine: 2290 + '€'
    }
}
*/

/*// Task 4
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

////- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
/!*
// andrey
//- статус Андрія
for (let user of users) {
    // console.log(user)
    for (let userKey in user) {
        if (user.name ==='andrey'){
            console.log('user-status: '+ user.status);
        }
    }
}*!/

/!*!// max
//- статус Максима
for (let user of users) {
    // console.log(user)
    for (let userKey in user) {
        if (user.name ==='max'){
            console.log('user-status: '+ user.status);
        }
    }
}*!/

/!*!// last-1
//- ім'я передостаннього об'єкту
for (let i = 0; i < users.length; i++) {
    let user = users[users.length-2];
    console.log(user.name)

}*!/

/!*!// third-name
//- ім'я третього об'єкта
for (let i = 0; i < users.length; i++) {
    let user = users[2];
    console.log(user.name)

}*!/

/!*!// age Oleg
//- вік Олега
for (let user of users) {
    for (let userKey in user) {
        if (user.name ==='oleg'){
            console.log('user-age: '+ user.age);
        }
    }
}*!/

/!*!// age olya
//- вік Олі
for (let user of users) {
    // console.log(user)
    for (let userKey in user) {
        if (user.name ==='olya'){
            console.log('user-age: '+ user.age);
        }
    }
}*!/

/!*!// age + name fifth
//- вік + ім'я 5го об'єкта
for (let i = 0; i < users.length; i++) {
    let user = users[4];
    console.log(user.name + ' ' + user.age)

}*!/

// age + status ann
//- вік + сатус Анни
for (let user of users) {
    for (let userKey in user) {
        if (user.name === 'anya') {
            console.log(user.age + ' ' + user.status);
        }
    }
}*/
