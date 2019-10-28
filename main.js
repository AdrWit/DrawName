const btn = document.querySelector("button");
const div = document.querySelector('div');

const names = ["Martynka", "Jagienka", "Aleksandra", "Bogusława", "Kazimiera", "Maria", "Jagoda"]


const nameGenerator = () => {
    const index = Math.floor(Math.random() * 7);
    div.textContent = `The best name is ${names[index]}`

}

btn.addEventListener('click', nameGenerator);