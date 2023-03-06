'use script'







let arrayNumber = [];
let board = document.getElementById('board');
let arrayUser = [];
for (let i = 0; i < 5; i++) {


    let numeriRandom = Math.floor(Math.random() * 100);

    arrayNumber[i] = numeriRandom;
    const element = document.createElement('div');
    element.append(arrayNumber[i]);
    board.append(element);

}