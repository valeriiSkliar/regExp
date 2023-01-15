'use strict'

let surname = ['Lom', 'Perker', 'Dalas', 'Manson', 'Cree'];
// // наполнение массива "surname" автоматически (совместим)
// surname = workersPars.reduce((accum, item) => {
//     if (!accum.includes(item.surname)) {
//         if (item.surname !== 'none') {
//             accum.push(item.surname);
//         }
//     }
//     return accum;
// }, []);
// ****************************
   // здесь бы генерил черный список через массив blackList.
let firedSurname1;
let firedSurname2;
let firedSurname3;
let fired = '';

function getRandomSurname() { //Получаем три рандомные фамилии на увольнение
    function rand() {
        return Math.floor(Math.random() * 5);
    }
    firedSurname1 = surname[rand()];
    firedSurname2 = surname[rand()];
    firedSurname3 = surname[rand()];
}

getRandomSurname();

let blackList = [firedSurname1, firedSurname2, firedSurname3, 'hamster', '€', '£']

function allFired() { //Функция выводит фамилии людей для увольнения в черный список, без лишних повторов фамилий, если срандомило одинаковые
    fired += firedSurname1;
    if (!(firedSurname1 === firedSurname2)) {
        fired = fired + ' ' + firedSurname2
    }
    if (!(firedSurname1 === firedSurname3)) {
        fired = fired + ' ' + firedSurname3
    }
    if (firedSurname2 === firedSurname3) {
        fired = fired.replace(firedSurname3, '')
    }
    if (firedSurname1 === firedSurname2 && firedSurname1 === firedSurname3 && firedSurname2 === firedSurname3) {
        fired = firedSurname1;
    }
    return fired;
}

let blackListSurname = 'Black List<br>Surname: ' + allFired() + ';<br>People who get paid in: €, £;<br> People with that pet: hamster.'
let count = 0;
let counter = 0
document.querySelector('.blackList').addEventListener('click', () => { //Реализация кнопки, что создает черный список
    counter = 1;
    let list;
    if (count === 0) {
        list = document.createElement('div');
        function create() {
            list.classList.add('list');
        }
        create();
        list.innerHTML = blackListSurname;
        list.classList.add('displayed');

        body.append(list);
        count = 1;
    }
    document.querySelector('.hide').addEventListener('click', () => { //Кнопка, что прячет черный список
        list.classList.add('nonDisplayed')
        count = 0;
    })
})
