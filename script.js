
let workersList = ['Name: Corbin, salary: 363€, pets: dog dog', 'Name: Lilu Lom, salary: 226$, pets: hamster', 'Name: Markus Perker, salary: 439₽, pets: parrot', 'Name: MultiPasport Perker, salary: 281£, pets: none', 'Name: Samon Dalas, salary: 503€, pets: hamster parrot', 'Name: Samon Manson, salary: 501€, pets: cat', 'Name: Pastila Cree, salary: 440£, pets: cat cat', 'Name: Pit, salary: 420€, pets: none', 'Name: Franclin Manson, salary: 325£, pets: parrot dog', 'Name: Pastila, salary: 345$, pets: dog', 'Name: Margara Lom, salary: 579₽, pets: none', 'Name: Lilu Manson, salary: 524₽, pets: none', 'Name: Sandra Manson, salary: 237₽, pets: none', 'Name: Margara, salary: 463₽, pets: dog hamster', 'Name: Markus, salary: 168£, pets: dog', 'Name: Margara Manson, salary: 250€, pets: none', 'Name: Alex Dalas, salary: 510$, pets: hamster', 'Name: Samon, salary: 265€, pets: cat', 'Name: Nicol Dalas, salary: 142£, pets: hamster', 'Name: Zuhra Dalas, salary: 553$, pets: hamster'];
// console.log(workersList);
let obj = {};
// const regExp = new RegExp(/(?<name>:.+?[a-z]\b)/, 'i'); //.+(?<salary>alary:\s\d+)
const regExp = new RegExp(/Name..(?<name>.+?[a-z],).+salary.+?(?<salary>\d+)(?<currency>[£€₽$]).+?pets:\s(?<pets>\w+\b)/,'i');
// const regExp = '/(?<pets>:.[a-zA-Z]+\s\w+)/i';
const workersPars = [];

workersList.forEach(item => {
    let newObj = {}
    let matches = item.match(regExp);
    // console.log(matches);
    newObj.name = matches.groups['name'];
    newObj.salary = matches.groups['salary'];
    newObj.currency = matches.groups['currency'];
    newObj.pets = matches.groups['pets'];
    workersPars.push(newObj)
    // obj.salary = matches[1];
});
console.log(workersPars);




// function addToBody(obj, task) {
//     let wrap = document.createElement('div');
//     let workerName = document.createElement('h4');
//     wrap.append(header);
//     workerName.textContent = `exercise_${task - 1} =>`
//     wrap.classList.add(`wrap_${task}`);
//     for (let i = 0; i < obj['textarea']; i += 1) {
//         let elem = document.createElement('textarea');
//         elem.setAttribute('id', `textarea_${i}_${task}`);
//         wrap.append(elem)
//     }
//     for (let i = 0; i < obj['input']; i += 1) {
//         let elem = document.createElement('input');
//         elem.setAttribute('id', `input_${i}_${task}`);
//         wrap.append(elem)
//     }
//     for (let i = 0; i < obj['button']; i += 1) {
//         let elem = document.createElement('button');
//         elem.setAttribute('id', `button_${i}_${task}`);
//         elem.textContent = `button_${i}_${task}`
//         wrap.append(elem)
//     }
//     wrap.append(document.createElement('hr'));
//     container.append(wrap);
//     return wrap;
// }
