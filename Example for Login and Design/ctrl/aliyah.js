<<<<<<< HEAD


function Cal_extended_25() {
    alert("check indata-18 value" + $("#indata-18").val());
    var p18 = $("#indata-18").val();
    if (p18 <= 10) {
        if (($("#personToggle > label").hasClass("active"))) {
            $("#extended-25").val(3000 * 1.25);
        } else {
            $("#extended-25").val(3000);
        }
    }
    else if (p18 <= 30) {
        if (($("#personToggle > label").hasClass("active"))) {
            $("#extended-25").val(2000 * 1.25);
        } else {
            $("#extended-25").val(2000);
        }
    } else if (p18 <= 100) {
        if (($("#personToggle > label").hasClass("active"))) {
            $("#extended-25").val(1500 * 1.25);
        } else {
            $("#extended-25").val(1500);
        }

    } else {
        if (($("#personToggle > label").hasClass("active"))) {
            $("#extended-25").val(1000 * 1.25);
        } else {
            $("#extended-25").val(1000);
        }

    }
}
=======
//Make column D, E, F
//From cash flow table
>>>>>>> origin/master
