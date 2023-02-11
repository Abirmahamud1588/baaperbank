document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmount = withdrawField.value ;
    const newwithdrawAmounts = parseFloat(newwithdrawAmount);


    const withdrawTotalElement = document.getElementById('withdraw-total');
  
   const previouswithdrawTotalstring = withdrawTotalElement.innerText;
   const previouswithdrawTotals = parseFloat(previouswithdrawTotalstring);


  
   const currentwithdrawTotal = previouswithdrawTotals + newwithdrawAmounts;
   withdrawTotalElement.innerText = currentwithdrawTotal;

   const balancetotal = document.getElementById('balance-total');
   const previousBalanceTotalstring = balancetotal.innerText;
   const previousblanceTotals = parseFloat(previousBalanceTotalstring);

  if(previousblanceTotals < newwithdrawAmounts)
  {
    balancetotal.innerText =    previousblanceTotals;
  }
  else{
    const newtotalafterwithdraw =  previousblanceTotals - newwithdrawAmounts;

    balancetotal.innerText = newtotalafterwithdraw;
 
 
  }
   







})