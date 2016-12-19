
//calculate cell indata-55
//this should be called when extended-64, a-4 to a-54 (cashflow - you may decide if you want this too), b-4 to b-54 (cashflow) are changed
/*$('#calculations').on('change', '#extended-64', function(ev){
  
  var e64 = parseInt($( "#extended-64" ).val());
  var sum = 0; //set sum counter to 0
  var currentA, currentB = 0;
   
  //loop through row 4-54 in column A and B of the cashflow table
  for(var i = 4; i < 55; i++){
	//retrieve the current A and B cell's value
    currentA = parseInt($( "#a-" + i ).val());
    currentB = parseInt($( "#b-" + i ).val());
	
	//if currentA <= "elcertifikatår" then add currentB to the sum
	if(currentA <= e64)	
		sum = sum + currentB;
  }
  
  sum = (Math.round(sum)).toLocaleString(); //get spaces between the numbers (easier to read), and round the result. 
  
  $( "#indata-55" ).val(sum);
  
  alert("indata-55 = " + sum); //test
});*/





/*------------------------------------------------------------------------------------------------------------------------------

//calculate production cost for the cell D72 
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD72() {
	
	//start the calculation and save the result in a variable - send in "41" for cell D41
	var productionCostD72 = calculateProductionCost("41");
	
	//assign the result to the correct input box on the website
	$( "#indata-72" ).val( productionCostD72 );
}


//calculate production cost for the cell D73 
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD73() {
	
	//start the calculation and save the result in a variable - send in "42" for cell D42
	var productionCostD73 = calculateProductionCost("42");
	
	//assign the result to the correct input box on the website
	$( "#indata-73" ).val( productionCostD73 );
}


//calculate production cost for the cell D74 
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD74() {
	
	//start the calculation and save the result in a variable - send in "43" for cell D43
	var productionCostD74 = calculateProductionCost("43");
	
	//assign the result to the correct input box on the website
	$( "#indata-74" ).val( productionCostD74 );
}


//calculate the production cost
//(you have to send in either "41", "42" or "43" to this function)
function calculateProductionCost(X){
	
	//some error handling if you do not send in "41", "42" or "43" to the function:
	if(X != "41" && X != "42" && X != "43"){
	  console.log("ERROR: input parameter to the function 'calculateProductionCost' is not '41', '42' or '43'");
	  return 0;
	}
	
	//values from the tab "indata & result" in the given excel file:
	var inDX = $( "#indata-" + X ).val(); //here you will retrieve the value of either cell D41, D42 or D43 
	var inD28 = $( "#indata-28" ).val();
	var inD24 = $( "#indata-24" ).val();
	var inD49 = $( "#indata-49" ).val();
	var inD18 = $( "#indata-18" ).val();
	//value from the tab "grundläggande antaganden" in the given excel file:
	var extD52 = $( "#extended-52" ).val();
	//value from the tab "kassaflöden" in the given excel file:
	var cashflowC55 = $( "#c-55" ).val();
	
	//perform the calculation for production cost
	//"inD49 / Math.pow((1 + inD28), inD24))" - same formula as "nuvärde år n = A / (1+kalkylränta)^n":
	var productionCost = (inDX + (inD49 / Math.pow((1 + inD28), inD24)) - (extD52) / (Math.pow((1 + inD28), inD24))) / (cashflowC55 / inD18);
	
	//return the calculated production cost but with only 3 decimals:
	return (productionCost.toFixed(3));
}

*/



/*---------------------------------------------------------------------------------------------------------------------------------

//Make column K, L and M - cash flow diagram (the upper one)


//give different variables the value that is in that input field
//If the cell is in "indata & resultat", then the id will be #indata-row
//If the cell is in "grundläggande antaganden", then the id will be #extended-row
//If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5


//column K 
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('change', '#extended-64, #indata-65, #indata-66, #indata-64', function(ev){
  var p64 = $( "#indata-64" ).val();
  var p65 = $( "#indata-65" ).val();
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = $( "#indata-66" ).val();
  p66 = p66 / 100;
  var e64 = $( "#extended-64" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val(); //improvement (?) - put declaration of "currentA", "currentC", "result" before the for-loop, to avoid creating several different variables?
	var currentC = $( "#c-" + i ).val(); 
    var result = 0; 
		
    if(+e64 >= +currentA)
      //perform the calculation and save the result in a variable
      result = currentC * p65 * (1-p66) * p64;
	//else result = 0
      
    $( "#k-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
	sum = sum + result; //increase the sum   
	
	//var testStr1 = "result of K" + i + "=" + result;
	//alert(testStr1); //test
  }
  
  $( "#k-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum 
  
  //var testStr2 = "total K sum=" + sum;
  //alert(testStr2); //test
});


//column L 
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('change', '#indata-24, #indata-67', function(ev){
  var p24 = $( "#indata-24" ).val();
  var p67 = $( "#indata-67" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    var currentC = $( "#c-" + i ).val();
	var result = 0;
	
	if(+p24 >= +currentA)
		//perform the calculation and save the result in a variable
		result = currentC * p67;
	//else result = 0
	
    $( "#l-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
	sum = sum + result; //increase the sum  
	
	//var testStr1 = "result of L" + i + "=" + result;
	//alert(testStr1); //test
  }
  
  $( "#l-55" ).val( Math.round(sum) );
  
  //var testStr2 = "total L sum=" + sum;
  //alert(testStr2); //test
});


//column M
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('change', '#indata-24, #indata-68, #indata-60, #extended-65, #extended-66, #indata-28', function(ev){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100; // divide by 100 since it is a % unit
  var p60 = $( "#indata-60" ).val();
  p60 = p60 / 100; 
  var p68 = $( "#indata-68" ).val();
  var e65 = $( "#extended-65" ).val();
  var e66 = $( "#extended-66" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
	var currentC = $( "#c-" + i ).val();
	var result = 0;
	
	//perform calculations if necessary
	if(+p24 >= +currentA && +p68 >= +currentA) {
		if((currentC * (1-p60) * e65) > (+e66))
			result = 18000 / Math.pow((1+p28), currentA);
		else
			result = currentC * (1-p60) * e65;
	}
	//else result = 0;
		
    $( "#m-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
	sum = sum + result; //increase the sum  
	
	//var testStr1 = "result of M" + i + "=" + result;
	//alert(testStr1); //test
  }

  $( "#m-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum 
  
  //var testStr2 = "total M sum=" + sum;
  //alert(testStr2); //test  
});

*/