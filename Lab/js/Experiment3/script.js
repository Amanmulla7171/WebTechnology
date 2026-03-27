

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let messageElement = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        messageElement.innerHTML = "All fields are required.";
        messageElement.style.color = "red";
        return false;
    }

  
    if (password.length < 6) {
        messageElement.innerHTML = "Password must be at least 6 characters long.";
        messageElement.style.color = "red";
        return false;
    }
    messageElement.innerHTML = "Form submitted successfully!";
    messageElement.style.color = "green";
    return true;




}