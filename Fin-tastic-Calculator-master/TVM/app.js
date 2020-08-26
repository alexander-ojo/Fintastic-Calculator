//This file supports the TVM financial function by opening a new tab for the user to input their calculation
//programmer: Mustafa Mohsin
//Date Coded: July 21, 2020
//Date Approved: Aug 3, 2020
//Approved by: All Group Members
//Arguments: event listeners and variables act as arguments to run the code and for calculating variables of TVM such as principal1, principal2 and AccInterest etc.
//Constants: amount, Fvamount, interest, years, ans, principal1, principal2, AccInterest, Periods
//Variables: result, count
//Files accessed: index.html, styles.css
//Files Changed: None
//Input: event listeners used for mouse click, keyboard used to enter values ( amount, Fvamount, interest, years)
//Output: error messages, instructions displayed and the result of the calculation (result)
//Error handling: negative numbers, blank values, no fields left blank cause an error message, and decimal values in fields also cause an error message.
//List of previous modifications and who approved:
//1.Modifying error messages - Approved by all
//2.Removing redundant code - Approved by all
//3.Optimizing code - Approved by all
//Any known faults: None


// Listen for the event listener of click
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Show Loader
  document.getElementById("loading").style.display = "block";
 
  setTimeout(calculations, 2000);
 
  e.preventDefault();
});

//Alert in the beginning of page
alert("Please leave exactly one option blank, the option left blank will be calculated for you")


// Calculate Results
function calculations() {
 
  //Declaring elements to select 
  const amount = document.getElementById("amount");
  const Fvamount = document.getElementById("fvamount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const ans = document.getElementById("answer");

  //Declaring variables that are changeable
  var result;
  var count =0;
  
  //changing elements to numbers
  const principal1 = parseFloat(amount.value);
  const principal2 = parseFloat(Fvamount.value);
  const AccInterest = parseFloat(interest.value) / 100 ;
  const Periods = parseFloat(years.value);
  
  //Error Catches
  //Negative number errors
  if(principal1<0 || principal2 <0 || AccInterest<0 || Periods<0){
    alert("Please Input positive values")
  }
  //If all numbers exist error
  else if (principal1 && principal2 && AccInterest && Periods){
    alert("Please leave one field blank")
  }

  //Mix and match errors
  if(!years.value){
    count+=1
  }
  if(!amount.value){
    count+=1
  }
  if(!Fvamount.value){
    count+=1
  }
  if(!interest.value){
   count+=1
  }
  if (count>1){
    alert("Error")
  }
 
  
  //Finds the year variable
  if (!years.value){
    document.getElementById("type").textContent = "Years";
    result = Math.log(principal2/principal1)/Math.log(1+AccInterest);
    ans.value = Math.round(result*100)/100;
  }

  //Finds present value
  if(!amount.value){
    result = principal2/((1+AccInterest)**Periods);
    document.getElementById("type").textContent = "Present Value";
    ans.value = Math.round(result*100)/100;
  }

  //finds future value
  if(!Fvamount.value){
    result = principal1 * ((1+AccInterest)**Periods);
    document.getElementById("type").textContent = "Future Value";
    ans.value = Math.round(result*100)/100;
    }

  //finds interest value
  if(!interest.value){
    result = ((principal2/principal1)**(1/Periods))-1
    document.getElementById("type").textContent = "Interest %";
    ans.value = Math.round(result*100*100)/100;
  }

    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader gif
    document.getElementById("loading").style.display = "none";
} 
