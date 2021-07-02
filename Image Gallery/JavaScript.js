
const panels = document.querySelectorAll(`.panel`);
console.log(panels);
function helper() {
    this.classList.toggle('open');
}

panels.forEach(temp => temp.addEventListener('click', helper));