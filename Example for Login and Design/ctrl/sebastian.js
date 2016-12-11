//Make column Q, R and S
//From cash flow table

//TODO add so that the changes happen when there is a change in any of the fields it depends on.

//Give different variables the value that is in that input field
//If the cell is in "indata & resultat", then the id will be #indata-row
//If the cell is in "grundläggande antaganden", then the id will be #extended-row
//If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5

//Column Q 
//If Ekonomisk Livslängd > Ai then Qi = Q(i-1)+Pi
//Should be updated if there are any changes to Ekonomisk Livslängd or there is any change in P (this solution should cover all cases)
$('#calculations').on('change', '#indata-24, #p-4', function(ev){

    $("#q-4").val(  parseInt($("#p-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(  parseInt($("#q-"+(i-1)).val()) +  parseInt($("#p-"+i).val()) );
    }
});

//Column R
//Ri = SUM(Fi:Mi)
//Should be updated if there is any change to any of the fields in F:M
$('#calculations').on('change', '#f-4,f-5,f-6,f-7,f-8,f-9,f-10,f-11,f-12,f-13,f-14,f-15,f-16,f-17,f-18,f-19,f-20,f-21,f-22,f-23,f-24,f-25,f-26,f-27,f-28,f-29,f-30,f-31,f-32,f-33,f-34,f-35,f-36,f-37,f-38,f-39,f-40,f-41,f-42,f-43,f-44,f-45,f-46,f-47,f-48,f-49,f-50,f-51,f-52,f-53,f-54, g-4, h-4, i-4, j-4, k-4, l-4, m-4', function(ev){

    var r55 = 0;

    for(var i = 4; i < 55; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r55 = r55 +  parseInt($("#r-"+i).val());
    }
    $("#r-55").val(r55); 
});

//Column S
//If Ekonomisk Livslängd > Ai then Si = S(i-1)+Ri
//Should be updated if there are any changes to Ekonomisk Livslängd or there is any change in R
$('#calculations').on('change', '#indata-24, #r-4', function(ev){

    $("#s-4").val(  parseInt($("#r-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
});