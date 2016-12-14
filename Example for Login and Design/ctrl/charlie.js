//Make column K, L and M


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

