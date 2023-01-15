<button class="controlButton showAll">Show all workers</button>
const workersPars = [];

document.querySelector('.showAll').addEventListener('click', () => {
    workersPars.forEach(item => {
        container.append(item['HTMLElem']);
    });
})