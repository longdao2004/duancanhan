// .checked = property that determines the checked state of an 
// HTML checkbox or radio button element
const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subriced`;
    } else {
        subResult.textContent = `You are not subriced`
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `you are paying with visa`;
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `you are paying with master card`
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `you are paying with PayPal`;
    } else {
        paymentResult.textContent = `Please select a payment method`
    }
}
