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

setTimeout(
    function () {

        board.classList.add('board-hide');


    }



    , 10000);


setTimeout(
    function () {
        let numeriIndovinati = [];
        for (let i = 0; i < 5; i++) {
            let j = i + 1;
            arrayUser[i] = Number(prompt("inserisci il numero" + ' ' + j ));

        }

        console.log(arrayUser)

        let count = 0;
        for (let i = 0; i <= arrayNumber.length - 1; i++) {

            if (arrayNumber[i] === arrayUser[i]) {
                count++;
                numeriIndovinati[i] = arrayNumber[i];
                
                
            }
        
        }

        if (count === 1) {
            console.log('hai indovinato' + ' ' + count + ' ' + 'numero');
            console.log('Hai indovinato' + ' ' + numeriIndovinati);

        }
        else if (count > 1) {
            console.log('hai indovinato' + ' ' + count + ' ' + 'numeri');
            console.log('Hai indovinato' + ' ' + numeriIndovinati);

        }

        else {

            console.log('non ne hai indovinato nessuno')
        }

    }
    , 10100)