const enterAmountInput = document.getElementById('amount');
const fromcurrency = document.getElementById('fromcurrency');
const tocurrency = document.getElementById('tocurrency');
const convertButton = document.getElementById('convertbutton');
const swapButton = document.getElementById('swap');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetbutton');
const apiKey = `cc59899f8af353064712cff3`;

swapButton.addEventListener ('click', () => {
    const temp = fromcurrency.value;
    fromcurrency.value = tocurrency.value;
    tocurrency.value = temp;
});

resetButton.addEventListener('click', () => {
    enterAmountInput.value = '';
    fromcurrency.value = 'USD';
    tocurrency.value = 'INR';
    resultDiv.innerText = '';
});

async function convertCurrency() {
    const amount = enterAmountInput.value;
    const fromCurr = fromcurrency.value;
    const toCurr = tocurrency.value;

    if (amount === '' ||!amount || !fromCurr || !toCurr) {
  resultDiv.innerText = " Please enter amount and select both currencies.";
  return;
}
else{
try {
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurr}/${toCurr}/${amount}`;
    let response = await fetch(url);
    let data = await response.json();

    resultDiv.innerText = `${amount} ${fromCurr} = ${data.conversion_result.toFixed(2)} ${toCurr}`;
  } catch (error) {
    resultDiv.innerText = "Error fetching exchange rate data.";
    console.error("Error:", error);
  }
}
}

convertButton.addEventListener('click', convertCurrency);
