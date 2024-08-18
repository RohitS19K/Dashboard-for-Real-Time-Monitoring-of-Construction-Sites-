const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate authentication (replace with actual validation)
  if (username === 'admin' && password === 'admin@123') {
    // Login successful (redirect to dashboard or handle login logic)
    window.location.href = 'dasb.html'; // Replace with actual redirect URL
  } else {
    errorMessage.textContent = 'Invalid username or password';

    errorMessage.style.display = 'block';
  }
});