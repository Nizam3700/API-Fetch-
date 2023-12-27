function validateLogin() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';


    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username !== storedUsername || password !== storedPassword) {
        document.getElementById('passwordError').textContent = 'Incorrect username or password';
        document.getElementById('passwordError').style.color = "Red";
        document.getElementById('passwordError').style.fontSize = "15px";
        document.getElementById('passwordError').style.fontWeight = "550";
        return false; // Prevent form submission
    }



    var customAlertMessage = document.getElementById("customAlertMessage");
    customAlertMessage.innerHTML = "Successfully Logged In";

    // Show the custom alert modal
    $('#customAlertModal').modal('show');

    // Prevent form submission
    return false;
}

// Function to redirect after a delay
function redirect() {

    setTimeout(function () {
        window.location.href = 'index.html';
    }, 1000);



    window.location.href = 'index.html';


    return false;
}