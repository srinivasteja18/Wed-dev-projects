
const data = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const arr=[]
fetch(data).then(cur => cur.json())
    .then(val => arr.push(...val));
//console.log(arr);
function findMatch(word,arr) {
    return arr.filter(cur => {
        const regex = new RegExp(word, 'gi');
        return cur.city.match(regex) || cur.state.match(regex);
    });
}

function displayMatch() {
    const cur = findMatch(this.value, arr);
    const text = cur.map(val => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = val.city.replace(regex, `<span class="back">${this.value}</span>`);
        const stateName = val.state.replace(regex, `<span class="back">${this.value}</span>`);
        return `
                <li><span class="name"> ${cityName}, ${stateName}</span></li>
            `
    }).join('');
    lists.innerHTML = text;
}

const inputs = document.querySelector('.search');
const lists = document.querySelector('.suggestions');

inputs.addEventListener('change', displayMatch);
inputs.addEventListener('keyup', displayMatch);