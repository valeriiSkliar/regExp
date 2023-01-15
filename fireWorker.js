'use strict'

document.querySelector('.fire').addEventListener('click', () => { //Реализация кнопки увольнения людей
    if (counter > 0) {
        for (let i = 0; i < workersPars.length; i += 1) {
            if (workersPars[i].surname === blackList[0] || workersPars[i].surname === blackList[1] || workersPars[i].surname === blackList[2]) {
                let currElem = document.getElementsByClassName('worker_' + i)[0];
                currElem.style = 'color: red'
            }
            if (workersPars[i].currency === blackList[4] || workersPars[i].currency === blackList[5]) {
                let currElem = document.getElementsByClassName('worker_' + i)[0];
                currElem.style = 'color: red'
            }
            if (/hamster/.test(workersPars[i].pets)) {
                let currElem = document.getElementsByClassName('worker_' + i)[0];
                currElem.style = 'color: red'
            }
        }
    }
});
