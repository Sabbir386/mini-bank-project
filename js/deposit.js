document.getElementById('btn-deposit').addEventListener('click', function(){
    //current deposait Amount
    const newDepositAmount=getInputFieldElementById('input-field');

    //previous total deposait Amount
    const previousDepositAmount=previousAmountGetElementById('deposit-total');

    //updating total deposit amount
    const currentDepositAmount= previousDepositAmount+newDepositAmount;
    setTextElementvalueById('deposit-total',currentDepositAmount);

    //Get previous Balance shit
    const previousMainBalanceAmount=previousAmountGetElementById('Balance-total');

    //updating Balance shit with deposit amount
    const newBalanceshitAmount=  previousMainBalanceAmount+newDepositAmount;
    setTextElementvalueById('Balance-total',newBalanceshitAmount);

})
