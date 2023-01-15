class WorkerObject {
    constructor(matches, index) {
        this.index = index;
        this.matches = matches;
        this.name = this.matches.groups['name'];
        this.surname = this.matches.groups['surname'] === undefined ? null : this.matches.groups['surname'];;
        this.salary = +this.matches.groups['salary'];
        this.currency = this.matches.groups['currency'];
        this.pets = this.matches.groups['pets'].split(' ');
        this.conditionToFire = [];
        this.HTMLElem = this.createHTMLElem();
    }
    createHTMLElem() {
        let cardWrap = document.createElement('div');
        cardWrap.classList.add('card', 'text-bg-light', 'mb-3');
        cardWrap.style.maxWidth = '18rem';
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.style.whiteSpace = 'nowrap';
        cardHeader.textContent = `Name: ${this.name}`;;
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.surname ? `Surname: ${this.surname}` : `Surname: -`;

        let cardtextSalary = document.createElement('p');
        cardtextSalary.classList.add('card-text');
        cardtextSalary.textContent = `Salary: ${this.salary} ${this.currency}`
        let cardtextPet = document.createElement('p');
        cardtextPet.classList.add('card-text');
        cardtextPet.textContent = `Pet(s): ${this.pets}`
        
        cardBody.append(cardTitle);
        cardBody.append(cardtextSalary);
        cardBody.append(cardtextPet);

        cardWrap.append(cardHeader);
        cardWrap.append(cardBody);
        cardWrap.classList.add(`worker_${this.index}`, 'workers');

        // 
        // let wrap = document.createElement('div');
        // let workerName = document.createElement('h5');
        // workerName.textContent = `Name: ${this.name}`;
        // let workerSurname = document.createElement('h5');
        // workerSurname.textContent = this.surname ? `Surname: ${this.surname}` : `Surname: -`;
        // let WorkerSalary = document.createElement('div');
        // WorkerSalary.textContent = `Salary: ${this.salary} ${this.currency}`
        // let WorkerPet = document.createElement('div');
        // WorkerPet.textContent = `Pet: ${this.pets}`
        // wrap.classList.add(`worker_${this.index}`, 'workers');

        // wrap.append(workerName);
        // wrap.append(workerSurname);
        // wrap.append(WorkerSalary);
        // wrap.append(WorkerPet);
        // wrap.append(document.createElement('hr'));

        // 
        return cardWrap;
    }
}