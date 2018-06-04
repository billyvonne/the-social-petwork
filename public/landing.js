$(document).ready(function() {
  
    // Toggle between "Sign-Up" and "Welcome Back" buttons
      $('select').material_select();
      });
  
      $(".1").click(function(){
  
      var x = document.getElementById("logDIV");
      if (x.style.display !== "none") {
          x.style.display = "none";
      } 
      $("#regDIV").toggle(500);
      
      });
  
      $(".2").click(function(){
          var y = document.getElementById("regDIV");
          if (y.style.display !== "none") {
              y.style.display = "none";
          } 
      $("#logDIV").toggle(500);

});