// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both fields are filled
    if (username === '' || password === '') {
        alert('Please enter both email/phone and password');
    } else {
        alert('Login successful! (This is a simulation)');
    }
}

// Attach event listener to the form for submission
document.getElementById('loginForm').addEventListener('submit', handleLogin);
