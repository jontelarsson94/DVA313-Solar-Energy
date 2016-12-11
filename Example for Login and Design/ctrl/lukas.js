//Make column N, O and P
//From cash flow table
// copied and changed the code from sebastian, sry :)

//Column N
//Ni = SUM(Di;Gi:Mi)
$('#calculations').on('change', '#d-4,d-5,d-6,d-7,d-8,d-9,d-10,d-11,d-12,d-13,d-14,d-15,d-16,d-17,d-18,d-19,d-20,d-21,d-22,d-23,d-24,d-25,d-26,d-27,d-28,d-29,d-30,d-31,d-32,d-33,d-34,d-35,d-36,d-37,d-38,d-39,d-40,d-41,d-42,d-43,d-44,d-45,d-46,d-47,d-48,d-49,d-50,d-51,d-52,d-53,d-54,g-4,h-4,i-4,j-4,k-4,l-4,m-4', function(ev){

    var n55 = 0;

    for(var i = 4; i < 55; i++){
            $("#n-"+i).val(  parseInt($("#d-"+i).val())
                          +  parseInt($("#g-"+i).val())
                          +  parseInt($("#h-"+i).val())
                          +  parseInt($("#i-"+i).val())
                          +  parseInt($("#j-"+i).val())
                          +  parseInt($("#k-"+i).val())
                          +  parseInt($("#l-"+i).val())
                          +  parseInt($("#m-"+i).val()) );
            n55 = n55 +  parseInt($("#n-"+i).val());
    }
    $("#n-55").val(n55);
});

//Column O
//If Ekonomisk Livslängd > Ai then Oi = O(i-1)+Ni
$('#calculations').on('change', '#indata-24, #n-4', function(ev){

    $("#o-4").val(  parseInt($("#n-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(  parseInt($("#o-"+(i-1)).val()) +  parseInt($("#n-"+i).val()) );
    }
});

//Column P
//Ni = SUM(Ei;Gi:Mi)
$('#calculations').on('change', '#e-4,e-5,e-6,e-7,e-8,e-9,e-10,e-11,e-12,e-13,e-14,e-15,e-16,e-17,e-18,e-19,e-20,e-21,e-22,e-23,e-24,e-25,e-26,e-27,e-28,e-29,e-30,e-31,e-32,e-33,e-34,e-35,e-36,e-37,e-38,e-39,e-40,e-41,e-42,e-43,e-44,e-45,e-46,e-47,e-48,e-49,e-50,e-51,e-52,e-53,e-54,g-4,h-4,i-4,j-4,k-4,l-4,m-4', function(ev){

    var n55 = 0;

    for(var i = 4; i < 55; i++){
            $("#n-"+i).val(  parseInt($("#e-"+i).val())
                          +  parseInt($("#g-"+i).val())
                          +  parseInt($("#h-"+i).val())
                          +  parseInt($("#i-"+i).val())
                          +  parseInt($("#j-"+i).val())
                          +  parseInt($("#k-"+i).val())
                          +  parseInt($("#l-"+i).val())
                          +  parseInt($("#m-"+i).val()) );
            n55 = n55 +  parseInt($("#n-"+i).val());
    }
    $("#n-55").val(n55);
});
