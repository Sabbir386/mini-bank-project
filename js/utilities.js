function getInputFieldElementById(inputId){
    const inputField=document.getElementById(inputId);
    const depositAmountString=inputField.value;
    const newDepositAmount=parseFloat(depositAmountString);
    inputField.value='';
    return  newDepositAmount;
}
function previousAmountGetElementById(inputId){
    const previousTotalDeposit=document.getElementById(inputId);
    const previousTotalDepositString=previousTotalDeposit.innerText;
    const previousTotalDepositAmount=parseFloat(previousTotalDepositString);
    return previousTotalDepositAmount;
}

function setTextElementvalueById(inputId,newValue){
    const textElement=document.getElementById(inputId);
    textElement.innerText=newValue;
}

