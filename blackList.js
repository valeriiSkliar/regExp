'use strict'

let surname = ['Lom', 'Perker', 'Dalas', 'Manson', 'Cree'];
let firedSurname1;
let firedSurname2;
let firedSurname3;

function getRandomSurname() {
    function rand() {
        return Math.floor(Math.random() * 5);
    }
    firedSurname1 = surname[rand()];
    firedSurname2 = surname[rand()];
    firedSurname3 = surname[rand()];
}

getRandomSurname();

let blackList = [firedSurname1, firedSurname2, firedSurname3, 'hamster', '€', '£']

for (let i = 0; i < workersPars.length; i += 1) {
    if (workersPars[i].surname === blackList[0] || workersPars[i].surname === blackList[1] || workersPars[i].surname === blackList[2]) {
        console.log(workersPars[i].surname)
    } else if (workersPars[i].curency === blackList[4] || workersPars[i].curency === blackList[4]) {
        console.log(workersPars[i].curency)
    } else if (/hamster/.test(workersPars[i].pets)) {
        console.log(workersPars[i].pets)
    }
};