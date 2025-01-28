document.addEventListener('DOMContentLoaded', function () {
    // Form and feedback selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to the server

        // Input retrieval and trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation logic
        let isValid = true; // Tracks the overall validation status
        const messages = []; // Stores validation error messages

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            feedbackDiv.style.backgroundColor = '#dff0d8';
            form.reset(); // Optionally reset the form
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });
});
