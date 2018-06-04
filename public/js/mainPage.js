console.log("loaded da main page!");

$(document).ready(function() {
    //   Toggle between "Sign-Up" and "Welcome Back" buttons

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

  // On-click event for Register Button
        $("#signup").click(function(event) {
            event.preventDefault();
            console.log("You Hit Submit!");
            var newUser = {
                first_name: $("#first_name").val().trim(),
                last_name: $("#last_name").val().trim(),
                username: $("#username").val().trim(),
                email: $("#email").val().trim(),
                user_pass: $("#user_pass").val().trim(),
            };

            $.post("/signup", newUser)
                .then(function(data) {

                    console.log(data);
                    alert("New User added. Please login!");
                });

            $("#first_name").val("");
            $("#last_name").val("");
            $("#username").val("");
            $("#email").val("");
            $("#user_pass").val("");
        });

    // On-click event for Login button
        $("#login").click(function(event) {
            event.preventDefault();
            console.log("You hit login!");
            
        })
});