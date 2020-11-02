/*
// task 1
//Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_header = document.getElementById('main_header');
console.log(main_header);
main_header.style.color = 'pink';*/

/*
// task 2
//-- робить шириниу елементу ul 400 пікселів
let ul_element = document.getElementsByTagName('ul');
console.log(ul_element);
for (const ulElementElement of ul_element) {
    ulElementElement.style.width = '400px';
    ulElementElement.style.padding = '0'
    console.log(ulElementElement);
}
*/

/*// task 3
//-- робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
console.log(linkList);
for (let linkListElement of linkList) {
    linkListElement.style.width = '50%';
    console.log(linkListElement);
}*/

/*
// task 4
//-- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2);
for (let listElement2Element of listElement2) {
    console.log(listElement2Element.innerText);
}
*/

/*// task 5
//-- отримує всі елементи li та змінює ім колір фону на сірий
let li_element = document.getElementsByTagName('li');
console.log(li_element);
for (let liElementElement of li_element) {
    liElementElement.style.backgroundColor = 'grey';
}*/

/*
// task 6
//-- отримує всі елементи 'a' та додає їм клас anchor
let a_elements = document.getElementsByTagName('a');
console.log(a_elements);
for (let aElement of a_elements) {
    aElement.classList.add('anchor');
    console.log(aElement.classList);
}
*/

/*// task 7
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let a_elements = document.getElementsByTagName('a');
for (let aElement of a_elements) {
    if (aElement.innerText ==='link3'){
        aElement.style.fontSize = '40px'
    }
}*/

/*// task 8
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let a_elements = document.getElementsByTagName('a');
for (let aElement of a_elements) {
    aElement.classList.add('element_' + aElement.innerText);
    console.log(aElement);
}*/

/*// task 9
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header');
let color = prompt('write the color');
for (let subHeaderElement of sub_header) {
    subHeaderElement.style.backgroundColor = color;
}*/

// // task 10
// //-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub_header = document.getElementsByClassName('sub-header');
// let color = prompt('write color');
// for (let subHeaderElement of sub_header) {
//     if (subHeaderElement.innerText === 'content 2 segment'){
//         subHeaderElement.style.color = color;
//     }
// }

// // task 11
// //-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// let text = prompt('write your text');
// for (let content1Element of content_1) {
//     content1Element.innerText = text;
// }

/*
// task 12
//-- отримати елементи p та змінити їм paddin на довільне значення
let p_elements = document.getElementsByTagName('p');
for (let pElement of p_elements) {
    pElement.style.padding = '200px';
}
*/

/*// task 13
//-- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text_2 = document.getElementsByClassName('text2');
console.log(text_2);
text_2[0].innerText = 'Іди вчичи JS, бо дівчата давать не будуть!';*/



