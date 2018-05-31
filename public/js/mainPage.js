$(document).ready(function() {

  // Toggle between Sign-Up and Log-In buttons
    $('select').material_select();
    });

    $(".1").click(function(){

    var x = document.getElementById("myDIV2");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } 
    $("#myDIV").toggle(500);
    
    });

    $(".2").click(function(){
        var y = document.getElementById("myDIV");
        if (y.style.display !== "none") {
            y.style.display = "none";
        } 
    $("#myDIV2").toggle(500);
});