const workersList = () => {
    return (
        [
            'Name: Corbin, salary: 363€, pets: dog dog',
            'Name: Lilu Lom, salary: 226$, pets: hamster',
            'Name: Markus Perker, salary: 439₽, pets: parrot',
            'Name: MultiPasport Perker, salary: 281£, pets: none',
            'Name: Samon Dalas, salary: 503€, pets: hamster parrot',
            'Name: Samon Manson, salary: 501€, pets: cat',
            'Name: Pastila Cree, salary: 440£, pets: cat cat',
            'Name: Pit, salary: 420€, pets: none',
            'Name: Franclin Manson, salary: 325£, pets: parrot dog',
            'Name: Pastila, salary: 345$, pets: dog',
            'Name: Margara Lom, salary: 579₽, pets: none',
            'Name: Lilu Manson, salary: 524₽, pets: none',
            'Name: Sandra Manson, salary: 237₽, pets: none',
            'Name: Margara, salary: 463₽, pets: dog hamster',
            'Name: Markus, salary: 168£, pets: dog',
            'Name: Margara Manson, salary: 250€, pets: none',
            'Name: Alex Dalas, salary: 510$, pets: hamster',
            'Name: Samon, salary: 265€, pets: cat',
            'Name: Nicol Dalas, salary: 142£, pets: hamster',
            'Name: Zuhra Dalas, salary: 553$, pets: hamster'
        ]
    );
}

const workersPars = [];
let blackListArr = [];
const once = {
    once: true
};

function setBlackListItem(params) {
    if (!blackListArr.includes(params)) {
        blackListArr.push(params);
    }
}
function checkBlackListItem(params) {
    console.log(blackListArr);
    return blackListArr.includes(params);
}

const regExp = new RegExp(/[a-zA-Z]+:\s(?<name>[A-Z]\w+)\s?(?<surname>[A-Z]\w+)?,.+salary.+?(?<salary>\d+)(?<currency>[£€₽$]).+?pets:\s(?<pets>\w+\b\s?(\w+)?)/i);


//модуль преобразовывания массива данных рабочих в массив объектов с данными рабочих
function createWorkerObjects(params) {
    params.forEach((item, index) => {
        let matches = item.match(regExp);
        let newObj = new WorkerObject(matches, index);
        workersPars.push(newObj);
    });
}

document.querySelector('.parsAll').addEventListener('click', (event) => {
    event.target.disabled = true;
    createWorkerObjects(workersList());

}, once);
// **************************************


// модуль рисования плиток
document.querySelector('.showAll').addEventListener('click', () => {
    workersPars.forEach(item => {
        container.append(item['HTMLElem']);
    });
})

// модуль составления черного списка

document.querySelector('.makeBlackList').addEventListener('click', makeBlackList, once);
function makeBlackList(event) {
    blackListArr = [];
    event.target.disabled = true;
    for (let i = 0; i < 3; i += 1) {
        let roulette = Math.floor(Math.random() * workersPars.length);
        if (workersPars[roulette].surname) {
            setBlackListItem(workersPars[roulette]);
        }
    }
    blackListArr.forEach(item => renderBlackListItem(item));
}
// модуль рисования черного списка
function renderBlackListItem(item) {
    let nextItem = document.createElement('li');
    nextItem.classList.add('list-group-item');
    nextItem.textContent = item;
    blackList.append(nextItem);
    // workersPars.forEach(item =>item['conditionToFire'].push('blackList'));
}

// blackList v2
function setBlackListItem(item) {
    if (!blackListArr.includes(item['surname'])) {
        blackListArr.push(item['surname']);
    }
}

function checkBlackListItem(params) {
    return blackListArr.includes(params);
}
// ****************


// модуль добавления условий увольнения

conditions.addEventListener('click', (event) => {
    event.preventDefault();
    // parentNode
    switch (event.target.value) {
        case 'blackList':
            event.target.selected ? addBlackListCondition(workersPars) : removeBlackListCondition(workersPars);
            event.target.disabled = true;
            fire.disabled = false;
            break;
        case 'humster':
            event.target.selected ? addHamsterCondition(workersPars) : removeHamsterCondition(workersPars);
            event.target.disabled = true;
            fire.disabled = false;
            break;
        case 'currency':
            event.target.selected ? addCurrencyCondition(workersPars) : removeCurrencyCondition(workersPars);
            event.target.disabled = true;
            fire.disabled = false;
            break;
    }
});
// blackList
function addBlackListCondition(list) {
    list.forEach(item => {
        blackListArr.includes(item['surname']) ? item['conditionToFire'].push('blackList') : true;
        if (blackListArr.includes(item['surname'])) {
            item['HTMLElem'].classList.remove('text-bg-light');
            item['HTMLElem'].classList.add('text-bg-warning');
        }
    });
}
function removeBlackListCondition(list) {
    list.forEach(item => {
        if (item['conditionToFire'].includes('blackList')) {
            item['HTMLElem'].classList.add('text-bg-light');
            item['HTMLElem'].classList.remove('text-bg-warning');
        }
    });
}
//**************** */

// hamster
function addHamsterCondition(list) {
    list.forEach(item => {
        item['pets'].includes('hamster') ? item['conditionToFire'].push('hamster') : true;
        if (item['conditionToFire'].includes('hamster')) {
            item['HTMLElem'].classList.remove('text-bg-light');
            item['HTMLElem'].classList.add('text-bg-warning');
        }
    });
}
function removeHamsterCondition(list) {
    list.forEach(item => {
        if (item['conditionToFire'].includes('hamster')) {
            item['HTMLElem'].classList.add('text-bg-light');
            item['HTMLElem'].classList.remove('text-bg-warning');
        }
    });
}

//**************** */
// currency
function addCurrencyCondition(list) {
    list.forEach(item => {
        if (item['currency'] === "£" || item['currency'] === "€") {
            !item['conditionToFire'].includes('currency') ? item['conditionToFire'].push('currency') : true;
            item['HTMLElem'].classList.remove('text-bg-light');
            item['HTMLElem'].classList.add('text-bg-warning');
        }
    });
}
function removeCurrencyCondition(list) {
    list.forEach(item => {
        if (item['conditionToFire'].includes('currency')) {
            item['HTMLElem'].classList.add('text-bg-light');
            item['HTMLElem'].classList.remove('text-bg-warning');
        }
    });
}
// ****************

// fire button
fire.addEventListener('click', () => {
    workersPars.forEach(item => {
        if (item['conditionToFire'].length > 0) {
            item['HTMLElem'].classList.toggle('text-bg-warning');
            item['HTMLElem'].classList.add('text-bg-danger');
            item.HTMLElem.style.userSelect = 'none';
            item.HTMLElem.children[1].append(addFired(item));
            conditions.disabled = true;
            fire.disabled = true;
        }
    });
});

function addFired(item) {
    let fireElem = document.createElement('p');
    fireElem.classList.add('fired', 'card-text');
    fireElem.textContent = item['conditionToFire'];
    return fireElem;
}

