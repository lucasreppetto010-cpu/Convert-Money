const convertButton = document.querySelector('.convert-botao');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');//valor em Real
    const currencyValueToConverted = document.querySelector('.currency-value');//outras moedas

    const dolarToday = 5.0;
    const euroToday = 6.5;
    const libraToday = 7.5;
    const bitcoinToday = 150000.0;



    if (currencySelect.value == 'dolar') {
        //se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolarToday);

    }

    if (currencySelect.value == 'euro') {
        //se o select estiver selecionado o valor de euro, entra aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euroToday);

    }

    if (currencySelect.value == 'libra') {
        //se o select estiver selecionado o valor de libra, entra aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / libraToday);

    }



}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');


    if (currencySelect.value == 'dolar') {

        currencyName.innerHTML = 'Dólar americano';
        currencyImage.src = './assets/dolar.png';
    }

    if (currencySelect.value == 'euro') {

        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/euro.png';
    }

    if (currencySelect.value == 'libra') {

        currencyName.innerHTML = 'Libra';
        currencyImage.src = './assets/libra.png';

    }



    convertValues();

}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);