$(document).ready(function() {
    $('#submit-btn').click(function() {
        var password = $('#password').val();
        var correctPassword = "yourpassword"; // Replace with your desired password
        if (password === correctPassword) {
            window.location.href = "resume.html"; // Replace with the path to your resume
        } else {
            $('#error-message').text("Incorrect password. Please try again.");
        }
    });
});