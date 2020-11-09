/*// task 1
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

function TitleOfTag (Tag, action, attributes) {

    this.Tag = Tag || 'No Tag';
    this.action = action || 'No action';
    this.attributes = attributes || 'No attributes';

}

/!*!// Tag <a>
let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ' + '\n' +
    'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.' + '\n' +
    ' Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' + '\n' +
    'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.\n' +
    '\n' +
    'Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, ' + '\n' +
    'на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа ' + '\n' +
    '(URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. ' + '\n' +
    'Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от ' + '\n' +
    'имени сайта или веб-страницы, где прописана ссылка. ' + '\n' +
    'Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.'
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'}
];

let a = new TitleOfTag(title,action,attributes);
console.log(a);*!/

/!*
//Tag div
let title = '<div>';
let action  = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа' +
    ' с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не ' +
    'описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
    'добавить атрибут class или id с именем селектора.\n' +
    '\n' +
    'Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. ' +
    'После него также добавляется перенос строки.'
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}

];

let div = new TitleOfTag(title,action,attributes);
console.log(div);*!/

/!*!//Tag h1
let title = '<h1>';
let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции,' +
    ' расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег' +
    ' <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого ' +
    'уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги ' +
    '<h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются ' +
    'на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'}
];

let h1 = new TitleOfTag(title,action,attributes);
console.log(h1);*!/*/

/*// task 2
//  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
class TitleOfTag {
    constructor(titleOfTag, action, attributes) {
        this.titleOfTag = titleOfTag || 'no tag';
        this.action = action || 'No action';
        this.attributes = attributes || 'No attributes';
    }
}

/!*!// Tag <a>
let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ' + '\n' +
    'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.' + '\n' +
    ' Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' + '\n' +
    'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.\n' +
    '\n' +
    'Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, ' + '\n' +
    'на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа ' + '\n' +
    '(URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. ' + '\n' +
    'Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от ' + '\n' +
    'имени сайта или веб-страницы, где прописана ссылка. ' + '\n' +
    'Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.'
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'}
];

let a = new TitleOfTag(title,action,attributes);
console.log(a);*!/


/!*!//Tag div
let title = '<div>';
let action  = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа' +
    ' с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не ' +
    'описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
    'добавить атрибут class или id с именем селектора.\n' +
    '\n' +
    'Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. ' +
    'После него также добавляется перенос строки.'
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}

];

let div = new TitleOfTag(title,action,attributes);
console.log(div);*!/

/!*!//Tag h1
let title = '<h1>';
let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции,' +
    ' расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег' +
    ' <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого ' +
    'уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги ' +
    '<h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются ' +
    'на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'}
];

let h1 = new TitleOfTag(title,action,attributes);
console.log(h1);*!/*/

/*// task 3
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
    model: 'Ford Mustang GT Performance',
    year: 2016,
    maxSpeed: 260,
    volume: '3.6 l',
    driver: 'Kyrylo',
    drive: function drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
    info: function info () {
        console.log(`
        ${this.model}  
        ${this.year}  
        ${this.maxSpeed}  
        ${this.volume}  
        ${this.driver}`);
    },
    increaseMaxSpeed: function increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log('newMaxSpeed:' + this.maxSpeed);
    },
    changeYear: function changeYear (newValue) {
        this.year = newValue;
        console.log('newYear:' + this.year);
    },
    addDriver: function addDriver (driver) {
        this.driver = driver;
        console.log(this.driver);
    }

};

let drivers = {
    name: 'Safonov Kyrylo',
    age: 18,
    practice: '1 year'
}

car.info();
car.drive();
car.increaseMaxSpeed(100);
car.changeYear(2019);
car.addDriver(drivers);*/

/*// task 4
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Cars (model, manufactured, year_of_release, maxSpeed, volume) {

        this.model = model;
        this.manufactured =manufactured;
        this.year_of_release = year_of_release;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

        this.drive = function(){
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        }

        this.info = function() {
            console.log(`
        ${model}  
        ${manufactured}  
        ${year_of_release}  
        ${maxSpeed}  
        ${volume}`);

        }

        this.increaseMaxSpeed = function  (newSpeed) {

            maxSpeed += newSpeed;
            console.log('newMaxSpeed:' + maxSpeed);

        }

        this.changeYear = function  (newValue) {

            year_of_release = newValue;
            console.log('newYear:' + year_of_release);

        }

        this.addDriver = function  (driver) {
            console.log(driver);
        }



}


let  driver = {
    name: 'Kyrylo',
    age: 18,
    practice: '1 year'
};

let car = new Cars('Ford Mustang', 'Ford Corporation', 2016, 250, 3.0, driver, 50, 2020);
console.log(car);
car.info();
car.drive();
car.addDriver(driver);
car.changeYear(2018);
car.increaseMaxSpeed(50);*/

/*// task 5
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Cars {
    constructor(model, manufactured, year_of_release, maxSpeed, volume) {
        this.model = model;
        this.manufactured =manufactured;
        this.year_of_release = year_of_release;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

        this.drive = function(){
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        }

        this.info = function() {
            console.log(`
        ${model}  
        ${manufactured}  
        ${year_of_release}  
        ${maxSpeed}  
        ${volume}`);

        }

        this.increaseMaxSpeed = function  (newSpeed) {

            maxSpeed += newSpeed;
            console.log('newMaxSpeed:' + maxSpeed);

        }

        this.changeYear = function  (newValue) {

            year_of_release = newValue;
            console.log('newYear:' + year_of_release);

        }

        this.addDriver = function  (driver) {
            console.log(driver);
        }

    }
}

let  driver = {
    name: 'Kyrylo',
    age: 18,
    practice: '1 year'
};

let car = new Cars('Ford Mustang', 'Ford Corporation', 2016, 250, 3.0, driver, 50, 2020);
console.log(car);
car.info();
car.drive();
car.addDriver(driver);
car.changeYear(2018);
car.increaseMaxSpeed(50);*/

/*// task 6
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cindirella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Ira = new Cindirella('Ira', 25, 36);
let Masha = new Cindirella('Masha', 22, 37);
let Vika = new Cindirella('Vika', 18, 39);
let Lena = new Cindirella('Lena', 18, 35);
let Kate = new Cindirella('Kate', 17, 38);
let Olga = new Cindirella('Olga', 45, 42);
let Karina = new Cindirella('Karina', 23, 33);

let Cindirellas = [Ira, Masha, Vika, Lena, Kate, Olga, Karina];

class Prince {
    constructor(name, age, findShoos) {
        this.name = name;
        this.age = age;
        this.findShoos = findShoos;
    }
}

let prince = new Prince('Oleg', 25, 37)
for (let princess of Cindirellas) {
    if (princess.size === prince.findShoos){
        console.log(princess.name + ' is new Princess');
    }
}*/





