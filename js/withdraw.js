document.getElementById('btn-Withdraw').addEventListener('click', function(){
    //current widthdraw Amount
    const newWithdrawAmount=getInputFieldElementById('input-widthdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid input');
        return;
    }

    //previous total widthdraw Amount
    const previousWithdrawAmount=previousAmountGetElementById('withdraw-total');
     
     //Get previous Balance shit
     const previousMainBalanceAmount=previousAmountGetElementById('Balance-total');

     if(newWithdrawAmount>previousMainBalanceAmount){
        alert('bank e Ato taka nai');
        return;
     }

    //updating total widthdrawamount
    const currentWithdrawAmount= previousWithdrawAmount+newWithdrawAmount;
    setTextElementvalueById('withdraw-total',currentWithdrawAmount);

    //updating Balance shit with deposit amount
    const newBalanceshitAmount=  previousMainBalanceAmount-newWithdrawAmount;
    setTextElementvalueById('Balance-total',newBalanceshitAmount);

})