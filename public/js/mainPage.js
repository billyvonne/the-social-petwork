$(document).ready(function() {
  // Set-up jQuery references
  var r1 = $("#recent-pets-r1");
  var r2 = $("#recent-pets-r2");

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

  // Event listeners for Register and Login buttons
  $(document).on("submit", "#register", handleNewUserSubmit);
  $(document).on("submit", "#login", handleUserLogInSubmit);

  // Display Most Recent Pets
  getRecentPets();

  // On-click event for Register Button
        function handleNewUserSubmit(event) {
            event.preventDefault();

            var newUser = {
                first_name: $("#first_name").val().trim(),
                last_name: $("#last_name").val().trim(),
                user_email: $("#email").val().trim(),
                user_password: $("#password").val().trim(),
            };

            $.post("/api/newuser", newUser)
                .then(function(data) {
                    var x = document.getElementById("logDIV");
                    if (x.style.display !== "none") {
                        x.style.display = "none";
                    } 
                    $("#logDIV").toggle(500);

                    console.log(data);
                    alert("New User added. Please login!");
                });

            $("#first_name").val("");
            $("#last_name").val("");
            $("#email").val("");
            $("#password").val("");
        }
  // On-click event for Login button
        function handleUserLogInSubmit(event) {
            event.preventDefault();
        }

  // Most Recent Pets
        // A function to create a card with pet data
        function createRecentPetCard(petData) {
            var newCol = $("<div class='col s4'>");
            var newCard = $("<div class='card'>");
            newCard.append("<div class='card-image'><img src='https://www.studiblog.net/wp-content/uploads/2016/09/Unbenannt-660x330.png><a class='btn-floating halfway-fab waves-effect waves-light red><i class='material-icons'>add</i></a></div>");
            newCard.append("<div class='card-content'><p>" + petData.pet_name + "</p></div>");
            newCol.append(newCard);
            return newCol;
        }

        // A function to GET most recent pets from the DB and get them ready for display
        function getRecentPets() {
            $.get("/api/pets", function(data) {
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

        // Two functions to display most recent pets to the page
        function renderRecentPetsR1(cards) {
            r1.empty();
            r1.append(cards);
        }
        function renderRecentPetsR2(cards) {
            r1.empty();
            r2.append(cards);
        }
  // Featured Pet
        // A function for retrieving featured pet

        // A function for displaying photo and name of featured pet
        
});