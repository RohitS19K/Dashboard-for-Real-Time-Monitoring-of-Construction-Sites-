document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const lat = 22.761111;
    const lon = 75.886111;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const windSpeed = data.wind.speed;
            document.getElementById('UNITS3').textContent = `${windSpeed} m/s`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
