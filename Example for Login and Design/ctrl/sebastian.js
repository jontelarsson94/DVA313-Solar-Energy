//Column Q, R and S
//Second cash flow table

//TODO add so that the changes happen when there is a change in any of the fields it depends on.

//Give different variables the value that is in that input field
//If the cell is in "indata & resultat", then the id will be #indata-row
//If the cell is in "grundläggande antaganden", then the id will be #extended-row
//If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5

//Column Q 
//If Ekonomisk Livslängd > Ai then Qi = Q(i-1)+Pi
//Should be updated if there are any changes to Ekonomisk Livslängd or there is any change in P (this solution should cover all cases)
/*$('#calculations').on('change', '#indata-24, #p-60', function(ev){

    $("#q-60").val(  parseInt($("#p-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(  parseInt($("#q-"+(i-1)).val()) +  parseInt($("#p-"+i).val()) );
    }
});*/

//Column R
//Ri = SUM(Fi:Mi)
//Should be updated if there is any change to any of the fields in F:M
/*$('#calculations').on('change', '#f-60,f-61,f-62,f-63,f-64,f-65,f-66,f-67,f-68,f-69,f-70,f-71,f-72,f-73,f-74,f-75,f-76,f-77,f-78,f-79,f-80,f-81,f-82,f-83,f-84,f-85,f-86,f-87,f-88,f-89,f-90,f-91,f-92,f-93,f-94,f-95,f-96,f-97,f-98,f-99,f-100,f-101,f-102,f-103,f-104,f-105,f-106,f-107,f-108,f-109,f-110, g-60, h-60, i-60, j-60, k-60, l-60, m-60', function(ev){

    var r111 = 0;

    for(var i = 60; i < 111; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r111 = r111 +  parseInt($("#r-"+i).val());
    }
    $("#r-111").val(r111); 
});*/

//Column S
//If Ekonomisk Livslängd > Ai then Si = S(i-1)+Ri
//Should be updated if there are any changes to Ekonomisk Livslängd or there is any change in R
/*$('#calculations').on('change', '#indata-24, #r-60', function(ev){

    $("#s-60").val(  parseInt($("#r-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
});*/