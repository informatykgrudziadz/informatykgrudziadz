
Date.prototype.formatDate = function (format) {

    function addZero(variable, length) {
        var stringVriable = variable.toString(),
            actuallyVriable = '';

        for(var i = 0, max = length - stringVriable.length; i < max; i++) { actuallyVriable += '0'; }
        actuallyVriable += stringVriable;

        return actuallyVriable;
    }

    format = format.replace(/DD/g, addZero(this.getDate() , 2));
    format = format.replace(/MM/g, addZero(this.getMonth() + 1, 2));
    format = format.replace(/YYYY/g, this.getFullYear());
    format = format.replace(/HH/g, addZero(this.getHours(), 2));
    format = format.replace(/mm/g, addZero(this.getMinutes(), 2));
    format = format.replace(/SS/g, addZero(this.getSeconds(), 2));

    return format;
};

var today = new Date();
console.log(today.formatDate('DD.MM.YYYY HH:mm:SS'));


function randomLiczby () {
    var tablica = [];
    /**
     * pętla spawdza czy liczba nie została już wylosowana
     * LOSOWANIE BEZ POWTÓRZEŃ
     */
    for (var i = 0, max = 6; i < max; i++) {
        var random = Math.floor(Math.random() * 49) + 1;

        tablica[i] = random;

        for (var j = 0; j <= i - 1; j++) {
            if (tablica[j] === tablica[i]) {
                i--;
            }
        }



    }
    const neWtablica = tablica;

    neWtablica.sort(function (a, b) {
        return a - b;
    });

    console.log('tablica 6 liczb losowych:', neWtablica);

    neWtablica.toString(neWtablica);

    return neWtablica;
}
//alert(neWtablica);

let contenerLiczbowy = document.querySelector('.contenerLiczbowy');
let button = document.querySelector('.btn');
let h1Date = document.querySelector('#center h1');
/**nasłuch na button który odświerza liczby oraz dodaje aktualną datę */

h1Date.innerHTML = 'Losowanie Liczb Data: ' +
    today.formatDate('DD.MM.YYYY HH:mm:SS');
    
button.addEventListener('click', () => {
randomLiczby();
contenerLiczbowy.innerHTML = randomLiczby();
var today = new Date();
h1Date.innerHTML = 'Losowanie Liczb Data: '+
today.formatDate('DD.MM.YYYY HH:mm:SS');
});

