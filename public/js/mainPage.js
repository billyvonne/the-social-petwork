$(document).ready(function() {
  // Set-up jQuery references
  var r1 = $("#recent-pets-r1");
  var r2 = $("#recent-pets-r2");

  // Toggle between "Sign-Up" and "Welcome Back" buttons
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

  // Event listeners for Register and Login buttons
  $(document).on("submit", "#register", handleNewUserSubmit);
  $(document).on("submit", "#login", handleUserLogInSubmit);

  // On-click event for Register Button
        function handleNewUserSubmit() {
            event.preventDefault();
        }
  // On-click event for Login button
        function handleUserLogInSubmit() {
            event.preventDefault();
        }

  // Most Recent Pets
        function getRecentPets() {
            $.get("", function(data) {
                var row1 = [];
                var row2 = [];
                for (var i = 0; i < 6; i++) {
                    if (i < 3) {
                        row1.push(createRecentPetCard(data[i]));
                    } else {
                        row2.push(createRecentPetCard(data[i]));
                    }
                }
                renderRecentPetsR1(row1);
                renderRecentPetsR2(row2);
            });
        }
  // Featured Pet
        // A function for retrieving featured pet

        // A function for displaying photo and name of featured pet
        
});