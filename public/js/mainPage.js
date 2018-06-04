console.log("loaded da main page!");

$(document).ready(function() {
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

            $.post("/api/signup", newUser)
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

        
});