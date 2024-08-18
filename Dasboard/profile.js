const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate authentication (replace with actual validation)
  if (username === 'Rohit' && password === 'Rohit@123') {
    // Login successful (redirect to dashboard or handle login logic)
    window.location.href = 'Dashboard.html'; // Replace with actual redirect URL
  } else {
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.style.display = 'block';
  }
});

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Maths',     11],
          ['English',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'Your subject wise marks'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piebar'));

        chart.draw(data, options);
      }