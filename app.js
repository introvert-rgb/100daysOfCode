let Btn = document.querySelector('.changeBtn');
let colorCode = document.querySelector('.colorcode');
let main = document.querySelector('.main');


function randomNum() {
    return Math.floor(Math.random() * 256);
}


function colorGenerator() {
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}
Btn.addEventListener('click', () => {

    let test = document.querySelector('#body').style.backgroundColor = colorGenerator();

    colorCode.textContent = test;

});