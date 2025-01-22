
    document.getElementById("forms").addEventListener("submit", function(event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;

        const nameError = document.getElementById("nameError");
        const lastError = document.getElementById("lastError");
        const emailError = document.getElementById("emailError");

        console.log(nameError, lastError, emailError);  // Check if any are null

        let hasError = false;

        // First name validation
        if (fname.length < 3 || fname.length > 6) {
          nameError.innerHTML = "First name must be between 3 and 6 characters.";
            hasError = true;
        } else {
             nameError.innerHTML = "";
        }

        // Last name validation
        if (lname.length < 3 || lname.length > 6) {
          lastError.innerHTML = "Last name must be between 3 and 6 characters.";
            hasError = true;
        } else {
             lastError.innerHTML = "";
        }

        // Email validation
        if (email === "") {
             emailError.innerHTML = "Email cannot be empty.";
            hasError = true;
        } else {
            emailError.innerHTML = "";
        }

        if (!hasError) {
            console.log("Form submitted successfully!");
        }
    });

