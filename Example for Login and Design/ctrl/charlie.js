//Make column K, L and M


//Always use #calculations as the identifier in the $('#calculations')
//Then look in the excel sheet and in the formula for that cell there will be a number of different cells that make the calculations.
//Whenever any of these cells get changed, the calculations should be performed. This is all the other ids after the .on('keyup')
//So basically just copy this function and change the different ids to match the formula in your cell.


//column K (OBS. since A-nr, C-nr are in the formula, then they should always be counted before?) <------------------
$('#calculations').on('keyup', '#extended-64, #indata-65, #indata-66, #indata-64', function(ev){
  //give different variables the value that is in that input field
  //If the cell is in "indata & resultat", then the id will be #indata-row
  //If the cell is in "grundläggande antaganden", then the id will be #extended-row
  //If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5
  var p64 = $( "#indata-64" ).val();
  var p65 = $( "#indata-65" ).val();
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = $( "#indata-66" ).val();
  p66 = p66 / 100;
  var e64 = $( "#extended-64" ).val();
  
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
	var currentC = $( "#c-" + i ).val();
    var result = 0;
	
    if(+e64 >= +currentA)
      //perform the calculation and save result in a variable
      result = currentC * p65 * (1-p66) * p64;
	else
	  //otherwise just assign it 0
	  result = 0;
     
    sum = sum + result;
   
    //give the cell (input field) that value
    $( "#k-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#k-55" ).val( Math.round(sum) );

  
  
  
  
//This is added because C column also needs to change values when B column does
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = currentB/Math.pow((1+p28), currentA);
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
});

$('#calculations').on('keyup', '#indata-28', function(ev){
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = currentB/Math.pow((1+p28), currentA);
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
});

$('#calculations').on('keyup', '#indata-24, #indata-28, #extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-38, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45, #extended-46', function(ev){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    if(+currentA <= +p24){
      result = -((p47+p48)/Math.pow((1+p28), currentA));
      sum = sum + result;
    }
    $( "#g-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#g-55" ).val( Math.round(sum) );
});






/*------------------------------

//make B, C and G

//Always use #calculations as the identifier in the $('#calculations')
//Then look in the excel sheet and in the formula for that cell there will be a number of different cells that make the calculations.
//Whenever any of these cells get changed, the calculations should be performed. This is all the other ids after the .on('keyup')
//So basically just copy this function and change the different ids to match the formula in your cell.
$('#calculations').on('keyup', '#indata-24, #indata-18, extended-60, indata-53, extended-56', function(ev){
  //give different variables the value that is in that input field
  //If the cell is in "indata & resultat", then the id will be #indata-row
  //If the cell is in "grundläggande antaganden", then the id will be #extended-row
  //If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5
  var p24 = $( "#indata-24" ).val();
  var p18 = $( "#indata-18" ).val();
  var e60 = $( "#extended-60" ).val();
  e60 = e60 / 100; // divide by 100 since it is a % unit
  var p53 = $( "#indata-53" ).val();
  var e56 = $( "#extended-56" ).val();
  e56 = e56/100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var current = $( "#a-" + i ).val();
    var result = 0;
    if(+current <= +p24){
      //perform the calculation and save result in a variable
      result = p18 * e60 * p53 * (Math.pow((1-e56), (current-1)));
      //
      sum = sum + result;
    }
    //give the cell (input field) that value
    $( "#b-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#b-55" ).val( Math.round(sum) );

//This is added because C column also needs to change values when B column does
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = currentB/Math.pow((1+p28), currentA);
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
});

$('#calculations').on('keyup', '#indata-28', function(ev){
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = currentB/Math.pow((1+p28), currentA);
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
});

$('#calculations').on('keyup', '#indata-24, #indata-28, #extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-38, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45, #extended-46', function(ev){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    if(+currentA <= +p24){
      result = -((p47+p48)/Math.pow((1+p28), currentA));
      sum = sum + result;
    }
    $( "#g-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#g-55" ).val( Math.round(sum) );
});

*/