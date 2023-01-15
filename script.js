'use strict'
let workersList = ['Name: Corbin, salary: 363€, pets: dog dog', 'Name: Lilu Lom, salary: 226$, pets: hamster', 'Name: Markus Perker, salary: 439₽, pets: parrot', 'Name: MultiPasport Perker, salary: 281£, pets: none', 'Name: Samon Dalas, salary: 503€, pets: hamster parrot', 'Name: Samon Manson, salary: 501€, pets: cat', 'Name: Pastila Cree, salary: 440£, pets: cat cat', 'Name: Pit, salary: 420€, pets: none', 'Name: Franclin Manson, salary: 325£, pets: parrot dog', 'Name: Pastila, salary: 345$, pets: dog', 'Name: Margara Lom, salary: 579₽, pets: none', 'Name: Lilu Manson, salary: 524₽, pets: none', 'Name: Sandra Manson, salary: 237₽, pets: none', 'Name: Margara, salary: 463₽, pets: dog hamster', 'Name: Markus, salary: 168£, pets: dog', 'Name: Margara Manson, salary: 250€, pets: none', 'Name: Alex Dalas, salary: 510$, pets: hamster', 'Name: Samon, salary: 265€, pets: cat', 'Name: Nicol Dalas, salary: 142£, pets: hamster', 'Name: Zuhra Dalas, salary: 553$, pets: hamster'];

const regExp = new RegExp(/Name..(?<name>.+?[a-z]),.+salary.+?(?<salary>\d+)(?<currency>[€$£₽]),.pets..(?<pets>.+[a-z])/, 'i');
const workersPars = [];

workersList.forEach((item, index) => {
    let matches = item.match(regExp);
    workersPars.push( new WorkerObject(matches, index))
});


//  МОДУЛЬ ОТРИСОВКИ ПЛИТОК
document.querySelector('.showAll').addEventListener('click', () => {
    workersPars.forEach(item => {
        container.append(item['HTMLElem']);
    });
})
// ************************

