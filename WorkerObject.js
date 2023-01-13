class WorkerObject {
    constructor(matches, index) {
        this.index = index;
        this.matches = matches;
        this.name = this.matches.groups['name'];
        this.surname = this.matches.groups['surname'] === undefined ? 'none' : this.matches.groups['surname'];;
        this.salary = +this.matches.groups['salary'];
        this.currency = this.matches.groups['currency'];
        this.pets = this.matches.groups['pets'].split(' ');
        this.fire = false;
        this.conditionToFire = '';
        this.blackList = false;
        this.HTMLElem = this.createHTMLElem();
    }
    createHTMLElem() {
        let wrap = document.createElement('div');
        let workerName = document.createElement('h5');
        workerName.textContent = `Name: ${this.name}`;
        let workerSurname = document.createElement('h5');
        workerSurname.textContent = `Surname: ${this.surname}`;
        let WorkerSalary = document.createElement('div');
        WorkerSalary.textContent = `Salary: ${this.salary} ${this.currency}`
        let WorkerPet = document.createElement('div');
        WorkerPet.textContent = `Pet: ${this.pets}`
        wrap.classList.add(`worker_${this.index}`, 'workers');

        wrap.append(workerName);
        wrap.append(workerSurname);
        wrap.append(WorkerSalary);
        wrap.append(WorkerPet);
        wrap.append(document.createElement('hr'));
        return wrap;
    }
}