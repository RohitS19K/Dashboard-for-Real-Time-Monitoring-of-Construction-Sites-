 // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
 const apiKey = '727685b082bfe0bc0a67577268687cfc';
 const city = 'Indore'; // Replace with the city you want to get air quality data for
 const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?appid=${apiKey}&q=${city}`;

 // Function to fetch air quality data
 async function fetchAirQuality() {
   try {
     const response = await fetch(apiUrl);
     const data = await response.json();

     // Check if the API call was successful
     if (response.ok) {
       // Get the air quality data
       const airQualityIndex = data.list[0].main.aqi;
       const airQualityDescription = getAirQualityDescription(airQualityIndex);
       const currentTime = new Date().toLocaleTimeString();

       // Display air quality information on the webpage
       const indexElement = document.getElementById('Index');
       const descriptionElement = document.getElementById('description');
       document.getElementById('td').textContent = currentTime;
       indexElement.textContent = airQualityIndex;
       descriptionElement.textContent = airQualityDescription;
     } else {
       console.error('Failed to fetch air quality data:', data.message);
     }
   } catch (error) {
     console.error('Error fetching air quality data:', error);
   }
 }

 
 // Function to get air quality description based on AQI
 function getAirQualityDescription(aqi) {
   if (aqi <= 50) {
     return 'Good' ;
   } else if (aqi <= 100) {
     return 'Moderate';
   } else if (aqi <= 150) {
     return 'Unhealthy for Sensitive Groups';
   } else if (aqi <= 200) {
     return 'Unhealthy';
   } else if (aqi <= 300) {
     return 'Very Unhealthy';
   } else {
     return 'Hazardous';
   }
 }

 // Call the fetchAirQuality function to fetch air quality data
 fetchAirQuality();