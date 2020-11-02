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

// task 5
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
    Doodge = {
        model: 'Challanger SRT V8',
        year_of_release: 2015,
        power: '527 h.f.'
    },
    Ford = {
        model: 'Mustang GT Performance',
        year_of_release: 2015,
        power: '493 h.f.'
    },
    Toyota = {
        model: 'RAV4',
        year_of_release: 2019,
        power: '326 h.f.'
    },
    BMW = {
        model: 'X5 M-competition',
        year_of_release: 2020,
        power: '552 h.f.'
    },
    Mercedece_Benz = {
        model: 'GLE 420d',
        year_of_release: 2018,
        power: '482 h.f.'
    },
    Pontiac = {
        model: 'Pontiac GTO Judge',
        year_of_release: 1969,
        power: '593 h.f.'
    },
    Mazda = {
        model: 'CX-5 SKYACTIVE',
        year_of_release: 2018,
        power: '328 h.f.'
    },
    Koenigsegg = {
        model: 'One:1',
        year_of_release: 2014,
        power: '1360 h.f'
    }


]

