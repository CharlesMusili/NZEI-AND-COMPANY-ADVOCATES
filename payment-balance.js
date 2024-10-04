document.addEventListener('DOMContentLoaded', function() {
    const balanceElement=
document.getElementById('currentBalance');
const paymentForm=
document.getElementById('paymentForm');
const paymentAmountInput=
document.getElementById('paymentAmount');
let currentBalance= 0.00; //

function
updateBalance(amount) {
    currentBalance +=parseFloat(amount);
    balanceElement.textContent = currentBalance.toFixed(2);
}
paymentForm.addEventListener('submit', function(event){
    event.preventDefault();//

const paymentAmount=
paymentAmountInput.value;
if (paymentAmount && ! isNaN(paymentAmount)){
    updateBalance(paymentAmount);
    paymentAmountInput.value=''; //
    
}
});
});