// Replace with your OpenWeatherMap API key
const apiKey = '8e7d514b9b9f283a3bc7d85b44d64b46';
const city = 'Indore';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract necessary data
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const currentTime = new Date().toLocaleTimeString();
        const windSpeed = data.wind.speed;
        // const wind = data.wind[0].description
        
        // Extract precipitation data
        let precipitation = 'None';
        if (data.rain) {
            precipitation = `${data.rain['1h']} mm (last hour)`;
        } else if (data.snow) {
            precipitation = `${data.snow['1h']} mm (last hour)`;
        }
        
        // Update HTML content
        document.getElementById('UNITS').textContent = `${temperature}°C`;
        document.getElementById('Condition').textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
        document.getElementById('Time').textContent = currentTime;
        document.getElementById('Precipitation-Amount').textContent = precipitation;
        document.getElementById('UNITS3').textContent = `${windSpeed} m/s`;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather data
fetchWeatherData();
