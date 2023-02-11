document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const newdepositAmount = depositField.value ;
   const newdepositAmounts = parseFloat(newdepositAmount);


   const depositTotalElement = document.getElementById('deposit-total');
  
   const previousDepositTotalstring = depositTotalElement.innerText;
   const previousDepositTotals = parseFloat(previousDepositTotalstring);
  
   const currentDepositeTotal = previousDepositTotals + newdepositAmounts;
   depositTotalElement.innerText = currentDepositeTotal;



   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalstring = balanceTotalElement.innerText;
   const previousblanceTotals = parseFloat(previousBalanceTotalstring);
   

   const newbalancetotal = currentDepositeTotal  + previousblanceTotals;
   balanceTotalElement.innerText = newbalancetotal;




   













  //clearing the value inside the field
   depositField.value ='';
   
    





}
)