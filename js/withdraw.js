document.getElementById('btn-Withdraw').addEventListener('click', function(){
    //current widthdraw Amount
    const newWithdrawAmount=getInputFieldElementById('input-widthdraw-field');

    //previous total widthdraw Amount
    const previousWithdrawAmount=previousAmountGetElementById('withdraw-total');

    //updating total widthdrawamount
    const currentWithdrawAmount= previousWithdrawAmount+newWithdrawAmount;
    setTextElementvalueById('withdraw-total',currentWithdrawAmount);

    //Get previous Balance shit
    const previousMainBalanceAmount=previousAmountGetElementById('Balance-total');

    //updating Balance shit with deposit amount
    const newBalanceshitAmount=  previousMainBalanceAmount-newWithdrawAmount;
    setTextElementvalueById('Balance-total',newBalanceshitAmount);

})